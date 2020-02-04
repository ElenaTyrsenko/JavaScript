let number = prompt('Введите пятизначное число'); 
let tensOfThousand = number % 10;
console.log (tensOfThousand);
let tensOfThousand1 = parseInt ( number / 10 );
console.log (tensOfThousand1);
let thousand = tensOfThousand1 % 10;
console.log (thousand);
let thousand1 = parseInt ( tensOfThousand1 / 10 );
console.log (thousand1);
let hunders = thousand1 % 10;
console.log (hunders);
let hunders1 = parseInt ( thousand1 / 10 );
console.log (hunders1);
let decimal = hunders1 % 10;
console.log (decimal);
let decimal1 = parseInt ( hunders1 / 10 );
console.log (decimal1);
let message = (tensOfThousand == decimal1 && decimal == thousand) ? 'Это число палиндром' : 'Число не палиндром' 
alert( 'Result:' +message );
