let str = prompt('Введите строку');
console.log(str);
let strSplit = str.split(' ');
console.log(strSplit);
let shortestWord = 100;
 for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length < shortestWord){
	shortestWord = strSplit[i].length;
  }
}
alert ('Самое короткое слово строки: ' + shortestWord + ' эл.')
