let number = prompt ('Введите число');
function fib(number) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= number; i++) {
  let c = a + b;
  a = b;
  b = c;
}
return b;
}

alert ( fib(number) );