const express = require('express');

const app = express();

app.get('/', function (req, res) {
    console.log(req.headers);
  res.send('Hello World');
});

app.get("/raiz/:number", function (req, res){
    let number = req.params.number;
    console.log(number);
    res.send("reiz quadrada");
});
app.listen(3000, () => {
    console.log("a aplicação esta rodando na porta 3000")
    console.log("Servidor rodando em http://localhost:3000");
});