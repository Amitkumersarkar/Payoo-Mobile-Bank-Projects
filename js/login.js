// set event handler
document.getElementById('btn-login').addEventListener('change', function (event) {
    console.log('login button clicked');
    // prevent default behavior
    event.preventDefault();
    // pin number
    const pinNumber = document.getElementById('pin-number').value;
    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber, pinNumber);

    // this is temporary. 
    if (phoneNumber === '5' && pinNumber === '12345') {
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else {
        alert('wrong phone number or pin');
    }
})