let nome = prompt("Digite o nome do usuário: ")
let senha = prompt("Digite a senha do usuário: ")

if(nome === "admin" && senha === "1234"){
    alert("Login realizado com sucesso")
}else{
    alert("Falha na autentificação")
}