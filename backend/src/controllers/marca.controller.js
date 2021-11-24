const MarcaService = require('../services/marca.service')

/**
 * @swagger
 * /marcas:
 *  post:
 *    description: API para cadastrar nova marca
 *    parameters:
 *      - in: body
 *        name: marca
 *        description: cadastrar marca.
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *            nome:
 *              type: string 
 *             
 *    responses:
 *      '201':
 *         description: Marca cadastrada com sucesso  
 *      '400':
 *         description: Bad Request
 */
const criarMarca = (req, res) => {
    
    MarcaService.cadastrarMarca(req.body)
        .then((marca) => {
            res.status(201).json(marca);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}

/**
 * @swagger
 * /marcas:
 *  get:
 *    description: API para listar os marcas cadastradas
 *    responses:
 *      '200':
 *         description: Marcas encontradas  
 *         schema:
 *           type: array
 *           items:
 *             properties:
 *               id:
 *                 type: number
 *               nome:
 *                 type: string
 *      '400':
 *         description: Bad Request
 */
const listarMarcas = (req, res) => {
    MarcaService.listarMarcas()
        .then((data) => {
            res.status(200).json({ data })
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
};

/**
 * @swagger
 * /marcas/{id}:
 *  get:
 *    description: buscar marca
 *    parameters: 
 *      - in: body
 *        name: marca
 *        description: Item para ser buscado
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *    responses:
 *      '200':
 *         description: Item  encontrado com sucesso  
 *      '400':
 *         description: Bad Request
 */
 const buscarMarcaPorID = (req, res) => {
    MarcaService.buscarMarcaPorID(req.params.id)
    .then((data)=>{
        res.status(200).json({data})
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })
};

/**
 * @swagger
 * /marcas:
 *  put:
 *    description: API para atualizar marca
 *    parameters:
 *      - in: body
 *        name: marca
 *        description: atualizar marca.
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *            nome:
 *              type: string 
 *    responses:
 *      '200':
 *         description: Marca atualizada com sucesso  
 *      '400':
 *         description: Bad Request
 */
 const atualizarMarca = (req, res) => {
    MarcaService.atualziarMarca(req.body)
    .then((marca) => {
        res.status(200).json(marca);
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })    
}

/**
 * @swagger
 * /marcas/{id}:
 *  delete:
 *    description: API para excluir marca
 *    parameters:
 *      - in: path
 *        name: id
 *        type: number
 *    responses:
 *      '200':
 *         description: Marca excluida com sucesso  
 *      '400':
 *         description: Bad Request
 */
const excluirMarca = (req,res) => {
    MarcaService.excluirMarca(req.params.id)
    .then((marca) => {
        res.status(200).json("Marca excluída com sucesso");
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })    
}

module.exports = { criarMarca, listarMarcas, buscarMarcaPorID, atualizarMarca, excluirMarca }