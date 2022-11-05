const corPreta = document.querySelector('#corPreta');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
const botaoRandomColor = document.querySelector('#button-random-color');
const classColors = document.getElementsByClassName('color');
const sectionColorPallete = document.querySelectorAll('#color-palette');
const sectionPixelBoard = document.querySelector('#pixel-board');

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
    sectionPixelBoard.appendChild(cadaPixel).className = 'pixel';
}

const selected = document.getElementsByClassName('selected');

function adcERemove (evento) {
    if (selected !== 0){
        evento.target.classList.remove('selected');
    } else {
        evento.target.classList.add('selected');
    }
}

/*corPreta.addEventListener('click', (event) => {
    event.target.classList.remove('selected');
});
corPreta.addEventListener('click', (event) => {
    event.target.classList.add('selected');
});

cor2.addEventListener('click', (event) => {
    event.target.classList.add('selected');
});

cor3.addEventListener('click', (event) => {
    event.target.classList.add('selected');
});

cor4.addEventListener('click', (event) => {
    event.target.classList.add('selected');
});*/
