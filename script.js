const corPreta = document.querySelector('#corPreta');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
const botaoRandomColor = document.querySelector('#button-random-color');
const classColors = document.getElementsByClassName('color');

function corAleatoria() {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
  
    return `rgba(${r}, ${g}, ${b})`;
};

corPreta.style.backgroundColor = 'black';
cor2.style.backgroundColor = corAleatoria();
cor3.style.backgroundColor = corAleatoria();
cor4.style.backgroundColor = corAleatoria();

botaoRandomColor.addEventListener('click', () => {
    const novaCor = document.getElementsByClassName('color');
    for (let index in novaCor){
        if (index === '0'){
            novaCor[index].style.backgroundColor = 'black';
        } else {
            novaCor[index].style.backgroundColor = corAleatoria();
        }
    }
});
