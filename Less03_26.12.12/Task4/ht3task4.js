//Task 4
//Your task is to sort a given string. 
//Each word in the string will contain a single number. 
//This number is the position the word should have in the result.

//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

//If the input string is empty, return an empty string. 
//The words in the input String will only contain valid consecutive numbers.

//Examples
//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
function getrightorder() {
    string = prompt("Print string", "\"is2 Thi1s T4est 3a\"");
    alert("You printed next string: " + string);
    string = string.replace(/\"*/g, "");
    digits = string.match(/\d+/g);
    quantity = digits.length;
    console.log("digits: " + digits);
    values = string.split(' ');
    console.log("value: " + values);
    let arr = [];
    let str = "";
    for (let i = 0; i < quantity; i++) {
        arr.push({id: digits[i], value: values[i]});
    }
    console.log(arr);
    arr.sort((a,b) => a.id - b.id);
    console.log("Array was sorted");
    for (let i = 0; i < quantity; i++) {
        value = arr[i].value;
//      console.log(arr[i].id + " " + arr[i].value);
        str = str.concat(value, " "); 
    }
    console.log("result string: " + str);
    str = "\"" + str.replace(/\s$/g, "") + "\"";
    console.log("result: " + str);
    alert("result: " + str);
    alert("result: " + str.replace(/\d+/g, ""));
}

getrightorder();