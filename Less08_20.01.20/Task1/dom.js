document.getElementById('test').onkeypress = function(event){
  if (event.keyCode >= 48 && event.keyCode <= 57){
  console.log ('цифра');
  return false;
}
}
