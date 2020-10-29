const express = require('express');
const cors = require('cors');
const translator = require('./translate');

var app = express();
app.use(express.json());
app.use(cors())

app.post('/traduzir', (req, res) => {
  const { codigo } = req.body;
  res.json({ 'palavra': translator.translate(codigo) });
});

app.listen(3000, () => console.log('Servidor Online.'));