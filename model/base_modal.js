import {connection, Model} from 'mongoose';
export default class BaseModel {
    constructor(name, schema, con = connection) {
        this.model = con.model(name, schema);
    }

    create(data) {
        return new this.model(data);
    }
    
    save(document) {
        if (document instanceof Model) {
            return document.save(document);
        } else {
            throw new Error('请先实例化document');
        }
    }
   
    findMany(condition = {}, projection = {}, option = {lean: true}) {
        return this.model.find(condition, projection, option).exec();
    }

    findOne(condition = {}, projection = {}, option = {lean: true}) {
        return this.model.findOne(condition, projection, option)
    }

    updateOne(condition = {}, update = {}, option = {lean: true}) {
        return this.model.findOneAndUpdate(condition, update, option).exec()
    }

    updateMany(condition = {}, update = {}, option = {lean: true}) {
        return this.model.updateMany(condition, update, option).exec();
    }

    deleteOne(condition = {}, option = {}) {
        return this.model.findOneAndDelete(condition, option).exec();
    }

    deleteMany(condition = {}, option = {}) {
        return this.model.deleteMany(condition, option).exec();
    }

    count(condition = {}) {
        return this.model.count(condition).exec();
    }
}