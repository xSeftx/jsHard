'use strict';

function getTime(){
    const data = new Date(),    
        year = data.getFullYear(),
        month = data.getMonth(),
        day = data.getDate(),
        hour = data.getHours(),
        minutes = data.getMinutes(),
        seconds = data.getSeconds(),
        divSay = document.querySelector('.say'),
        divDay = document.querySelector('.day'),
        divTime = document.querySelector('.time'),
        divYear = document.querySelector('.new-year'),
        nowData = new Date().getTime(),
        dataNewYear = new Date('1 January 2021').getTime(),
        timeRemaining = ((dataNewYear - nowData)/1000),        
        days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
        ];
    let mid;

    const getZero = function(nam){
        if (nam > 0 && nam < 10) { 
            return '0' + nam;
        } else {
        return nam;
        }
    }
    
    
    function sayHello(){    
    if (hour > 20 || hour < 5){
        divSay.textContent = 'Доброй ночи';
    } else if (hour > 5 || hour < 11) {
        divSay.textContent = 'Доброе утро';
    } else {
        divSay.textContent = 'Доброй день';
    }
    
    divDay.textContent = `Сегодня: ${days[day-1]}`;
    divTime.textContent = `Текущее время: ${getZero(hour)}: ${getZero(minutes)}: ${getZero(seconds)} ${hour < 12 ? mid='AM' : mid='PM'}`;
    divYear.textContent = `До Нового года осталось ${Math.floor((timeRemaining)/60 / 60 /24)} дней`

    

    
    }
    

    sayHello();
}

setInterval(getTime, 1000);







