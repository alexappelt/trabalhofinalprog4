const mongoose = require('mongoose')
const modelName = 'marca'

const schema = mongoose.Schema({
    id : {
        type: Number,
        required: true
    },
    nome : {
        type: String,
        required: true
    }
});

const model = mongoose.model(modelName, schema);

module.exports = {
    model
}