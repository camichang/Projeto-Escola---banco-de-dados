const alunosBancoDados = require("../Models/alunos-model");

exports.listaAlunos = ((req, res)=>{
    alunosBancoDados.find({}, (err, aluno)=>{
        if(err)
        return res.status(500).send("Erro ao consultar Aluno");
        res.render("views/pages/alunos", {resultado:aluno})
    });

});

exports.cadastrarAlunos_get = (req, res)=>{
    res.render("views/pages/formAlunos");
};

exports.cadastrarAlunos_post = (req, res)=>{
    let saveAluno = new alunosBancoDados();

    saveAluno.nomeAluno = req.body.nome_aluno;
    saveAluno.nomeResp = req.body.nome_resp;
    saveAluno.contato = req.body.contato;
    saveAluno.matricula = req.body.ra;
    saveAluno.endereco = req.body.end;

    saveAluno.save(err =>{
        if(err)
        return res.status(500).send("Erro ao salvar aluno");

        return res.redirect("/alunos");
    });
};

exports.deletarAluno = (req, res)=>{
    var id = req.params.id;

    alunosBancoDados.deleteOne({_id:id}, (err)=>{
        if(err)
        return res.status(500).send("Erro ao deletar");

        res.redirect("/alunos");
    });
};

exports.editarAluno_get = (req, res)=>{
    var id = req.params.id;
    alunosBancoDados.findById(id, (err, aluno)=>{
        if(err)
        return res.status(500).send("Erro ao editar");

        res.render("views/pages/formEditarAluno", {resultado:aluno});
    });
};

exports.editarAluno_post = (req, res)=>{
    var id = req.body.id;
    alunosBancoDados.findById(id, (err, aluno)=>{

        if(err)
        return res.status(500).send("Erro ao editar");

        aluno.nomeAluno = req.body.nome_aluno;
        aluno.nomeResp = req.body.nome_resp;
        aluno.contato = req.body.contato;
        aluno.endereco = req.body.end;
        aluno.matricula = req.body.ra;

        aluno.save((err) =>{
            if(err)
            return res.status(500).send("Erro ao salvar")
            return res.redirect("/alunos");
        });
    });
};

exports.pesquisar_get = (req, res)=>{
    var busca = req.query.pesquisa;
    alunosBancoDados.find({$or:[{nomeAluno:busca}, {nomeResp:busca}, {contato:busca}, {endereco:busca}, {matricula:busca}]}, (err, aluno)=>{
        if(err)
        return res.status(500).send("Erro ao pesquisar")
        res.render("views/pages/alunos", {resultado:aluno})
    })
}

