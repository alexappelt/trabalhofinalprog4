module.exports = app => {
    const carroController = require('./src/controllers/carro.controller')
    const marcaController = require('./src/controllers/marca.controller')


    

    app.route('/carros')
    .post(carroController.criarCarro)
    .get(carroController.listarCarros)
    .put(carroController.atualizarCarro)

    app.get('/carros/:id', carroController.buscarCarroPorID)
    app.delete('/carros/:id', carroController.excluirCarro)

    app.route('/marcas')
    .post(marcaController.criarMarca)
    .get(marcaController.listarMarcas)
    .put(marcaController.atualizarMarca)

    app.get('/marcas/:id', marcaController.buscarMarcaPorID) 
    app.delete('/marcas/:id', marcaController.excluirMarca)   

}