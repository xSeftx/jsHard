'use strict';

let arr = ['42', '27', '755', '12', '58', '48', '277'];

let startArr = function(num1, num2) {
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i] + "";
        if (str[0] === num1 || str[0] === num2) {
            console.log(arr[i]);
        }
    }
};  
 

console.log(startArr('2', '4'));

let namber = 100;
for (let i = 2; i <= namber; i++) {
    let flag = 1;
    for (let j = 2; (j <= i/2) && (flag == 1); j = j+1){
        if (i % j == 0){
            flag=0;
        }
    }
    if (flag == 1) {
        console.log(i + ' Делители этого числа: ' + '1 и ' + i);
    }
}







