let num = 266219;
numString = num.toString();
let sum = 1;
for ( i = 0; i < numString.length; i++) {
    sum *= numString[i];
    
}
console.log('Произведение цифр этого числа: ' + sum);


let number = sum**3;
numberString = number.toString();
console.log('Результат возведения в степень 3: ' + numberString);
console.log('Первые 2 цифры полученного числа: ' + numberString.substring(0,3));


