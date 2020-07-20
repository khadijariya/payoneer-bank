//login button event create
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click" , function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button event create
const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click" , function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositAmountNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositAmountNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;
    
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositAmountNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
})