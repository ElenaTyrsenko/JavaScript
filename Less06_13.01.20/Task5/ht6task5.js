//Task5
//Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
//Например: cascading style sheets в CSS, объектноориентированное программирование в ООП.

function getabbreviation() {
    let abb = "";
    // alert("This function takes in phrase and return abbreviation");
    phrase = prompt("Please, write the phrase", "cascading style sheets");
    // alert(phrase);
    words = phrase.split(" ");
    console.log(words);
    for (let i in words) {
        word = words[i];
        abb = abb.concat(words[i][0], "");
        abbreviation = abb.toUpperCase();
        console.log(abb);
    }
    alert("result: " + abbreviation);
}

getabbreviation();