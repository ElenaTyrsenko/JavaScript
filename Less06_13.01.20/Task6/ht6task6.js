//Task6
//Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.

function stringconcat() {
    let substring = "";
    let string = "";
    do {
        substring = prompt("Print substring", "Hello!");
        console.log("Substring was printed by user: " + substring);
        string = string.concat(substring, " ");
        console.log("Concatenated string: " + string);
        answer = prompt("Do you want to enter another substring?", "yes");
        console.log("User printed next answer: " + answer);      
    } while (answer == "yes");
    alert(string);
}

stringconcat();

