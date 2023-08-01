const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    showSuccessMessage();
});

function showSuccessMessage() {
    successMessage.textContent = 'Votre message a été envoyé avec succès !';
    setTimeout(() => {
        successMessage.textContent = '';
    }, 3000);
}
