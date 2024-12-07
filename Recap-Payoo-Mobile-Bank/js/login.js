// form submit reloading the page
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;

    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    // this is temporary .we don't we this method
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('Your Log In');
        window.location.href = '/home.html';
    }
    else {
        alert('Wrong Phone Number Or Pin Number');
    }

});