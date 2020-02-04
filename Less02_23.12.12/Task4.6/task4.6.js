let dollars = prompt('Введите количество долларов');
let exchange = prompt('Введите 1 - перевод в EUR, 2 - перевод в UAN, 3 - перевод в AZN');
if (exchange == 1) {
   alert ( 'Количество:' + (dollars * 0.884) + 'EUR');
} else if (exchange == 2) {
   alert ( 'Количество:' + (dollars * 23.957) + 'UAN');
  } else if (exchange == 3) {
   alert ( 'Количество:' + (dollars * 1.69649) + 'AZN');
   } else { alert ('Вы точно ввели данные??')
}
