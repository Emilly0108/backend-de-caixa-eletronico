import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

let contas = [{id: 1, nome: "emilly", numero: "100", saldo: 200, historico:  "deposito de 50 reais"}]
let cont = 2

app.get('/contas', (req, res) => {
    res.json(contas)
})

app.get('/contas/:id', (req,res) => {
    const {id} = req.params
    const conta = contas.find(c => c.id == id)
    res.json(conta)
})
app.post('/contas', (req,res) => {
    const { nome, numero, saldo, historico } = req.body
    const dados = {id: cont++ , nome, numero, saldo, historico}
    contas.push(dados)
    return res.json({message: "dados cadastrados."})

})

app.put('/contas/:id', (req, res) => {
    const {id} = req.params
    const dados = req.body
    const conta = contas.find(c => c.id == id)

    conta.nome = dados.nome
    conta.numero = dados.numero
    conta.saldo = dados.saldo
    conta.historico = dados.historico

    return res.json({message: "atualizado"})
})

app.delete('/contas/:id', (req,res) => {
    const {id} = req.params
    const index = contas.findIndex(contaBancaria => contaBancaria.id == id)
    contas.splice(index, 1)
    return res.json({message: "deletado"})
})

app.listen(3000, () => {
    console.log("servidor rodando")
})