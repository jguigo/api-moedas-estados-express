const express = require('express');
const cors = require('cors');

const moedas = require('./model/moedas.json');

const app = express();

app.use(cors());

app.get('/moedas', (req, res) => {
    res.json(moedas);
})

app.listen(4000, ()=>console.log('Server on at port:4000'));