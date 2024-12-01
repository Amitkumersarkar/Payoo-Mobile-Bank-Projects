// set event handler
document.getElementById('btn-login').addEventListener('change', function (event) {
    console.log('login button clicked');
    // prevent default behavior
    event.preventDefault();

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})