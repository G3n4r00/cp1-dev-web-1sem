let idade = prompt("Insira sua idade: ")
if(idade <= 12){
    console.log("Você é uma criança")
}
else if(idade > 12 && idade <= 18 ){
    console.log("Você é adolescente")
}
else if(idade > 18 && idade <= 60){
    console.log("Você é adulto")
}
else{
    console.log("Você é idoso")
}
