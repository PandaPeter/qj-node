import userSchema from '../schema/user_schema';
import BaseModel from './base_modal';
class UserModel extends BaseModel {
    constructor(modelName, schema) {
        super(modelName, schema);
    };
}

export default new UserModel('User', userSchema);

