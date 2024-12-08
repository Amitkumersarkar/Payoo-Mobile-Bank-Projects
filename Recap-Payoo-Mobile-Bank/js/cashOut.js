document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('cash out button click');
    const cashOut = document.getElementById('input-cash-out').value;

    // get pin and verify
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('cash-out-pin').value;

    console.log(cashOut, pinNumber);

    if (pinNumber === '1234') {
        console.log('money is reducing');
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);

        const balanceNumber = parseFloat(balance);
        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        // update the ui
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to cash out.! Please try again..');

    }
})