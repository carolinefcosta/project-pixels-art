const corPreta = document.querySelector('#corPreta');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
const botaoRandomColor = document.querySelector('#button-random-color');
const classColors = document.getElementsByClassName('color');
const sectionColorPallete = document.querySelectorAll('#color-palette');
const sectionPixel = document.querySelector('#pixel-board');

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

function salvandoLocalStorage () {
    localStorage.setItem('colorPalette', sectionColorPallete.innerHTML);
};

function pegandoLocalStorage () {
    const colorPalette = localStorage.getItem('colorPalette');
    sectionColorPallete.innerHTML = colorPalette;
}

botaoRandomColor.addEventListener('click', salvandoLocalStorage());

window.onload = () => {
    pegandoLocalStorage();
}

for (let index = 1; index <= 5; index += 1){
    const criandoQuadroPixel = document.createElement('p');
    criandoQuadroPixel.className = 'pixel';
    sectionPixel.appendChild(criandoQuadroPixel);
}

