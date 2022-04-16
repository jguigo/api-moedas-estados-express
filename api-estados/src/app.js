const express = require('express');
const cors = require('cors');

const estados = require('./models/estados.json');

const app = express();

app.use(cors());

app.get('/estados', (req, res) => {
    res.json(estados);
})

app.listen(4000, () => console.log('Server on at Port: 4000'));