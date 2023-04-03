const altura = parseFloat(prompt("Digite sua altura em metros: "))
const peso = parseInt(prompt("Digite seu peso em kg; "))

let resultado;

resultado = peso / altura**2 

if(resultado < 18.5){
    alert("Você está abaixo do peso ideal.")
}
else if(resultado < 24.9 && resultado > 18.5){
    alert("Você está no peso ideal.")
}
else if(resultado > 24.9){
    alert("Você está acima do peso")
}