let idade = prompt("Insira sua idade: ")
if(idade <= 12){
    alert("Você é uma criança")
}
else if(idade > 12 && idade <= 18 ){
    alert("Você é adolescente")
}
else if(idade > 18 && idade <= 60){
    alert("Você é adulto")
}
else{
    alert("Você é idoso")
}
