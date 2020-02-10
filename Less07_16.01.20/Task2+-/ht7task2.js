//Task2

codes = [
    {symbol: "A", code: "·−" },
    {symbol: "B", code: "−···" },
    {symbol: "C", code: "−·−·" },
    {symbol: "D", code: "−··" },
    {symbol: "E", code: "·" },
    {symbol: "F", code: "··−·" },
    {symbol: "G", code: "−−·" },
    {symbol: "H", code: "····" },
    {symbol: "I", code: "··" },
    {symbol: "K", code: "−·−" },
    {symbol: "L", code: "·−··" },
    {symbol: "M", code: "−−" },
    {symbol: "N", code: "−·" },
    {symbol: "O", code: "−−−" },
    {symbol: "P", code: "·−−·" },
    {symbol: "Q", code: "−−·−" },
    {symbol: "R", code: "·−·" },
    {symbol: "S", code: "···" },
    {symbol: "T", code: "−" },
    {symbol: "U", code: "··−" },
    {symbol: "V", code: "···−" },
    {symbol: "W", code: "·−−" },
    {symbol: "X", code: "−··−" },
    {symbol: "Y", code: "−·−−" },
    {symbol: "Z", code: "−−··" },
    {symbol: "J", code: "·−−−" },
    {symbol: "1", code: "·−−−−" },
    {symbol: "2", code: "··−−−" },
    {symbol: "3", code: "···−−" },
    {symbol: "4", code: "····−" },
    {symbol: "5", code: "·····" },
    {symbol: "6", code: "−····" },
    {symbol: "7", code: "−−···" },
    {symbol: "8", code: "−−−···" },
    {symbol: "9", code: "−−−−·" },
    {symbol: "0", code: "−−−−−" },
    {symbol: ".", code: "······" },
    {symbol: ",", code: "·−·−·−" },
    {symbol: ":", code: "−−−···" },
    {symbol: ";", code: "−·−·−·" },
    {symbol: "−", code: "−····−" }

];

//decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

function decodeMorse() {
    code = prompt("Please, print code", "···· · −·−−");
    alert("You printed: " + code);
    code = code.split(" ");
    alert("printed : " + code[0]);
    alert("printed : " + code[1]);
    alert("printed : " + code[2]);
    for (let i in codes) {
        if (codes[i].code === code[0]) {
            alert("codes: " + codes[i].code + " => " + codes[i].symbol);
        } else if (codes[i].code === code[1]) {
            alert("codes: " + codes[i].code + " => " + codes[i].symbol);
        } else if (codes[i].code === code[2]) {
            alert("codes: " + codes[i].code + " => " + codes[i].symbol);
        }
    }   
}

decodeMorse();