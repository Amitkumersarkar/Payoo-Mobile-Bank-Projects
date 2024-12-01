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

    // verify pin number
    if (pinNumberInput === '1234') {
        console.log('adding money to your account')
        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        // add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // updated balance in the ui dom
        document.getElementById('account-balance').innerText;

    }
    else {
        alert('Failed to add money! Please Try Again')
    }
});

