let number = prompt('Введите год для проверки'); 
if (number % 4 == 0 || number % 400 == 0 && number % 100 !== 0) {
  alert ('Высокосный год');
} else {
  alert ('Год не высокосный');
}