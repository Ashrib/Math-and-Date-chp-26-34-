// Q.1....
function posInteger() {
    var pIntegers = parseInt(document.getElementById("p-int").value);
    var pIntRound = Math.round(pIntegers);
    var pIntFloor = Math.floor(pIntegers);
    var pIntCeil = Math.ceil(pIntegers);

    document.getElementById("p-numbr").innerHTML = "<b>Number: </b>"+ pIntegers;
    document.getElementById("p-round").innerHTML = "<b>Round: </b>"+ pIntRound;
    document.getElementById("p-floor").innerHTML = "<b>Floor: </b>"+ pIntFloor;
    document.getElementById("p-ceil").innerHTML = "<b>Ceil: </b>"+ pIntCeil;
};
// Q.2.....
function negInteger() {
    var nIntegers = parseInt(document.getElementById("n-int").value);
    var nIntRound = Math.round(nIntegers);
    var nIntFloor = Math.floor(nIntegers);
    var nIntCeil = Math.ceil(nIntegers);

    document.getElementById("n-numbr").innerHTML = "<b>Number: </b>"+ nIntegers;
    document.getElementById("n-round").innerHTML = "<b>Round: </b>"+ nIntRound;
    document.getElementById("n-floor").innerHTML = "<b>Floor: </b>"+ nIntFloor;
    document.getElementById("n-ceil").innerHTML = "<b>Ceil: </b>"+ nIntCeil;
};
// Q.3.....
function posfloat() {
    var pFloatingNum = parseFloat(document.getElementById("p-float").value);
    var pFloatRound = Math.round(pFloatingNum);
    var pFloatFloor = Math.floor(pFloatingNum);
    var pFloatCeil = Math.ceil(pFloatingNum);

    document.getElementById("pf-numbr").innerHTML = "<b>Number: </b>"+ pFloatingNum;
    document.getElementById("pf-round").innerHTML = "<b>Round: </b>"+ pFloatRound;
    document.getElementById("pf-floor").innerHTML = "<b>Floor: </b>"+ pFloatFloor;
    document.getElementById("pf-ceil").innerHTML = "<b>Ceil: </b>"+ pFloatCeil;
};
// Q.4.....
function negfloat() {
    var nFloatingNum = parseFloat(document.getElementById("n-float").value);
    var nFloatRound = Math.round(nFloatingNum);
    var nFloatFloor = Math.floor(nFloatingNum);
    var nFloatCeil = Math.ceil(nFloatingNum);

    document.getElementById("nf-numbr").innerHTML = "<b>Number: </b>"+ nFloatingNum;
    document.getElementById("nf-round").innerHTML = "<b>Round: </b>"+ nFloatRound;
    document.getElementById("nf-floor").innerHTML = "<b>Floor: </b>"+ nFloatFloor;
    document.getElementById("nf-ceil").innerHTML = "<b>Ceil: </b>"+ nFloatCeil;
};
// Q.5.... 
function absValue() {
    var userVal = document.getElementById("absolute-value").value;
    var absValue = Math.abs(userVal);
    document.getElementById("abs").innerHTML = "<b>Absolute value of "+ userVal +" is "+absValue +"</br>";
}
// Q.6.....
function dice() {
    var randomDice = Math.floor(Math.random()*6 + 1);
    document.getElementById("dicevalue").innerHTML = "<b>Random Dice Value: </b>"+ randomDice;
};
// Q.7.....
function toss() {
    var randomToss = Math.floor(Math.random()*2);
    var tossValue;
    if(randomToss === 0){
        tossValue = "Heads";
    }
    else{
        tossValue = "Tails";
    }
    document.getElementById("tossvalue").innerHTML = "<b>Random Toss: </b>"+ tossValue;
};
// Q.8.....
function random1_100() {
    var range1_100 = Math.floor(Math.random()*100 + 1);
    document.getElementById("random-1_100").innerHTML = "<b>Random Number between 1:100 : </b>"+ range1_100;
};
// Q.9...... ***********************

// Q.10.......
function secretnum() {
    var secretNum = Math.floor(Math.random()*10 + 1);
    var userNum = Number(document.getElementById("secret-num").value);
    var message;
    if(userNum === secretNum){
        message = "Congratulations! Your are correct.";
    }
    else if(userNum > 10 || userNum < 1){
        message = "You entered the number out of range!";
    }
    else{
        message = "Wrong! Try again.";
    };
    document.getElementById("message").innerHTML = "<b>"+ message + "</b>";
};
// Q.11........
var currentDate = new Date();
document.getElementById("date").innerHTML = currentDate;
// Q.12.......
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var valueOfMonth = currentDate.getMonth();
var currentMonth;
for(var i = 0; i < months.length; i++){
    if(valueOfMonth === i){
        currentMonth = months[i];
    }
};
document.getElementById("month").innerHTML = currentMonth;
// Q.13.......
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var valueOfDay = currentDate.getDay();
var currentDay;
for(var i = 0; i < days.length; i++){
    if(valueOfDay === i){
        currentDay = days[i];
    }
};
var halfOfDay = currentDay.slice(0,3);
document.getElementById("day").innerHTML = halfOfDay;
// Q.14......
if(currentDay === "Sunday" || currentDay === "Saturday"){
    document.getElementById("funday").innerHTML = "It's Fun day.";
}
else{
    document.getElementById("funday").innerHTML = "It's not Fun day.";
};
// Q.15........
var valueOfDate = currentDate.getDate();
var days_msg;
if(valueOfDate <= 15){
    days_msg = "First fifteen days of the month"
}
else{
    days_msg = "Last days of the month"
};
document.getElementById("days-message").innerHTML = days_msg;
// Q.16....... **********************

// Q.17.......
var hrs = currentDate.getHours();
var am_pm;
if(hrs >= 12){
    am_pm = "PM";
}
if(hrs < 12){
    am_pm = "AM";
};
document.getElementById("am-pm").innerHTML = "It's "+ am_pm;
// Q.18.......
var theDate = new Date();
var currentYear= theDate.getFullYear();
var previousYear= currentYear-2;  
var lastMonth = 12;
var laterDate = new Date(previousYear, lastMonth, 0);
document.getElementById("laterdate").innerHTML = laterDate;
// Q.19.......
var aDay = 24 * 60 * 60 * 1000;
var ramadan = new Date(2015, 5, 18);
var passed_days = Math.abs(Math.round((valueOfDate - ramadan) / aDay));
document.getElementById("ramadan").innerHTML = "<b>1st Ramadan was on June 18, 2015</b>";
document.getElementById("passed-days").innerText = passed_days +" days have passed scince 1st Ramadan, 2015";
// Q.20.......
var referenceDate = new Date(2015, 11, 5);
referenceDate.setHours(22);
referenceDate.setMinutes(50);
referenceDate.setSeconds(16);
var passed_sec = Math.round(Math.floor((currentDate - referenceDate) / 1000));
document.getElementById("ref").innerHTML = "<b>Reference date: </b>"+referenceDate;
document.getElementById("passed-sec").innerText= passed_sec + " seconds had passed since beginning of 2015";
// Q.21.........
var currentDate2 = new Date();
var hr_1 = currentDate2.setHours(currentDate.getHours()-1);

document.getElementById("cDate").innerHTML = "<b>Current date: </b>"+ currentDate;
document.getElementById("hr-1").innerHTML = "1 hour ago, it was "+ currentDate2;
// Q.22......
var currentDate3 = new Date();
var yr_100 = currentDate3.setFullYear(currentDate.getFullYear()-100);

document.getElementById("cYear").innerHTML = "<b>Current date: </b>"+ currentDate;
document.getElementById("yr-100").innerHTML = "100 years back, it was "+ currentDate3;
// Q.23........
function getage() {
    var userAge = document.getElementById("age").value;
    var aYear = currentDate.getFullYear();
    var birthYr = aYear - userAge;
    if(userAge > 99 || userAge < 1){
        document.getElementById("showage").innerHTML = "Not valid!";
    }
    else{
        document.getElementById("showage").innerHTML = "Your age is "+ userAge;
        document.getElementById("birthyear").innerHTML = "Your birth year is " + birthYr;
    };
};
// Q.24.........
// function submitBill(){
//     var uName = document.getElementById("name").value;
//     var mName = document.getElementById("monthn").value;
//     var units = document.getElementById("units").value;
//     var charges = document.getElementById("charges").value;

//     var netAmount = units * charges;
//     var lateCharges = 500;
//     var afterDue = netAmount + lateCharges;

//     document.getElementById("sName").innerHTML = "Customer Name: " + uName;
//     document.getElementById("sMonth").innerHTML = "Month: " + mName;
//     document.getElementById("sUnits").innerHTML = "No of units: " + units;
//     document.getElementById("sCharges").innerHTML = "Charges per unit: " + charges;
//     document.getElementById("net-amount").innerHTML = "Net amount payable (within due date): "+ netAmount;
//     document.getElementById("latecharges").innerHTML = "Late charges: " + lateCharges;
//     document.getElementById("gross-amount").innerHTML = "Gross aomunt (after due date): "+ afterDue;
// }