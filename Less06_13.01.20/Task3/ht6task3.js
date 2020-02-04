//Task3
//Modify capital letters to small letters and vice versa, digits to underscore.

function modifylettersdigits() {
    alert("This function takes in the string and modify capital letters to small letters and vice versa, digits to underscore");
    let textmod = "";
    text = new String("D-Link DES-3200-28");
    text = prompt("Please, print the string", text);
    alert("You printed next text: " + text);
    console.log("You printed next text: " + text);
    for (i in text) {
        let regexpliterals = /[a-z]/g;
        let regexpliteralsbig = /[A-Z]/g;
        let regexpnumerics = /[0-9]/g;
        console.log("Symbol: " + text[i]);
        if (textchecksmall = text[i].match(regexpliterals)) {
            console.log("Small literal: " + textchecksmall);
            textmod += text[i].toUpperCase();
            console.log("Small literal to big: " + textmod);
        } else if (textcheckbig = text[i].match(regexpliteralsbig)) {
            console.log("Big literal: " + textcheckbig);
            textmod += text[i].toLowerCase();
            console.log("Big literal to small: " + textmod);
        } else if (textcheckdigits = text[i].match(regexpnumerics)) {
            console.log("Digit: " + textcheckdigits);
            textmod += text[i].replace(regexpnumerics, "_");
            console.log("Digit to underscore: " + textmod);
        }
    }
        alert("Modified text: " + textmod);
        console.log("Modified text: " + textmod);
}

//as class
modifylettersdigits();