//Task1
//Statistic about string: amount of literals, numerics, spaces and special symbols.
function countforstring() {

analize = new String('A lot of animals (300-1000) live in the Africe (we have 6 continents), but there are a lot of fruits (100) in Africa too: mango, banana, nuts.');
alert ("String will be check: " + analize);
stringlength = analize.length;
console.log("String will be check: " + analize);
console.log("String length with all symbols: " + stringlength);

let regexpliterals = /[a-zA-Z_]/gi;
let regexpspaces = /[\s]/gi;
let regexpnumerics = /[0-9]/gi;
let regexpspecialsymbols = /[!@#$%^&*().,?;:'"<>|{}/=-]/gi;


literals = analize.match(regexpliterals);
alert ("Amount literals in the string: " + literals.length );
console.log("Literals in the string: " + literals);
console.log("Amount literals in the string: " + literals.length );

spaces = analize.match(regexpspaces);
alert ("Amount spaces in the string: " + spaces.length);
console.log("Spaces in the string: " + spaces);
console.log("Amount spaces in the string: " + spaces.length );


numerics = analize.match(regexpnumerics);
alert ("Amount numerics in the string: " + numerics.length);
console.log("Numerics in the string: " + numerics);
console.log("Amount numeric in the string: " + numerics.length);


specialsymbols = analize.match(regexpspecialsymbols);
alert("Amount special symbols in the string: " + specialsymbols.length);
console.log("Special symbols in the string: " + specialsymbols);
console.log("Amount special symbols in the string: " + specialsymbols.length);

}

countforstring();