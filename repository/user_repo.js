import BaseRepo from './base_repo';
import userDao from '../dao/user_dao';
class UserRepo extends BaseRepo {
    constructor() {
        super()
    }

    async checkUserName(username) {
        let count = await userDao.countByCondition({username});
        return count? true: false;
    }

    newUser(data) {
        return userDao.newAndSave(data);
    }

    getUserInfo(_id) {
        return userDao.findById(_id);
    }

    searchUsers(condition) {
        return userDao.findManyByCondition(condition);
    }
    
    updateUser(_id, update) {
        return userDao.updateById(_id, update);
    }

    deleteUser(_id) {
        return userDao.deleteById(_id);
    }
}

export default new UserRepo();
