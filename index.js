import express from 'express'
const app = express()

app.use(express.json())

let contas = [{id: 1, nome: "emilly", numero: 100, saldo: 200, historico:  "deposito de 50 reais"}]
let cont = 1

app.get('/contas', (req, res) => {
    res.json(contas)
})

app.post('/contas', (req,res) => {
    const { nome, numero, saldo, historico } = req.body
    const dado = {id: cont++ , nome, numero, saldo, historico}
    contas.push(dado)
    return res.json({message: "dados cadastrados."})

})

app.listen(3000, () => {
    console.log("servidor rodando")
})