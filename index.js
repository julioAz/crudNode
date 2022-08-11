const express = require('express')
const server = express();
server.use(express.json());

const users = [];

server.get('/users', (req, res) => {
    return res.json(users);
})

server.get('users/:index', (req, res) => {
    return res.json(req.user);
})

server.post('/users', (req, res) => {
    const { name } = req.body; //busca o nome dentro do body da requisição

    users.push(name);

    return res.json(users) // retorna a informação da variavel adicionar
})

server.put('/users/:index', (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    const { name } = req.body; //busca o nome dentro do body da requisição

    geeks[index] = name; //sobrepoe o index obtido na rota de acordo com o novo valor

    users.push(name);

    return res.json(users) // retorna a informação da variavel adicionar
})

server.delete('/users/:index', (req, res) => {
    const { index } = req.params
    users.splice(index, 1)

    return res.json(users);
})

server.listen(3000);