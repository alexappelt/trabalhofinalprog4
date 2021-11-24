const CarroService = require('../services/carro.service')

/**
 * @swagger
 * /carros:
 *  post:
 *    description: API para cadastrar novo carro
 *    parameters:
 *      - in: body
 *        name: carro
 *        description: cadastrar carro.
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *            idmarca:
 *              type: number 
 *            nome:
 *              type: string 
 *            preco:
 *              type: number 
 *             
 *    responses:
 *      '201':
 *         description: Carro cadastrado com sucesso  
 *      '400':
 *         description: Bad Request
 */
const criarCarro = (req, res) => {
    CarroService.cadastrarCarro(req.body)
        .then((carro) => {
            res.status(201).json(carro);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}

/**
 * @swagger
 * /carros:
 *  get:
 *    description: API para listar os carros cadastrados
 *    responses:
 *      '200':
 *         description: Carros encontradas  
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
 const listarCarros = (req, res) => {
    CarroService.listarCarros()
        .then((data) => {
            res.status(200).json({ data })
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
};

/**
 * @swagger
 * /carros/{id}:
 *  get:
 *    description: buscar carro
 *    parameters: 
 *      - in: body
 *        name: carro
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
 const buscarCarroPorID = (req, res) => {
    CarroService.buscarCarroPorID(req.params.id)
    .then((data)=>{
        res.status(200).json({data})
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })
};

/**
 * @swagger
 * /carros:
 *  put:
 *    description: API para atualizar carro
 *    parameters:
 *      - in: body
 *        name: carro
 *        description: atualizar carro.
 *        schema:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *            idmarca:
 *              type: number 
 *            nome:
 *              type: string 
 *            preco:
 *              type: number 
 *    responses:
 *      '200':
 *         description: Carro atualizado com sucesso  
 *      '400':
 *         description: Bad Request
 */
 const atualizarCarro = (req, res) => {
    CarroService.atualziarCarro(req.body)
    .then((carro) => {
        res.status(200).json(carro);
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })    
}

/**
 * @swagger
 * /carros/{id}:
 *  delete:
 *    description: API para excluir carro
 *    parameters:
 *      - in: path
 *        name: id
 *        type: number
 *    responses:
 *      '200':
 *         description: Carro excluido com sucesso  
 *      '400':
 *         description: Bad Request
 */
const excluirCarro = (req,res) => {
    CarroService.excluirCarro(req.params.id)
    .then((carro) => {
        res.status(200).json("Carro excluído com sucesso");
    })
    .catch((err) => {
        res.status(400).json({ message: err.message })
    })    
}

module.exports = { criarCarro, listarCarros, buscarCarroPorID, atualizarCarro, excluirCarro }