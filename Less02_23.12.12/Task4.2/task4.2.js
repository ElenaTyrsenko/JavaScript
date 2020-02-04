// let number = prompt('Введите число от 0 до 9');
// switch (number){
//   case 1:
//     alert('!');
//     console.log('!');
//   break;
//   case 2:
//     alert('@');
//     console.log('@');
//    break;
//   case 3:
//     alert('#');
//     console.log('#');
//   break;
//   case 4:
//     alert('$');
//     console.log('$');
//   break;
//   case 5:
//      alert('%');
//      console.log('%');
//   break;     
//   case 6:
//      alert('^');
//      console.log('^');
//   break; 
//   case 7:
//      alert('&');
//      console.log('&');
//   break; 
//   case 8:
//      alert('*');
//      console.log('*');
//   break; 
//   case 9:
//      alert('(');
//      console.log('(');
//   break;
//   case 0:
//      alert(')');
//      console.log(')');
//   break; 
// //   default:
// //     alert('Вы действительно ввели число от 0 до 9?');
//  }

let number = prompt('Введите число от 0 до 9');
switch (true){
  case (number <= 1):
    alert('!');
    console.log('!');
  break;
  case (number <= 2):
    alert('@');
    console.log('@');
   break;
  case (number <= 3):
    alert('#');
    console.log('#');
  break;
  case (number <= 4):
    alert('$');
    console.log('$');
  break;
  case (number <= 5):
     alert('%');
     console.log('%');
  break;     
  case (number <= 6):
     alert('^');
     console.log('^');
  break; 
  case (number <= 7):
     alert('&');
     console.log('&');
  break; 
  case (number <= 8):
     alert('*');
     console.log('*');
  break; 
  case (number <= 9):
     alert('(');
     console.log('(');
  break;
  case (number <= 0):
     alert(')');
     console.log(')');
  break; 
  default:
    alert('Вы действительно ввели число от 0 до 9?');
 }