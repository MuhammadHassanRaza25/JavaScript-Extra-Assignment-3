// JavaScript Extra Assignment 3 //

//                 0          1        2          3          4         5         6
var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

var newDate = new Date()
var currentDay = newDate.getDay()

var hours = newDate.getHours()
var minutes = newDate.getMinutes()
var seconds = newDate.getSeconds()
var ampm;

// 12 din ka time
if(hours > 12){
    hours = hours-12
    ampm = 'PM'
    if(hours<10){
        hours = '0'+hours
    }
}
else{
    ampm = 'AM'
}

document.write(`<h1>Today is : ${dayNames[currentDay]} </h1>`);
document.write(`<h1>Current Time is : ${hours+' '+ampm+' '+': '+minutes+' : '+seconds}</h1>`);

