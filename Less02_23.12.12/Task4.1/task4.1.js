let year = prompt('Сколько Вам лет?');
switch (true){
  case year >= 0 && year < 12:
    alert('Ребенок!');
    console.log('Ребенок');
  break;
  case year >= 12 && year < 18:
    alert('Подросток!');
    console.log('Подросток');
   break;
  case year >= 18 && year < 60:
    alert('Взрослый человек!');
    console.log('Взрослый человек');
  break;
  case year >= 60 && year <= 120:
    alert('Пенсионер!');
    console.log('Пенсионер');
  break;
  default:
    alert('Вы существуете?');
}