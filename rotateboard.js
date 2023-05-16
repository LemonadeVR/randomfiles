const elements = document.getElementsByClassName('VFlF2c EjCLSb');
let rotation = 0;

document.addEventListener('keydown', (event) => {
    rotation += 1;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.transform = `rotate(${rotation}deg)`;
        element.style.transition = "0.1s";
    }
})
