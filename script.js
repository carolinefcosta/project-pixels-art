const corPreta = document.querySelector('#corPreta');
corPreta.style.backgroundColor = 'black';
const corPink = document.querySelector('#corPink');
corPink.style.backgroundColor = 'pink';
const corPurple = document.querySelector('#corPurple');
corPurple.style.backgroundColor = 'purple';
const corPink2 = document.querySelector('#corPink2');
corPink2.style.backgroundColor = 'violet';
const botaoRandomColor = document.querySelector('#button-random-color');
const color = document.getElementsByClassName('color');
const colorPalette = document.querySelectorAll('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

function corAleatoria() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
  
    return `rgba(${r}, ${g}, ${b})`;
};

botaoRandomColor.addEventListener('click', () => {
    const novaCor = document.getElementsByClassName('color');
    for (let index = 0; index < novaCor.length; index += 1){
        if (index === 0){
            novaCor[index].style.backgroundColor = 'black';
        } else {
            novaCor[index].style.backgroundColor = corAleatoria();
        }
    }
});

for (let index = 0; index < 25; index += 1){
    const cadaPixel = document.createElement('div');
    pixelBoard.appendChild(cadaPixel).className = 'pixel';
}

const cores = document.querySelectorAll('.color');
for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', addSelected);
}

function addSelected (evento) {
    const selecionado = document.querySelector('.selected');
    selecionado.classList.remove('selected');
    evento.target.classList.add('selected');
}

// //DESAFIO 10

function pintandoPixel (evento) {
    const selecionado = document.querySelector('.selected');
    evento.target.style.backgroundColor = selecionado.style.backgroundColor;
}

const pixelIndividual = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelIndividual.length; index += 1){
    pixelIndividual[index].addEventListener('click', pintandoPixel); 
}
    


