var express = require("express");
var mongoose = require("mongoose");

const app = express();
const port = 8000;

app.get("/", (req, res)=>{
    res.send("index") //modificar depois
});

mongoose.connect("mongodb+srv://camila_chang:camila_chang@cluster0.gcljv.mongodb.net/escola?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.set("views", __dirname,"/views");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const alunos_Router = require("./Routers/alunos-router")

app.use("/alunos", alunos_Router);





app.listen(port, ()=>{
    console.log("servidor rodando na porta "+port)
})