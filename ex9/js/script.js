const box = document.querySelector('.box');
box.style.width = '200px';
box.style.height = '100px';
box.style.backgroundColor = 'green';
box.style.color = 'white';
box.style.textAlign = 'center';
box.style.fontSize = '24px';
box.style.lineHeight = '100px';
box.style.cursor = 'pointer';

box.addEventListener('mouseover', function() {
  this.textContent = this.textContent === 'Olá' ? 'Tchau' : 'Olá';
  this.style.backgroundColor = this.style.backgroundColor === 'green' ? 'yellow' : 'green';
});

box.addEventListener('mouseout', function() {
  this.textContent = this.textContent === 'Olá' ? 'Tchau' : 'Olá';
  this.style.backgroundColor = this.style.backgroundColor === 'green' ? 'yellow' : 'green';
});