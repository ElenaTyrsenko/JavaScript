//A strongness of an even number is the number of times we can successively divide by 2 
//until we reach an odd number starting with an even number n.
//For example, if n = 12, then
//12 / 2 = 6
//6 / 2 = 3
//we divided successively 2 times and we reached 3, so the strongness of 12 is 2.
//If n = 16 then
//16 / 2 = 8
//8 / 2 = 4
//4 / 2 = 2
//2 / 2 = 1
//we divided successively 4 times and we reached 1, so the strongness of 16 is 4

//Task 1
//Given a closed interval [n, m], return the even number that is the strongest in the interval. 
//If multiple solutions exist return the smallest strongest even number.
//Note that programs must run within the alloted server time; a naive solution will probably time out.
//Constraints
//1 <= n < m <= INT_MAX
//Examples
//for the input [1, 2] return 2 (1 has strongness 0, 2 has strongness 1)
//for the input [5, 10] return 8 (5, 7, 9 have strongness 0; 6, 10 have strongness 1; 8 has strongness 3)
//for the input [48, 56] return 48

function getstrongestnumber() {
n = parseInt(prompt("Please, write the number", "8"), 10);
m = parseInt(prompt("Please, write the number", "11"), 10);
INT_MAX = 100;
if (1 <= n && m <= INT_MAX) {
// check this  condition: 1 <= n < m <= INT_MAX;
//for number in interval cycle 
    for (number = n; number <= m; number++) {
    //number = 52;
    remainder = number % 2;
    if (remainder == 0 && number != 1) {
        let i = "";
        result = number / 2;
        remainder = number % 2;
        i = 1;
        if (result == 1 || remainder > 0) {
            alert("before if while" + "number: " + number + ", result: " + result + ", remainder: " + remainder + ", quantity: " + i);
        } //i=1
        resultch = result / 2;
        remainderch = result % 2;
        if (resultch == 1 || remainderch > 0) {
            alert("before if while" + "number: " + number + ", result: " + resultch + ", remainder: " + remainderch + ", quantity: " + i);
        } else if (remainderch == 0) {
            do {
            alert("number: " + number + ", result: " + result + ", remainder: " + remainder + ", quantity: " + i);
            result = result / 2;
            remainder = result % 2;
    //        if (res) {
    //        remainder = number % 2;
            i++; 
            alert("number: " + number + ", result: " + result + ", remainder: " + remainder + ", quantity: " + i);
    //        alert("quantity: " + i);
    //        } else {
    //        }
            } while (result == 1 || remainder > 0);
        }
    //    if (result == 1 || remainder > 0) {
    //        alert("number: " + number + ", result: " + result + ", remainder: " + remainder + ", quantity: " + i);
    //} else if (result != 1 || remainder > 0) {    }
    } else {
//        numbers = 
        alert ("odd; numbers have strongness 0");
        //push to array with strognees 0
    }
    }
 //   maxi = Math.max(value); // for count (strongest)
    
 //   maxi and depends
 //   mini = Math.min() // for number
    } else {
        alert("Issue with interval, check constraints");
    }
}

getstrongestnumber();