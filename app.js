const ingresar = document.getElementById("ingresar");
const salir = document.querySelector(".equis");
const modal = document.querySelector(".contenedor-modal");

//USANDO FUNTION Y ONCLICK//////////////////////////////////////

function abrir(){
    let modalOpen = modal;
    modalOpen.style.zIndex="1";
    modalOpen.style.display="flex";
    //modalOpen.classList.add("mostrar-modal");
};

function cerrar(){
    let modalClose = modal;
    modalClose.style.zIndex="-1";
    modalClose.style.display="none";
    //modalClose.classList.remove("mostrar-modal");
};

ingresar.onclick = abrir;
salir.onclick = cerrar;

//USANDO EVENT LISTENER////////////////////////////////////////


/* ingresar.addEventListener('click', ()=>{
    modal.classList.add("mostrar-modal");
}); 

salir.addEventListener('click', ()=>{
    modal.classList.remove("mostrar-modal");
});

 */

/////////////////////////////////////////////////////////////////////////

//CARRUSEL


/* 'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

 */