function cadastrar(){
    let usuario = {
        nome:document.getElementById("nome").value,
        email:document.getElementById("email").value,
        senha:document.getElementById("senha").value
    }
    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );
    alert("Cadastro realizado!");
}

function login(){
    let usuario =
    JSON.parse(localStorage.getItem("usuario"));
    let email =
    document.getElementById("email").value;
    let senha =
    document.getElementById("senha").value;
    if(
        usuario &&
        email===usuario.email &&
        senha===usuario.senha
    ){
        alert("Login realizado!");
        window.location.href="index.html";
    }
    else{
        alert("Dados inválidos");
    }
}