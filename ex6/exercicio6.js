let notas = [];
for (let i = 1; i <= 7; i++) 
{
  let nota = parseFloat(prompt("Digite a nota " + i + ": "));
  notas.push(nota);
}

let media = notas.reduce((a, b) => a + b) / notas.length;

if (media >= 6) 
{
  console.log("O aluno foi aprovado com média " + media.toFixed(2));
}
 else {
  console.log("O aluno foi reprovado com média " + media.toFixed(2));
}