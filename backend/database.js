var mongoose = require('mongoose')

const connect = (uri) => {
    mongoose.connect(uri);

    mongoose.connection.on('connected', () =>{
        console.log(`Mongoose conectado (${uri})`)
    })

    mongoose.connection.on('disconnected', () =>{
        console.log(`Mongoose desconectado (${uri})`)
    })

    mongoose.connection.on('error', (err) =>{
        console.log(`Mongoose erro na conexao: ${err}`)
    })
}

module.exports = {
    connect
}