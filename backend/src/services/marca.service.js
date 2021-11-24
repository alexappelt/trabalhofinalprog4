const { model } = require('mongoose')
const modelMarca = require('../models/marca.model')


async function cadastrarMarca(marca) {
    var cont = 0;
    var flag = true;
    
    for (var i = 0; i < marca.length; i++) {
        var { id } = marca[i]
    
        cont++;
        if (await modelMarca.model.findOne({ id })) {
            flag = false;
            break;
        }
    }

    if(cont==0){
        cont++
    }

    if (flag) {
        modelMarca.model.create(marca)
        return `${cont} marca(s) criada(s)`
    } else {
        throw new Error(`Já existe uma marca cadastrada com o id ${id}`)
    }

}

async function listarMarcas() {
    return modelMarca.model.find({}, 'id nome');
}

async function buscarMarcaPorID(idMarca) {

    const marca = await modelMarca.model.findOne({ id: idMarca }, 'id nome');
    if (marca) {
        const { id, nome } = marca
        return {
            id: id,
            nome: nome
        }
    } else {
        throw new Error(`Nenhuma marca encontrada com o código ${idMarca}`)
    }

}

async function atualziarMarca(marca) {
    const newMarca = await modelMarca.model.findOneAndUpdate({ id: marca.id }, { nome: marca.nome })
    if (newMarca) {
        return marca
    } else {
        throw new Error(`Nenhuma marca encontrada com o código ${marca.id}`)
    }
}

async function excluirMarca(idMarca) {

    const marca = await modelMarca.model.findOneAndRemove({ id: idMarca })
    if (!marca) {
        throw new Error(`Nenhuma marca encontrada com o código ${idMarca}`)
    }
}

module.exports = { cadastrarMarca, listarMarcas, buscarMarcaPorID, atualziarMarca, excluirMarca }