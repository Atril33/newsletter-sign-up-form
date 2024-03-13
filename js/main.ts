const emailField = document.getElementById('email-input') as HTMLInputElement;
const emailError = document.getElementById('email-error') as HTMLDivElement;
const submitButton = document.getElementsByClassName('submit-button')[0] as HTMLButtonElement;
const popThanksMessage = document.getElementById('pop-thanks-message') as HTMLDivElement;
const email = emailField.value;

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

submitButton.addEventListener('click', () => {
    if (emailField.value === '') {
        emailField.style.border = '0.70px solid #ff8080';
        emailField.style.backgroundColor = '#ffe6e6';
        emailError.innerHTML = 'Email cannot be empty';
    }
  let emailVerify = validateEmail(email);

  if(emailVerify === false) {
    emailField.style.border = '0.70px solid #ff8080';
    emailField.style.backgroundColor = '#ffe6e6';
    emailError.innerHTML = 'Please provide a valid email';
} else {
    popThanksMessage.style.display = 'block';
    popThanksMessage.innerHTML = `<div class="thanks-message-container">
    <img src="../assets/icon-success.svg" alt="success-icon" class="success-icon">
    <h2>Thanks for subscribing!</h2>
    <p>A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.</p>
    <div class="close-button" onclick="closeThanksMessage()">Dismiss Message</div>
    </div>`
}
});


function closeThanksMessage() {
    popThanksMessage.style.display = 'none';
    location.reload();
    emailField.value = '';
}
