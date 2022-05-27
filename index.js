
const images = ["im2.jpg", "im3.jpg", "im4.jpg"];

let slide = document.getElementById('slide')

let numero = 0;

function changeSlide(sens) {
    numero = numero + sens;
    if (numero < 0) {
        numero = images.length-1
    }

    if (numero > images.length -1) {
        numero = 0
    }
slide.src = images[numero]


}

const precedent = document.getElementById('precedent')

const suivant = document.getElementById('suivant');

precedent.addEventListener('click', () => {
    changeSlide(-1)
})

suivant.addEventListener('click', () => {
    changeSlide(1)
})

