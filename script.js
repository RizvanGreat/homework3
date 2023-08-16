const square1 = document.getElementById('square1');
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
  square1.style.backgroundColor = 'green';
  square1.style.width = '100px';
  square1.style.height = '100px';
const square2 = document.getElementById('square2');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  square2.style.backgroundColor = 'blue';
  console.log('Новый цвет квадрата: синий');
const square3 = document.getElementById('square3');
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  const currentWidth = parseInt(getComputedStyle(square3).width);
  const currentHeight = parseInt(getComputedStyle(square3).height);
  square3.style.width = currentWidth + 20 + 'px';
  square3.style.height = currentHeight + 20 + 'px';
const root1 = document.getElementById('root1');
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.style.color = 'blue';
  paragraph.textContent = 'Произвольный текст параграфа.';
  root1.appendChild(paragraph);
const root2 = document.getElementById('root2');
const btn5 = document.getElementById('btn5');
let currentColor = 'blue';
btn5.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.style.color = currentColor;
  paragraph.textContent = 'Произвольный текст параграфа.';
  root2.appendChild(paragraph);

  currentColor = currentColor === 'blue' ? 'green' : 'blue';
});
