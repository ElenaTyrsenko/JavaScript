// let  x = prompt('Введите число возводимое в степень');
// let  n = prompt('Введите показатель степени');
// function res(x, n) {
//  if ( n == 1 ) {
//    return x;
//    } else {
//      return x * res(x, n-1);
//    }
//   }
//   alert( res(x, n) );

// function res( x, n ) {
//  return (n == 1) ? x : (x * res(x, n-1));
// }
// alert( 'Полученный результат' + '-' + res(x, n) );

let  number = prompt('Введите число возводимое в степень');
let  exponent = prompt('Введите показатель степени');
// function result( number, exponent) {
//  if ( exponent == 1 ) {
//    return number;
//    } else {
//      return number * result(number, exponent-1);
//    }
//   }
//   alert( result(number, exponent) );

function result( number, exponent ) {
 return (exponent == 1) ? number : (number * result(number, exponent-1));
}
alert( 'Полученный результат' + '-' + result(number, exponent) );
