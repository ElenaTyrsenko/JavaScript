let lenghtCircle = prompt('Введите длину окружности');
let perimeter = prompt('Введите периметр квадрата');
if ( (lenghtCircle / Math.PI) <= (perimeter / 4)) {
   alert ( 'Окружность может быть вписана в данный квадрат');
}  else { alert ('Окружность не вписывается в данный квадрат');
}
