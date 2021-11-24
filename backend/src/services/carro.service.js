const { model } = require('mongoose')
const modelCarro = require('../models/carro.model')

async function cadastrarCarro(carro) {
    var cont = 0;
    var flag = true;
    for (var i = 0; i < carro.length; i++) {
        var { id } = carro[i]
        cont++
        if (await modelCarro.model.findOne({ id })) {
            flag = false;
            break;
        }
    }
    if(cont==0){
        cont++
    }

    if (flag) {
        modelCarro.model.create(carro)
        return `${cont} carro(s) criado(s)`
    } else {
        throw new Error(`Já existe um carro cadastrado com o id ${id}`)
    }

}

async function listarCarros() {
    return modelCarro.model.find({}, 'id nome preco');
}

async function buscarCarroPorID(idCarro) {

    const carro = await modelCarro.model.findOne({ id: idCarro }, 'id nome preco');
    if (carro) {
        return carro
    } else {
        throw new Error(`Nenhum carro encontrado com o código ${idCarro}`)
    }

}

async function atualziarCarro(carro) {
    const newCarro = await modelCarro.model.findOneAndUpdate({ id: carro.id }, { nome: carro.nome, preco: carro.preco })
    if (newCarro) {
        return carro
    } else {
        throw new Error(`Nenhuma carro encontrado com o código ${carro.id}`)
    }
}

async function excluirCarro(idCarro) {

    const carro = await modelCarro.model.findOneAndRemove({ id: idCarro })
    if (!carro) {
        throw new Error(`Nenhuma marca encontrada com o código ${idCarro}`)
    }
}

module.exports = { cadastrarCarro, listarCarros, buscarCarroPorID, excluirCarro, atualziarCarro }