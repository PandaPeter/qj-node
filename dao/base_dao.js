export default class BaseDao {
    constructor(model) {
        this.model = model;
    }
    newAndSave(data, option) {
        let document = this.model.create(data);
        return this.model.save(document, option);
    }

    findById(_id, projection, option) {
        return this.model.findOne({_id}, projection, option);
    }
    
    findManyByCondition(condition, projection, option) {
        return this.model.findMany(condition, projection, option);
    }

    updateById(_id, update, option) {
        return this.model.updateOne({_id}, update, option);
    }

    deleteById(_id, option) {
        return this.model.deleteOne({_id}, option);
    }

    countByCondition(condition) {
        return this.model.count(condition);
    }
}