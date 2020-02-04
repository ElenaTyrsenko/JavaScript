//Task2
//Take number with two numerics and return this number in text type.

firstten = [
    {id: 0, number: 11, text: "eleven"},
    {id: 1, number: 12, text: "twelve"},
    {id: 2, number: 13, text: "thirteen"},
    {id: 3, number: 14, text: "fourteen"},
    {id: 4, number: 15, text: "fifteen"},
    {id: 5, number: 16, text: "sixteen"},
    {id: 6, number: 17, text: "seventeen"},
    {id: 7, number: 18, text: "eighteen"},
    {id: 8, number: 19, text: "nineteen"}
];

tens = [
    {id: 0, number: 1, text: "ten"},   
    {id: 1, number: 2, text: "twenty"},
    {id: 2, number: 3, text: "thirty"},
    {id: 3, number: 4, text: "forty"},
    {id: 4, number: 5, text: "fifty"},
    {id: 5, number: 6, text: "sixty"},
    {id: 6, number: 7, text: "seventy"},
    {id: 7, number: 8, text: "eighty"},
    {id: 8, number: 9, text: "ninety"}
];

units  = [
    {id: 0, number: 1, text: "one"},
    {id: 1, number: 2, text: "two"},
    {id: 2, number: 3, text: "three"},
    {id: 3, number: 4, text: "four"},
    {id: 4, number: 5, text: "five"},
    {id: 5, number: 6, text: "six"},
    {id: 6, number: 7, text: "seven"},
    {id: 7, number: 8, text: "eight"},
    {id: 8, number: 9, text: "nine"},
];

function numberwithtwonumerics() {
    alert("This function takes in the number with two digits and returns it in the string form");
    numberprinted = prompt("Print the number with two numerics", "25");
    alert("You've printed the number: " + numberprinted);
    console.log("You've printed the number: " + numberprinted);
    console.log("Тип данных: " + typeof numberprinted);
    if (numberprinted == 11 || numberprinted == 12 || numberprinted == 13 || numberprinted == 14 
        || numberprinted == 15 || numberprinted == 16 || numberprinted == 17 || numberprinted == 18 || numberprinted == 19) {
    for (let id in firstten) {
        if (numberprinted == firstten[id].number) {
            alert("Number: " + firstten[id].text);
            console.log("Number: " + firstten[id].text);
        }
    }   
    } else if (numberprinted == 20 || numberprinted == 30 || numberprinted == 40 || numberprinted == 50 
        || numberprinted == 60 || numberprinted == 70 || numberprinted == 80 || numberprinted == 90) {
    numbertens = numberprinted.substr(0,1);
    for (let id in tens) {
        numbertens = numberprinted.substr(0,1);
        if (numbertens == tens[id].number) {
            numbertens = tens[id].text
            alert("Number: " + numbertens);
            console.log("Number firsttens: " + numbertens);
        }
    }
    } else {
        numbertens = numberprinted.substr(0,1);
        numberunits = numberprinted.substr(1,2);
    for (let id in tens) {
        if (numbertens == tens[id].number) {
            numbertens = tens[id].text
            console.log("Number tens: " + numbertens);
        }
    }
    for (let id in units) {
        if (numberunits == units[id].number) {
            numberunits = units[id].text
            console.log("Number units: " + numberunits);
        }
    }
    alert("Number: " + numbertens + " " + numberunits);
    }
}
//check if number with two digits 
numberwithtwonumerics();