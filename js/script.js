 document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle
    const toggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }

    // Formulaire contact
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // empêche l'envoi classique

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs.');
            } else {
                // ✅ Message de confirmation avant reset
                alert('Merci pour votre message !');
                form.reset(); // réinitialise les champs après l’alerte
            }
        });
    }
});

