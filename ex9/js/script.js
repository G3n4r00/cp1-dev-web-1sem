const Div1 = document.getElementById("Div1");

Div1.addEventListener("mouseover", () => {
  Div1.innerHTML = "Olá, mundo!"; // Altera o texto da div
  Div1.style.backgroundColor = "#cc899e"; // Altera a cor de fundo da div
});

Div1.addEventListener("mouseout", () => {
  Div1.innerHTML = "Passe o mouse aqui para ver a mágica acontecer!"; // Volta o texto original da div
  Div1.style.backgroundColor = "white"; // Volta a cor de fundo original da div
});
