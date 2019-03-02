/* 业务逻辑层 */
import userRepo from '../repository/user_repo';
export default class UserDomain {
    static async regist(data) {
        try {
            //查看name是否重复
            if (await userRepo.checkUserName(data.username)) {
                throw new Error('用户名已存在');
            }
            return await userRepo.newUser(data);
        } catch (error) {
            throw error;
        }
    }

    static async userInfo(_id = '') {
        return await userRepo.getUserInfo(_id);
    }

    static async updateUser(_id = '', update = {}){
        return await userRepo.updateUser(_id, update);
    }

    static async searchUsers(condition = {}) {
        return await userRepo.searchUsers();
    }

    static async deleteUser(_id) {
        return await userRepo.deleteUser(_id);
    }
}