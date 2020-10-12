'use strict';


let lang = prompt('Введите значение '  + '"ru" ' + 'или ' + '"en"');
if (lang === 'ru'){
    console.log('пн ' + 'вт ' + 'ср ' + 'чт ' + 'пт ' + 'сб ' + 'вс');
} else if(lang === 'en'){
    console.log('mn ' + 'ts ' + 'wd ' + 'th ' + 'fr ' + 'st ' + 'sn');
} else {
    console.log('Что-то пошло не так');
}


switch (lang){
    case 'ru':
        console.log('пн ' + 'вт ' + 'ср ' + 'чт ' + 'пт ' + 'сб ' + 'вс');
        break;
    case 'en':
        console.log('mn ' + 'ts ' + 'wd ' + 'th ' + 'fr ' + 'st ' + 'sn');
        break;
    default:
        console.log('Что-то пошло не так');
}



let objLang = {
  ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  en: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
}
console.log(objLang[lang]);

let namePerson = prompt('Введите значение: ' + '"Артем" ' + 'или ' + '"Максим"');
let firstPerson = 'Артем';
let secondPerson = 'Максим';
let result = namePerson===firstPerson ? console.log('директор') : namePerson===secondPerson ? console.log('преподаватель') : console.log('студент'); 




