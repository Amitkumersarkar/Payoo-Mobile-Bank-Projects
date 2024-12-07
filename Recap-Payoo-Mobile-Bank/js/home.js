// add money to the account

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;

    // get the pin number provided

    const pinNumber = document.getElementById('pin-number').value;

    console.log(addMoney, pinNumber);
});