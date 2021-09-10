const mongoose = require("mongoose");

const Alunos = mongoose.model("alunos", {
    nomeAluno: String,
    nomeResp: String,
    contato: String,
    endereco: String,
    matricula: String
})

module.exports = Alunos; 