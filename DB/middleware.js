export default {
    preSave(schema) {
        return schema.pre('save', function(next) {
            if (this.isNew) {
                this.updateAt = this.createAt = Date.now();
            } 
            else {
                this.updateAt = Date.now();
            }
            next();
        })
    },
    
    preUpdateOne(schema) {
        return schema.pre('findOneAndUpdate', function(next) {
            this.set({updateAt: Date.now()})
            next();
        })
    },

    preUpdateMany(schema) {
        return schema.pre('updateMany', function(next) {
            this.set({updateAt: Date.now()});
            next();
        })
    }
}