let cost1 = prompt('Введите стоимость 1');
let cost2 = prompt('Введите стоимость 2');
let cost3 = prompt('Введите стоимость 3');
let size1 = prompt('Введите количество кг груза в емкости 1');
let size2 = prompt('Введите количество кг груза в емкости 2');
let size3 = prompt('Введите количество кг груза в емкости 3');
let arrCosts = [ cost1, cost2, cost3];
console.log (arrCosts);
arrCosts.sort (function ( a, b ) {
 return a - b;
})
console.log (arrCosts);
let arrSizes = [ size1, size2, size3];
console.log (arrSizes);
arrSizes.sort (function ( a, b ) {
 return a - b;
})
console.log (arrSizes);
let sum = arrCosts[2] * arrSizes[2] + arrCosts[1] * arrSizes[1] + arrCosts[0] * arrSizes[0];
alert ('Наилучшая прибыль составила:' +sum + 'руб.')
