const corPreta = document.querySelector('#corPreta');
corPreta.style.backgroundColor = 'black';
const corPink = document.querySelector('#corPink');
corPink.style.backgroundColor = 'rgb(255,20,147)';
const corPurple = document.querySelector('#corPurple');
corPurple.style.backgroundColor = 'rgb(218,112,214)';
const corLightBlue = document.querySelector('#corLightBlue');
corLightBlue.style.backgroundColor = 'rgb(102,205,170)';
const botaoRandomColor = document.querySelector('#button-random-color');
const color = document.getElementsByClassName('color');
const colorPalette = document.querySelectorAll('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const botaoPixels = document.querySelector('#generate-board');
const input = document.getElementById('board-size');

function corAleatoria() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b})`;
}

botaoRandomColor.addEventListener('click', () => {
  const novaCor = document.getElementsByClassName('color');
  for (let index = 0; index < novaCor.length; index += 1) {
    if (index === 0) {
      novaCor[index].style.backgroundColor = 'black';
    } else {
      novaCor[index].style.backgroundColor = corAleatoria();
    }
  }
});

for (let index = 0; index < 25; index += 1) {
  const cadaPixel = document.createElement('div');
  pixelBoard.appendChild(cadaPixel).className = 'pixel';
}

const cores = document.querySelectorAll('.color');
for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', addSelected);
}

function addSelected(evento) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  evento.target.classList.add('selected');
}

function pintandoPixel(evento) {
  const selecionado = document.querySelector('.selected');
  evento.target.style.backgroundColor = selecionado.style.backgroundColor;
}

const pixelIndividual = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelIndividual.length; index += 1) {
  pixelIndividual[index].addEventListener('click', pintandoPixel);
}

const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

function criandoMaisDivs() {
  if (input.value === '') {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
  const numeroPixels = input.value * input.value;
  pixelBoard.style.width = `${input.value * 42}px`;
  const pixels = document.querySelectorAll('.pixel');
  if (pixels.length !== 0) {
    for (let index = 0; index < pixels.length; index += 1) {
      pixelBoard.removeChild(pixels[index]);
    }
  }
  for (let linhas = 1; linhas <= numeroPixels; linhas += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

botaoPixels.addEventListener('click', criandoMaisDivs);
