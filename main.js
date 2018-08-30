// Write your JavaScript here
var result = {};
function getAmountDue(){
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;

    var change = (amountReceived - amountDue) * 100;
    console.log(change);
    getChange(change);
}
function getChange(change) {
    var dollar, quarter, dime, nickel, penny;
        dollar = Math.floor(change / 100);
        change %= 100;

        quarter = Math.floor(change / 25);
        change %= 25;

        dime = Math.floor(change / 10);
        change %= 10;

        nickel = Math.floor(change / 5);
        change %= 5;
        
        penny = Math.round(change);
    
    displayResults(dollar,quarter,dime,nickel,penny);
}
function displayResults(dollar,quarter,dime,nickel,penny){
    //Displays total dollars
    console.log(result);
    document.getElementById('dollars-output').innerHTML = dollar;

    //Displays total quarters
    document.getElementById('quarters-output').innerHTML = quarter;

    //Displays total dimes
    document.getElementById('dimes-output').innerHTML = dime;

    //Displays total nickels 
    document.getElementById('nickels-output').innerHTML = nickel;

    //Displays total pennies
    document.getElementById('pennies-output').innerHTML = penny;
}