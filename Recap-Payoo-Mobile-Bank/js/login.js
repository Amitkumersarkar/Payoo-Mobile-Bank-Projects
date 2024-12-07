// form submit reloading the page
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('login btn clicked');

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})