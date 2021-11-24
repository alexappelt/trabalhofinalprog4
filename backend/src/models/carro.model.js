const mongoose = require('mongoose')
const modelName = 'carro'

const schema = mongoose.Schema({
    id : {
        type: Number,
        required: true
    },
    idmarca : {
        type: Number,
        required: true
    },
    nome : {
        type: String,
        required: true
    },
    preco : {
        type: Number,
        required: true
    }
});

const model = mongoose.model(modelName, schema);

module.exports = {
    model
}