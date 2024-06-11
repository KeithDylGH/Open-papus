//Carrusel de imagenes
const carrusel = document.querySelector('#carrusel');
let intervalo = null
let step = 1
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth

const start = () => {
    intervalo = setInterval(function(){
        carrusel.scrollLeft = carrusel.scrollLeft + step
        if(carrusel.scrollLeft == maxScrollLeft){
            step = -1
        }else if(carrusel.scrollLeft === 0){
            step = 1
        }
    }, 15)
};

const stop = () => {
    clearInterval(intervalo);
};

carrusel.addEventListener('mouseover', ()=>{
    stop()
})

carrusel.addEventListener('mouseout', ()=>{
    start()
})

start()