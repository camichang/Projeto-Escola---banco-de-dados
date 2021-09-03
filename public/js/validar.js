function valida_nome(x) {
    var nome = x.value
    if (isNaN(nome) && nome != "") {
        x.style.border = "2px solid lightgreen"
        return true;
    }
    else {
        x.style.border = "2px solid lightpink"
        return false;
    }
}

function maiuscula(x) {
    v = (x.value.toUpperCase());
    x.value = v;
}

function valida_tel(x) {
    var telefone = document.getElementById("contato").value;
    var validacao_temporaria = true;
    for (i = 0; i < telefone.length; i++) {
        if (telefone[i] == " " || isNaN(telefone[i])) {
            validacao_temporaria = false;
        }
    }
    if (validacao_temporaria == false || telefone.length != 11) {
        x.style.border = "2px solid lightpink";
    } else {
        x.style.border = "2px solid lightgreen";
    }
}

function valida_end(x) {
    var end = x.value
    if (end != "") {
        x.style.border = "2px solid lightgreen"
        return true;
    }
    else {
        x.style.border = "2px solid lightpink"
        return false;
    }
}

function valida_matricula(x) {
    var ra = x.value
    if (ra != "") {
        x.style.border = "2px solid lightgreen"
        return true;
    }
    else {
        x.style.border = "2px solid lightpink"
        return false;
    }
}

function enviar_form(x){
    var nome_aluno = document.getElementById("nome_aluno").value
    var nome_resp = document.getElementById("nome_resp").value
    var telefone = document.getElementById("contato").value
    var endereco = document.getElementById("end").value
    var matricula = document.getElementById("ra").value

    
}

// function enviar_form(){
//     if(validaNome())
//    $("form").submit();
// }


// function validaNome(nome){

//     var elemento;
//     if(!isNaN(nome) || nome == ""){
//         alert("Nome inválido")
//         elemento = document.getElementById("nome").style.border = "red solid"
//     }else{
//         document.getElementById("nome").style.border = "green solid"
//         return true;
//     }
// }