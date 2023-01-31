// CHAMANDO ARQUIVOS
const Person = require('../models/Person')

const router = require('express').Router()

router.post('/', async (req, res) => {
    // req.body
    const {name, salary, approved} = req.body
    
    if(!name){
        res.status(422).json({error: "O nome é obrigatório!!"})
    }

    const person = {
        name,
        salary,
        approved
    }

    // CREATE
    // -> CRIANDO DADOS
    try{
        await Person.create(person)
        res.status(201).json({message: "Usuário inserido com sucesso!"})
    }catch (error) {res.status(500).json({error: error})}
})

// READ
// -> LEITURA DE DADOS
router.get('/', async (req, res) => {
    try{
        const people = await Person.find()
        res.status(200).json(people)
    }
    catch (err){
        res.status(500).json({error: "[ERROR] - A LEITURA NÃO FOI REALIZADA..." + err})
    }
})
router.get('/:id', async (req, res) => {
    // extrair o dado da resquisição, pelta URL
    const id = req.params.id

    try{
        const person = await Person.findOne({_id: id})

        if(!person){
            res.status(422).json({message: "[ERRO] - USUÁRIO NÃO FOI ENCONTRADO..."})
            return
        }
        else{
            res.status(200).json(person)
        }
    }
    catch (err){
        res.status(500).json({error: "[ERROR] - A LEITURA NÃO FOI REALIZADA..." + err})
    }
})

// UPDATE
// -> ATUALIZAÇÃO DE DADOS
router.patch('/:id', async (req, res) => {
    // extrair o dado da resquisição, pelta URL
    const id = req.params.id
    const {name, salary, approved} = req.body

    const person = {
        name,
        salary,
        approved
    }

    try{
        const updatePerson = await Person.updateOne({_id: id}, person)

        if(updatePerson.matchedCount === 0){
            res.status(422).json({error: "[ERROR] - A ATUALIZAÇÃO NÃO FOI REALIZADA..." + err})
            return
        }

        res.status(200).json(person)
    }
    catch(err){
        res.status(500).json({error: "[ERROR] - A ATUALIZAÇÃO NÃO FOI REALIZADA..." + err})
    }
})

// DELETE
// -> DELETAR INFORMAÇÃO
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const person = await Person.findOne({_id: id})

    if(!person){
        res.status(422).json({message: "[ERRO] - USUÁRIO NÃO PODE SER DELETADO (NÃO FOI ENCONTRADO)..."})
        return
    }

    try{
        await Person.deleteOne({_id: id})
        res.status(200).json({message: "[VALID] - USUÁRIO REMOVIDO COM SUCESSO!"})
    }
    catch (err){
        res.status(500).json({error: "[ERROR] - A EXCLUSÃO NÃO FOI REALIZADA..." + err})
    }
})

module.exports = router