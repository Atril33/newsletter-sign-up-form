var emailField = document.getElementById('email-input');
var emailError = document.getElementById('email-error');
var submitButton = document.getElementsByClassName('submit-button')[0];
var popThanksMessage = document.getElementById('pop-thanks-message');
var email = emailField.value;
function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
submitButton.addEventListener('click', function () {
    if (emailField.value === '') {
        emailField.style.border = '0.70px solid #ff8080';
        emailField.style.backgroundColor = '#ffe6e6';
        emailError.innerHTML = 'Email cannot be empty';
    }
    else {
        var emailVerify = validateEmail(emailField.value);
        if (emailVerify) {
            console.log(emailVerify);
            popThanksMessage.style.display = 'block';
            popThanksMessage.innerHTML = "<div class=\"thanks-message-container\">\n                <img src=\"./assets/icon-success.svg\" alt=\"success-icon\" class=\"success-icon\">\n                <h2>Thanks for subscribing!</h2>\n                <p>A confirmation email has been sent to <b>".concat(emailField.value, "</b>. Please open it and click the button inside to confirm your subscription.</p>\n                <div class=\"close-button\" onclick=\"closeThanksMessage()\">Dismiss Message</div>\n            </div>");
        }
        else {
            console.log(emailVerify);
            emailField.style.border = '0.70px solid #ff8080';
            emailField.style.backgroundColor = '#ffe6e6';
            emailError.innerHTML = 'Please provide a valid email';
            emailField.value = '';
        }
    }
});
function closeThanksMessage() {
    popThanksMessage.style.display = 'none';
    location.reload();
    emailField.value = '';
}
