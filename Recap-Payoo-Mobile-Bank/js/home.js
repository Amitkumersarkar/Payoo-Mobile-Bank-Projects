// add money to the account

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;

    // get the pin number provided

    const pinNumber = document.getElementById('pin-number').value;

    console.log(addMoney, pinNumber);

    // verify pin number
    if (pinNumber === '1234') {
        console.log('adding money to your account');

        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // add  addMoney with account balance
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        // updated balance in ui and show total balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to adding money in your account ...! please try again');
    }
});