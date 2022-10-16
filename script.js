const createBoard = (function () {
  const SQUARE_NUMBER = 1200;
  const board = document.getElementById('board');
  const colors = ['violet', 'yellow', 'aqua', 'orange', 'lightcoral', 'coral'];
  for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.className = 'square';

    const color = getRandomColor(colors);

    square.addEventListener('mouseover', () => {
      if (!square.classList.contains('fixed')) setColor(square, color);
    });
    square.addEventListener('mouseleave', () => {
      if (!square.classList.contains('fixed')) restoreColor(square);
    });
    square.addEventListener('click', () => {
      square.classList.add('fixed');
    });

    board.append(square);
  }
})();

function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(square, color) {
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function restoreColor(square) {
  square.style.background = 'rgb(43, 43, 43)';
  square.style.boxShadow = '0 0 2px #000';
}
