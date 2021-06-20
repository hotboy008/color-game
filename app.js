const board = document.querySelector('#board');
const SQUARES_NUMBER = 552;
const colors = ['#ecfccb', '#fcddcb', '#c1f8fa', '#cbfcd5', '#b6b6fa', '#fcbee5'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);
  
  square.addEventListener('click', saveColor);
  square.addEventListener('dblclick', resetColor);

  board.append(square);
}

function saveColor(e) {
    e.target.removeEventListener('mouseleave', removeColor);
    e.target.removeEventListener('mouseover', setColor);
    e.target.style.backgroundColor = 'red';
}

function resetColor(e){
    e.target.addEventListener('mouseover', setColor);
    e.target.addEventListener('mouseleave', removeColor);
    e.target.style.boxShadow = `0 0 2px #3b0580, 0 0 10px #3b0580`;
}

function setColor(e) {
  const color = getRandomColor();
  e.target.style.backgroundColor = color;
  e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  e.target.style.backgroundColor = '#4b3a79';
  e.target.style.boxShadow = `0 0 2px #3b0580, 0 0 10px #3b0580`;
}

function getRandomColor() {
  const index = Math.floor(Math.random()*colors.length);
  return colors[index];
}
