const corPreta = document.querySelector('#corPreta');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
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

// function adicionaSelected (evento) {
//     const classeSelected = document.querySelector('.selected');
//     classeSelected.classList.remove('selected');
//     evento.target.classList.add('selected');
// }
// corPreta.addEventListener('click', adicionaSelected);
// cor2.addEventListener('click', adicionaSelected);
// cor3.addEventListener('click', adicionaSelected);
// cor4.addEventListener('click', adicionaSelected);


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
// function pintandoPixel () {
//     const pixelIndividual = document.getElementsByClassName('pixel');
//     for (let index = 0; index < pixelIndividual.length; index += 1){
//         pixelIndividual[index].addEventListener('click', () => {
//             for (let i = 0; i < )
//         })
//     }
// }
