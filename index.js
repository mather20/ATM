
// حسابات تجريبية
const accounts = {
    "123456": { pin: "1234", balance: 500 }
};

// دالة التحقق من الحساب
function getAccount() {
    const accountNumber = document.getElementById('accountNumber').value;
    const pin = document.getElementById('pin').value;
    if (accounts[accountNumber] && accounts[accountNumber].pin === pin) {
        return accounts[accountNumber];
    } else {
        document.getElementById('message').innerText = "Invalid account number or PIN.";
        return null;
    }
}

// دالة الإيداع
function deposit() {
    const account = getAccount();
    if (account) {
        const amount = parseFloat(document.getElementById('amount').value);
        account.balance += amount;
        document.getElementById('message').innerText = `Deposit successful. New balance: ${account.balance}`;
    }
}

// دالة السحب
function withdraw() {
    const account = getAccount();
    if (account) {
        const amount = parseFloat(document.getElementById('amount').value);
        if (amount <= account.balance) {
            account.balance -= amount;
            document.getElementById('message').innerText = `Withdrawal successful. New balance: ${account.balance}`;
        } else {
            document.getElementById('message').innerText = "Insufficient balance.";
        }
    }
}

// دالة التحقق من الرصيد
function checkBalance() {
    const account = getAccount();
    if (account) {
        document.getElementById('message').innerText = `Current balance: ${account.balance}`;
    }
}
