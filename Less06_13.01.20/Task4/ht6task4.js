//Task4
//Modify names in CCS style with hyphen to names in CamelStyle.
//Examples: font-size в fontSize, background-color в backgroundColor, text-align в textAlign (textalign в textAlign).

function modifyccstocamel() {
    alert("This function modify names in CCS style with hyphen to names in CamelStyle");
    nameccs = prompt("Please, print the name in CCS style", "font-size");
    alert("You printed name in CCS style: " + nameccs);
    console.log("You printed name in CCS style: " + nameccs);
    let regexpsymbols = /[-]/g;
    symbol = nameccs.match(/-/);
    index = symbol.index;
    indexnext = index + 1;
    input = symbol.input;
    length = nameccs.length;
    length1 = index;
    length2 = 1;
    length3 = length - indexnext;
    namemod = nameccs.replace(regexpsymbols, "");
    namecamel = namemod.substr(0, length1) + namemod.substr(index, length2).toUpperCase() + namemod.substr(indexnext, length3);
    console.log("Symbol: " + symbol + ", index: " + index + ", input: " + input);
    console.log("Modified name: " + namemod);
    alert("Name in CamelStyle: " + namecamel);
    console.log("Name in CamelStyle: " + namecamel);
}

modifyccstocamel();