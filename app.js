// DOM elements
const navbar = document.getElementById('navbar');
const heroHand = document.querySelector('hi-hand');

// Altura del header (como es fijo)
const headerOffset = document.querySelector('.header').offsetHeight;

// Delegación de eventos: un listener para todos los links del navbar
navbar.addEventListener('click', (e) => {
    // Marcar el target
    const target = e.target;
    console.log('target:', target);

    // Solo actuamos si es un <a>
    if(target.tagName === 'A') {
        // Prevenir el comportamiento por defecto
        e.preventDefault();

        // Obtener el id de la sección desde el texto del link o href
        const sectionId = target.textContent.trim().toLowerCase();; // 'About' -> 'about'
        const section = document.getElementById(sectionId);

        if(!section) return;

        // Posición del scroll ajustada con offset
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

        // Smooth scroll
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
})