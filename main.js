import Koa from 'koa'
import {dbInitPromise} from './DB/index'
import bodyParser from 'koa-bodyparser';
import router from './swagger/index';
const app = new Koa();
app
.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //ctx.set("Content-Type", "application/json;charset=utf-8");
    await next()
})  
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods());
dbInitPromise
.then(mongoose => app.listen(3000, () => console.log('server start at port 3000')))
.catch(err => {
    console.log('mongoose 错误');
    console.error(err)
})
            