let str = prompt('Введите строку', 'ATTCG');
console.log(str);
function result() {
  var strand = "";
  for(i = 0; i < str.length; i++) {
      if(str[i] === 'A') {
      strresult = 'T';
    } else if(str[i] === 'T') {
      strresult = 'A';
    } else if(str[i] === 'G') {
      strresult = 'C';
    } else if(str[i] === 'C') {
      strresult = 'G';
    } else {
      strresult = '';
      console.log('Некоректно введены данные');
    }
    strand = strand.concat(strresult, "");
  }
  if(strand.length == str.length) {
    alert('Результат: ' + strand);
    } else {
    alert('Некоректно введены данные');
  }
}

result();