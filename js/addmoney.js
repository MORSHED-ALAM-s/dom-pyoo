document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;
    // worng way 
    if (pinNumber === '123'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('Worng pin numbers')
    }
})