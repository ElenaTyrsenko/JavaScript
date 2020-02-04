let purchase = prompt('Введите стоимость покупки');
const firstSale = 0.03;
const secondtSale = 0.05;
const thirdtSale = 0.07;
if ( purchase >= 200 && purchase < 300) {
   alert ( 'Стоимость покупки:' + (purchase - (purchase * firstSale)) + 'UAH');
} else if ( purchase >= 300 && purchase < 500) {
   alert ( 'Стоимость покупки:' + (purchase - (purchase * secondtSale)) + 'UAH');
  } else if ( purchase >= 500 ) {
   alert ( 'Стоимость покупки:' + (purchase - (purchase * thirdtSale)) + 'UAH');
 } else { alert ('Стоимость покупки:' + purchase + 'UAH')
}
