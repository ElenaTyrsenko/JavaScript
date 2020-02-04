let ticket = prompt('Введите номер с билета');
let hundredOfThousand = ticket % 10;
console.log (hundredOfThousand);
let hundredOfThousand1 = parseInt ( ticket / 10 );
console.log (hundredOfThousand1);
let tensOfThousand = hundredOfThousand1 % 10;
console.log (tensOfThousand);
let tensOfThousand1 = parseInt ( hundredOfThousand1 / 10 );
console.log (tensOfThousand1);
let thousand = tensOfThousand1 % 10;
console.log (thousand);
let thousand1 = parseInt ( tensOfThousand1 / 10 );
console.log (thousand1);
let hundreds = thousand1 % 10;
console.log (hundreds);
let hundreds1 = parseInt ( thousand1 / 10 );
console.log (hundreds1);
let decimal = hundreds1 % 10;
console.log (decimal);
let decimal1 = parseInt ( hundreds1 / 10 );
console.log (decimal1);
let message = (hundredOfThousand + tensOfThousand + thousand ==  hundreds + decimal + decimal1) ? 'YES!!!!' : 'NO((((' 
alert( 'Result:' +message )



