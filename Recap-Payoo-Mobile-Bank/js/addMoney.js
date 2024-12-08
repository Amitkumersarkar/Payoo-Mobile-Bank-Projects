// step-1
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reloading for lost data
    event.preventDefault();

    // get money and the pin number
    const addMoney = document.getElementById('input-add-money').value;

    const addMoneyNumber = parseFloat(addMoney);

    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(addMoney, pinNumber);
    // verify the pin number
    if (pinNumber === "1234") {
        // add monet the account
        console.log('adding money to your account ');
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);

        const balanceNumber = parseFloat(balance);
        // new balance
        const newBalance = balanceNumber + addMoneyNumber;
        // updated the dom with updated balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money..! Please try again ');
    }
});