var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://usuário:senha@cluster0.gcljv.mongodb.net/escola?retryWrites=true&w=majority").then(()=>{
    console.log("banco de dados conectado");
}).catch(()=>{
    console.log("erro banco de dados " +err)
})