const ingresar = document.getElementById("ingresar");
const salir = document.querySelector(".equis");
const modal = document.querySelector(".contenedor-modal");

//USANDO EVENT LISTENER////////////////////////////////////////


ingresar.addEventListener('click', ()=>{
    modal.classList.add("mostrar-modal");
}); 

salir.addEventListener('click', ()=>{
    modal.classList.remove("mostrar-modal");
});


//USANDO FUNcTION Y ONCLICK//////////////////////////////////////

/* 
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
*/


