let  number = prompt('Введите число возводимое в степень');
let  exponent = prompt('Введите показатель степени');

function result( number, exponent ) {
 return (exponent == 1) ? number : (number * result(number, exponent-1));
}
alert( 'Полученный результат' + '-' + result(number, exponent) );


