const initialContainer = document.querySelector('.initial-container');
const sucessMessageContainer = document.querySelector('.sucessMessage-container');

const emailLabel = document.querySelector('.email-label');
const emailInput = document.getElementById('email');
const submitButton = document.querySelector('.submit-btn');
const dismissButton = document.querySelector('.dismiss-btn');

function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(email)) {
        initialContainer.classList.toggle('hide');
        sucessMessageContainer.classList.toggle('hide');
    } else {
        emailLabel.innerHTML = 'Valid email required';
        emailLabel.style.textAlign = 'right';
        emailLabel.style.color = 'hsl(4, 100%, 67%)';
        emailLabel.classList.add('error');
    };
};

emailInput.addEventListener('click', () => {
    if(emailLabel.classList.contains('error')) {
        emailInput.value = '';
        emailLabel.innerHTML = 'Email address';
        emailLabel.style.textAlign = 'left';
        emailLabel.style.color = 'hsl(234, 29%, 20%)';
        emailLabel.classList.remove('error');
    };
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(emailInput.value === '') {
        alert('The email field cannot be sent empty!');
        return;
    };

    const email = emailInput.value;
    checkEmail(email);
});

dismissButton.addEventListener('click', () => {
    initialContainer.classList.toggle('hide');
    sucessMessageContainer.classList.toggle('hide');
    emailInput.value = '';
});