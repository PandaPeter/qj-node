import UserDomain from '../domain/user_domain';
import {
    request,
    summary,
    body,
    tags,
    middlewares,
    path,
    description
  } from 'koa-swagger-decorator';
  
  const tag = tags(['User']);
  
  const userSchema = {
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
    telephone: {type: 'number'},
    address: {type: 'string'}
  };
  
  const logTime = () => async (ctx, next) => {
    console.log(`start: ${new Date()}`);
    await next();
    console.log(`end: ${new Date()}`);
  };
  export default class UserRouter {
    
    @request('post', '/user/register')
    @summary('register user')
    @description('example of api')
    @tag
    @middlewares([logTime()])
    @body(userSchema)
    static async register(ctx) {
      
      let user = {};
      try {
        user = await UserDomain.regist(ctx.validatedBody);
      } catch (error) {
        throw error;
      }
      ctx.body = { user };
    }
  
    @request('post', '/user/login')
    @summary('user login, password is 123456')
    @tag
    @body(userSchema)
    static async login(ctx) {
      const { name, password } = ctx.validatedBody;

      if (password !== '123456') throw new Error('wrong password');
      const user = { name };
      ctx.body = { user };
    }

    @request('put', '/user/update/{id}')
    @summary('update user by id')
    @tag
    @path({id: { type: 'string', required: true} })
    @body(userSchema) 
    static async updateOne(ctx) {
      const { id } = ctx.validatedParams;
      let user = await UserDomain.updateUser(id, ctx.validatedBody);
      ctx.body = {user}
    }
    @request('get', '/user')
    @summary('user list')
    @tag
    static async getAll(ctx) {
      let condition = {}
      ctx.body = await UserDomain.searchUsers(condition);
    }
  
    @request('get', '/user/{id}')
    @summary('get user by id')
    @tag
    @path({ id: { type: 'string', required: true } })
    static async getOne(ctx) {
      const { id } = ctx.validatedParams;
      let user = await UserDomain.userInfo(id)
      ctx.body = { user };
    }
  
    @request('delete', '/user/{id}')
    @summary('delete user by id')
    @tag
    @path({ id: { type: 'string', required: true } })
    static async deleteOne(ctx) {
      const { id } = ctx.validatedParams;
      let result = await UserDomain.deleteUser(id);
      ctx.body = result;
    }
  }
  