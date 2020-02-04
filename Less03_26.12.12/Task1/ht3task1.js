let str = prompt('Введите строку');
console.log(str);
let strUpperCase = str.toUpperCase();
console.log(strUpperCase);
let arr = strUpperCase.split ('');
console.log(arr);
let arrDouble = arr.filter(function (elem, i, arr) {
    return i !== arr.indexOf(elem) || i !== arr.lastIndexOf(elem);
});
console.log(arrDouble);
let result = {};
arrDouble.forEach(function(elem){
  if (result[elem] != undefined)
    ++result[elem];
    else
    result[elem] = 1;
  });
console.log(result);
for (let key in result)
alert ('Элемент: ' + key + ' повторяется ' + result[key] + 'раз(а)');
