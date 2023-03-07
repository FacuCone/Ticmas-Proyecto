
const botonHTML = document.querySelector('#btnHTML');
const botonCSS = document.querySelector('#btnCSS');
const botonJS = document.querySelector('#btnJS');
const botonCarrera = document.querySelector('#btnCarrera')
const botonAbout = document.querySelector('#btnAbout')
const botonInicio = document.querySelector('#btnInicio')

const contenidoHTML = document.querySelector('.contenido_html');
const contenidoCSS = document.querySelector('.contenido_css');
const contenidoJS = document.querySelector('.contenido_js');

const fondoHTML = 'fondoHTML'
const fondoCSS = 'fondoCSS'
const fondoJS = 'fondoJS'

const seccion1 = document.getElementById('pag1')
const seccion2 = document.getElementById('pag2')
const seccion3 = document.getElementById('pag3')

// La función show() muestra los contenidos de los botones de habilidades
function show(element, fondo) {
    let pagina = document.querySelector('#pag3');
    element.classList.toggle('showUp');
    console.log('show() funciono');
}

// La funcion hide() oculta los contenidos de los botones de habilidades
function hide(element1, element2) {
    if (element1.classList.contains('showUp')) {
        element1.classList.remove('showUp')
    }
    if (element2.classList.contains('showUp')) {
        element2.classList.remove('showUp')
    }
}

function centerView(element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Funcionalidad de los botones 
botonHTML.addEventListener('click', function () {
    centerView(contenidoHTML)
    show(contenidoHTML, fondoHTML);
    hide(contenidoJS, contenidoCSS);
});

botonCSS.addEventListener('click', function () {
    centerView(contenidoCSS)
    show(contenidoCSS, fondoCSS);
    hide(contenidoJS, contenidoHTML);
});

botonJS.addEventListener('click', function () {
    centerView(contenidoJS)
    show(contenidoJS, fondoJS);
    hide(contenidoHTML, contenidoCSS);
});

// La funcion showSec() muestra secciones al presionar el botón "mi carrera" o "volver"
function showSec(seccionSelect, seccionSelect2) {
    if (!seccionSelect.classList.contains('appear')) {
        seccionSelect.classList.add('appear');
        seccionSelect2.classList.add('appear');
    } else {
        centerView(seccionSelect)
        console.log("showsec funcionó")
    }
}

botonCarrera.addEventListener('click', function () {
    showSec(seccion2, seccion3);
    console.log('éxito');
});

botonAbout.addEventListener('click', function () {
    showSec(seccion3, seccion2);
    console.log('éxito');
})

botonInicio.addEventListener('click', function () {
    centerView(seccion1);
    seccion2.classList.remove('appear');
    seccion3.classList.remove('appear');
})