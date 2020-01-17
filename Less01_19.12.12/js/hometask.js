// Task 1
// let name = prompt('Enter your name');
// alert('Привет,' + name + '!');

// Task 2
// let yearOfBith = prompt('Enter year of your birthday');
// const thisyear = 2019; 
// let years = thisYear - yearOfBith;
// alert('Ваш возраст:'years + 'лет!');

//Task 3
//let lenght = prompt('Введите длину стороны квадрата');
//let perimeter = 4*lenght; 
//alert( 'Периметр квадрата:' + perimeter );

//Task 4
//let radius = prompt('Введите радиус окружности');
//let area = Math.PI * radius ** 2; 
//alert( 'Площадь окружности:' + area );

//Task 5
//let length = prompt('Введите расстояние между городами');
//let  time = prompt('Введите желаемое время в пути');
//let speed = length / time; 
//alert( 'Необходимая скорость:' + speed ); 

// Task 6
// let doll = prompt('Введите количество долларов');
// const exchange = 0.8897;
// let evro = exchange * doll; 
// alert( 'Количество евро:' + evro );

//Task 7
//let flesh = prompt('Введите объем флешки');
//let file = 820;
//let quantity = parseInt ( flesh * 1024 / file ); 
//alert( 'Количество файлов:' + quantity );

//Task 8
//let money = prompt('Введите количество денег');
//let choko = 25;
//let quantity = parseInt ( money / choko ); 
//let balance = money % choko; 
//alert( 'Количество файлов:' + quantity) ;
//alert( 'Количество остатка денег:' + balance );

//Task 9 
let number = prompt('Введите трехзначное число'); 
let hunders = number % 10;
let hunders1 = parseInt ( number / 10 );
let decimal = hunders1 % 10;
let decimal1 = parseInt ( hunders1 / 10 );
alert( 'Result:' + hunders + decimal + decimal1 );