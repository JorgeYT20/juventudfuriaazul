// JS base listo para futuras mejoras-------------------
console.log("Juventud Furia Azul cargado correctamente");

// Animación Filosofía------------------------------
const filosofiaCards = document.querySelectorAll('.filosofia-card');

const filosofiaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

filosofiaCards.forEach(card => filosofiaObserver.observe(card));

// Animación Equipo-------------------------
const equipoCards = document.querySelectorAll('.equipo-card');

const equipoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.25 });

equipoCards.forEach(card => equipoObserver.observe(card));


// Animación Inscripción-----------------------
const pasos = document.querySelectorAll('.paso');
const inversionBox = document.querySelector('.inversion-box');

const inscripcionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.25 });

pasos.forEach(paso => inscripcionObserver.observe(paso));
inscripcionObserver.observe(inversionBox);

// Animación Sedes--------------------
const sedesCards = document.querySelectorAll('.sede-card');

const sedesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.25 });

sedesCards.forEach(card => sedesObserver.observe(card));

// sección de contacto
// Animación para la nueva sección de contacto
const contactoContenedor = document.querySelector('.contacto-grid-container');

const observerContacto = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

if (contactoContenedor) {
    observerContacto.observe(contactoContenedor);
}