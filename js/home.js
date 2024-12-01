// add money to the handler
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('money add button clicked');
    // get money to be added to account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('pin-number').value;
    console.log(pinNumberInput);
});

