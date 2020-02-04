let number = prompt('Введите трехзначное число'); 
let hunders = number % 10;
let hunders1 = parseInt ( number / 10 );
let decimal = hunders1 % 10;
let decimal1 = parseInt ( hunders1 / 10 );
let message = (hunders == decimal || decimal == decimal1) ? 'Есть одинаковые цифры' : 'Одинаковых цифр нет';
alert( 'Result:' +message );
