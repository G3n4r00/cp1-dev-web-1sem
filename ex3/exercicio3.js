/*Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC)  de  uma  pessoa  e  exibe  uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de IMC:  abaixo  de  18,5  (abaixo  do  peso),  entre 18,5  e  24,9  (peso  ideal)  e  acima  de  24,9  (acima  do  peso).Exemplifique e demonstre a saída!(10 Pontos)*/

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

