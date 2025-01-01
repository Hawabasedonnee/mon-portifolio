var typed = new Typed('#defil', {
    strings: ["DEVELOPPEUR WEB"],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 100,
    loop: true
  });
  const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }); 

    // Initialisation de ScrollReveal avec des paramètres généraux
ScrollReveal({ 
  reset: true,
  distance: '60px', // Distance de l'animation
  duration: 2000,    // Durée de l'animation (en ms)
  delay: 200        // Délai avant le début de l'animation
});

// Animer les éléments depuis le haut
ScrollReveal().reveal('.texte, .title', { origin: 'top' });

// Animer les éléments depuis le bas
ScrollReveal().reveal('.images img, .container-box, .car-card, .portifolio-blog, .contact form', { origin: 'bottom' });

// Animer les éléments depuis la gauche
ScrollReveal().reveal('.texte h1, .img', { origin: 'left' });

// Animer les éléments depuis la droite
ScrollReveal().reveal('.texte h3, .texte p, .about-text', { origin: 'right' });
