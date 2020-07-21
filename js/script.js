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
    
    const depositAmountNumber = getInputNumber("depositAmount");
    updateSpanText("currentDeposit",depositAmountNumber)
    updateSpanText("currentBalance",depositAmountNumber)

    document.getElementById("depositAmount").value = "";

})
// withdraw button event create
const withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener("click", function() {

    const withdrawAmountNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw",withdrawAmountNumber);
    updateSpanText("currentBalance", -1 * withdrawAmountNumber);

    document.getElementById("withdrawAmount").value = "";

})

    function getInputNumber(id) {
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }

    function updateSpanText(id , depositAmountNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = depositAmountNumber + currentNumber;
        document.getElementById(id).innerText = totalAmount;
    }
