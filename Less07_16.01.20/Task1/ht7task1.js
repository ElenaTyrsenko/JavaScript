//Task 1
//Given a closed interval [n, m], return the even number that is the strongest in the interval. 
//If multiple solutions exist return the smallest strongest even number.
//Examples
//for the input [1, 2] return 2 (1 has strongness 0, 2 has strongness 1)
//for the input [5, 10] return 8 (5, 7, 9 have strongness 0; 6, 10 have strongness 1; 8 has strongness 3)
//for the input [48, 56] return 48

function getstrongestnumber() {
    alert("This function returns the even number that is the strongest in the interval");
    n = parseInt(prompt("Please, write the number", "2"), 10);
    m = parseInt(prompt("Please, write the number", "8"), 10);
    alert("You printed next interval: " + "[" + n + ", " + m + "]");
    console.log("You printed next interval: " + "[" + n + ", " + m + "]");
    INT_MAX = 1000;
        if (1 <= n && m <= INT_MAX) {
            let strongnessarray = [];
            let strongnesszero = [];
                for (number = n; number <= m; number++) {
                    let remainder = "";
                    remainder = number % 2;
                        if (remainder == 0 && number != 1) {
                            let i = "";
                            i = 1;
                            result = number / 2;
                            resultremainder = result % 2;
                                if (result == 1 || resultremainder > 0) {
                                    //alert("number \"" + number + "\" is even; number has strongness " + i);
                                    strongnessarray.push({number: number, strongness: i});
                                } else {
                                    do {
                                        result = result / 2;
                                        resultremainder = result % 2;
                                        i++; 
                                            if (result == 1 || resultremainder > 0) {
                                                strongnessarray.push({number: number, strongness: i});
                                                //alert("number \"" + number + "\" is even; number has strongness " + i);
                                                break;
                                            }
                                    } while (i < 30);
                                }
                        } else {
                            //alert ("number \"" + number + "\" is odd; number has strongness 0");
                            strongnesszero.push({number: number, strongness: 0});
                        }      
                }
            console.log("Odd numbers in the interval: ");
            console.log(strongnesszero);
            strongnessarray.sort((a, b) => a.strongness - b.strongness);
            console.log("Even numbers in the interval: ");
            console.log(strongnessarray);
            quantity = strongnessarray.length;
            index = strongnessarray.length - 1;
            console.log("Quantity even numbers in the interval: " + quantity);
            strongness = strongnessarray[index].strongness;
            number = strongnessarray[index].number;
            let numbers = [];
                for (i in strongnessarray) {
                    if (strongnessarray[i].strongness === strongness) {
                        numbers.push(strongnessarray[i].number); 
                    }
                }
            quantity = numbers.length;
                if (quantity == 1) {
                    console.log("Quantity of the strongest even numbers in the interval: " + quantity);
                    console.log("The strongest even number in the interval [" + n + ", " + m + "]" + " is number: " + numbers[0] + " (strongness: " + strongness + ")");
                    alert("The strongest even number in the interval [" + n + ", " + m + "]" + " is number: " + numbers[0] + " (strongness: " + strongness + ")");
                } else if (quantity >= 2) {
                    console.log("Quantity of the strongest even numbers in the interval: " + quantity + " => ");
                    console.log(numbers);
                    numbers.sort((a, b) => a - b);
                    console.log("The smallest strongest even number in the interval [" + n + ", " + m + "]" + " is number: " + numbers[0] + " (strongness: " + strongness + ")");
                    alert("The smallest strongest even number in the interval [" + n + ", " + m + "]" + " is number: " + numbers[0] + " (strongness: " + strongness + ")");
                }
        } else {
            alert("Issue with interval, check constraints");
        }
}

getstrongestnumber();