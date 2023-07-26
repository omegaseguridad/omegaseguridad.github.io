
let izq = document.querySelectorAll(".izq");

function mostrarScroll(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < izq.length; i++ ) {
    let alturaAnimado = izq[i].offsetTop;

    if( alturaAnimado - 900 < scrollTop ){
        izq[i].style.opacity = 1;


        izq[i].classList.add("mostrarIzquierda")
    }
   }
}

window.addEventListener('scroll', mostrarScroll);


let articulo2 = document.querySelectorAll(".articulo2");

function mostrarScrollD(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < articulo2.length; i++ ) {
    let alturaAnimadoD = articulo2[i].offsetTop;

    if( alturaAnimadoD - 700 < scrollTop ){
        articulo2[i].style.opacity = 1;

        articulo2[i].classList.add("mostrarDerecha")
    }
   }
}

window.addEventListener('scroll', mostrarScrollD);


let articulo1 = document.querySelectorAll(".articulo1");

function mostrarScrollA(){

   let scrollTop = document.documentElement.scrollTop;

   for (var i=0; i < articulo1.length; i++ ) {
    let alturaAnimadoA = articulo1[i].offsetTop;

    if( alturaAnimadoA - 700 < scrollTop ){
        articulo1[i].style.opacity = 1;

        articulo1[i].classList.add("mostrarAbajo")
    }
   }
}

window.addEventListener('scroll', mostrarScrollA);

