// let height = prompt('Введите высоту комнаты');
// let width = prompt('Введите ширину комнаты');
// let length = prompt('Введите длину комнаты');
// const tinPaint = 16;
// function area(height, width, length) {
// if (height > 1000 && width > 1000 && length > 1000) {
//   (height * width * 2 + height * length * 2);
// } else {alert('Данные введенны не корректно')}
// }
// let amount = Math.round (area / tinPaint);
// alert ('Необходимое минимальное количество банок с краской' + amount + 'шт.')


let height = prompt('Введите высоту комнаты');
let width = prompt('Введите ширину комнаты');
let length = prompt('Введите длину комнаты');
const tinPaint = 16;
let area = height * width * 2 + height * length * 2;
function control ( height, width, length ) {
if (height < 1000 && width < 1000 && length < 1000) {
  return (area);
} else {alert('Данные введенны не корректно')
} 
console.log(control)
}

let amount = Math.round (area / tinPaint);
alert ('Необходимое минимальное количество банок с краской' + amount + 'шт.')
