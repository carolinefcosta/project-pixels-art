const corPreta = document.querySelector('#corPreta');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
const botaoPRandomColor = document.querySelector('#p-random-color');

function mudandoDeCor(cor = 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
  
    return `rgba(${r}, ${g}, ${b}, ${cor})`;
}

corPreta.style.backgroundColor = 'black';
cor2.style.backgroundColor = mudandoDeCor();
cor3.style.backgroundColor = mudandoDeCor();
cor4.style.backgroundColor = mudandoDeCor();
