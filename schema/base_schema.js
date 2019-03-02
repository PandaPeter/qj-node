import { Schema } from 'mongoose';
import middleware from '../DB/middleware';
export default class BaseSchema extends Schema {
    constructor(data) {
        super(data);
        middleware.preSave(this);
        middleware.preUpdateOne(this);
        middleware.preUpdateMany(this);
    }
}