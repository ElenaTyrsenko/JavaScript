//Task7
//Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо
//выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

//Calculator
function calculateresult() {
    alert("This function takes in string with example, calculate and return result");
    example = prompt("Please, write expression for calculation", "20 + 10");
    alert("You printed next example: " + example);
    plus = example.match(/\+/);
    minus = example.match(/\-/);
    multi = example.match(/\*/);
    division = example.match(/\//);
    numbers = example.match(/\d+/g);
    a = parseInt((numbers[0]), 10);
    b = parseInt((numbers[1]), 10); 
    console.log("Numbers: " + numbers); 

    if (plus == "+") {
        result = a + b; 
        alert("Result: " + result);
        console.log("Result: " + result + ", sign: " + plus);
    } if (minus == "-") {
        result = a - b; 
        alert("Result: " + result);
        console.log("Result: " + result + ", sign: " + minus);
    } if (multi == "*") {
        result = a * b; 
        alert("Result: " + result);
        console.log("Result: " + result + ", sign: " + multi);
    } if (division == "/") {
        result = a / b; 
        alert("Result: " + result);
        console.log("Result: " + result + ", sign: " + division);
    }
}

calculateresult();