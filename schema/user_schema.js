import BaseSchema from './base_schema';
class UserSchema extends BaseSchema {
    constructor(data) {
        super(data)
    }
}
const schema = {
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String
    },
    telephone: {
        type: Number
    },
    updateAt: {
        type: Date,
        default: Date.now()
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
}
export default new UserSchema(schema);