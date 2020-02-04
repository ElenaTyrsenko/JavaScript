//Task9
//Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя.
//Например: строка “10/08/2020”, разделитель “/”, результат:“10”, “08”, “2020”. Выполняя задание, не используйте функцию split().

function splitstring() {
    string = prompt("Write string to break to substring", "10/08/2020");
    separator = prompt("Write the separator", "/");
    alert("You printed string: " + string);
    alert("You printed separator: " + separator);

    pos = 0;
    pos1 = string.indexOf(separator);
    console.log("pos: " + pos + " " + pos1);
    text = '"' + string.slice(pos, pos1) + '"';
    console.log("part text: " + text);
    do {
    pos1 = pos1 + 1;
    console.log("pos1: " + pos1);
    pos2 = string.indexOf(separator, pos1);
    console.log("pos2: " + pos2);

    text1 = string.slice(pos1, pos2);
    console.log("part text: " + '"' + text1 + '"');
    text += ", " + '"' + text1 + '"';
    console.log ("sum text: " + text);
    pos1 = pos2;
    } while (pos1 != -1);

    indextext = text.length-1;
    text = text.substr(0, indextext);
    index = string.length-1;
    lastchar = string.charAt(index); 
    alert("Result: " + text + lastchar + '"');
    console.log("Result: " + text + lastchar + '"');
}

splitstring();


