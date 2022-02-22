const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/filmes', (req, res) => {
    const filmes = [
        { nome: 'Os Vingadores' },        
        { nome: 'Homem Aranha' },        
        { nome: 'Pantera Negra' },        
    ];
    // enviando os filmes como json
    res.send(JSON.stringify(filmes));
})

app.listen(config.get('api.porta'), () => console.log('API está funcionando e aceitando requisições!'));