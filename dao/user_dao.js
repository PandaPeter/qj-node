import userModel from '../model/user_model';
import BaseDao from './base_dao';
class UserDao extends BaseDao {
    constructor(model) {
        super(model)
    }
}

export default new UserDao(userModel);