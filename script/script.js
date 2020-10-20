'use strict';






let clock = function() {
    let Data = new Date(),
    Year = Data.getFullYear(),

    Month = Data.getMonth(),
    Day = Data.getDate(),
    Hour = Data.getHours(),
    Minutes = Data.getMinutes(),
    Seconds = Data.getSeconds(),
    hour = '', 

    nowMonth = ["января", "февраля", "марта", "мае", "июня", "июля", "июля", "августа", "сентября", "октября", "ноября", "декабря"];






let calendar = function() {
if (Hour === 1 || Hour === 21){
    hour = 'час';
} else if(Hour >= 2 && Hour <= 4 || Hour >= 22 && Hour <= 24){
    hour = 'часа';
} else {
    hour = 'часов';
}return hour;

};

calendar();

let getZero = function(nam){
if (nam > 0 && nam < 10) { 
    return '0' + nam;
} else {
    return nam;
}
};

    
let timerOne = ('Сегодня ' + Day + ' ' + nowMonth[Month] + ' ' + Year + ' года ' + Hour + ' ' + hour + ' ' + Minutes + ' минут ' + Seconds + ' секунд' + '<br>' ); 



let timerTwo = ('<br>' + getZero(Hour) + ':' + getZero(Minutes) + ':' + getZero(Seconds) + ' ' + getZero(Day) + '.' + getZero(Month) + '.' + getZero(Year) + '  ');


document.getElementById("clock_one").innerHTML = timerOne;

document.getElementById("clock_two").innerHTML = timerTwo;
};

 
setInterval(clock, 1000);






