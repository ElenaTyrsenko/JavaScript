let today = prompt('Введите дату в формате year/mounth/day');
  console.log(today);
  let arr = today.split ('/');
  console.log(arr);
  let newDay = 0;
  let newMonth = 0;
  let newYear = 0;
  console.log(arr);
  if ((arr[1] == 1 || arr[1] == 3 || arr[1] == 5 || arr[1] == 7 || arr[1] == 8 || arr[1] == 10 || arr[1] == 12) && (arr[2] < 31)) { 
    newDay = +arr[2] + 1;
  } else if ((arr[1] == 4 || arr[1] == 6 || arr[1] == 9 || arr[1] == 11)  && (arr[2] < 30)) {
    newDay = +arr[2] + 1;
  } else if ((arr[1] == 2 && (arr[0] % 4 == 0 || arr[0] % 400 == 0 && arr[0] % 100 !== 0) && (arr[2] < 29)) || (arr[1] == 2 && arr[2] < 28)){
    newDay = (+(arr[2]) + 1);
  } else { 
    newDay = 1;
  }
  if (((arr[1] == 1 || arr[1] == 3 || arr[1] == 5 || arr[1] == 7 || arr[1] == 8 || arr[1] == 10 || arr[1] == 12) && (arr[2] < 31)) || ((arr[1] == 4 || arr[1] == 6 || arr[1] == 9 || arr[1] == 11)  && (arr[2] < 30)) || (arr[1] == 2 && arr[2] < 28) || (arr[1] == 2 && (+arr[0] % 4 == 0 || +arr[0] % 400 == 0 && +arr[0] % 100 !== 0) && (arr[2] < 29))) {
    newMonth = arr[1];
  } else if (arr[1] == 12 && arr[2] == 31) {
    newMonth = 1;
  } else { 
   newMonth = +arr[1] + 1;
  }
  if (arr[1] == 12 && arr[2] == 31) {
    newYear = +arr[0] + 1; 
  } else if (arr[1] >= 1 && arr[1] <= 12) {
    newYear = arr[0];
  }
  console.log (newYear);
  console.log (newMonth);
  console.log (newDay);
  alert ('Следующая дата:' +newYear +'/' +newMonth +'/'+newDay)