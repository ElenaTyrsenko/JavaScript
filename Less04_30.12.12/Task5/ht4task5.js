//Task5

//Create array with goods

let goods = [
    {id: 0, name: "Bread", quantity: 3, price: 20},
    {id: 1, name: "Butter", quantity: 1, price: 45},
    {id: 2, name: "Milk", quantity: 2, price: 40},
    {id: 3, name: "Tomatoes", quantity: 1, price: 40},
    {id: 4, name: "Cucumbers", quantity: 1, price: 350},
    {id: 5, name: "Olives", quantity: 5, price: 40},
    {id: 6, name: "Fish", quantity: 1, price: 100},
    {id: 7, name: "Meat", quantity: 2, price: 150},
    {id: 8, name: "Eggs", quantity: 1, price: 40},
    {id: 9, name: "Candies", quantity: 2, price: 300}
];

//Print the check on the screen (function)

function checkonscreen() {
    alert("Print the check on the screen");
    for (let id in goods) {
        alert( "Name: " + goods[id].name + ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);
        console.log( "Variable id: " + id + ", Id: " + goods[id].id + ", Name: " + goods[id].name + 
        ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);   // as list           
    }
}

// checkonscreen();

//Print total sum in the check on the screen (function)

function totalsum() {
    alert("Print total sum in the check");
    let pricesforgoods = []; 
    let quantityforgoods = []; 
    let sumforeachpoint = [];
    for (let id in goods) {
        console.log( "Variable id: " + id + ", Id: " + goods[id].id + ", Name: " + goods[id].name + 
        ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);   
        console.log("Price will be added to array: " + goods[id].price);
        console.log(pricesforgoods.push(goods[id].price));  
        console.log("Quantity will be added to array: " + goods[id].quantity);
        console.log(quantityforgoods.push(goods[id].quantity)); 
        console.log(sumforeachpoint.push(goods[id].price * goods[id].quantity));    
    }
    console.log("Price for each point in the check: " + pricesforgoods);
    console.log("Quantity for each point in the check: " + quantityforgoods);
    console.log("Sum for each point in the check: " + sumforeachpoint);
    // alert("Price: " + pricesforgoods);
    // alert("Quantity: " + quantityforgoods);
    // alert("Sum for each point in the check: " + sumforeachpoint);
    totalsum = sumforeachpoint.reduce(function (total, amount) {  
        return total + amount
    });
    console.log("Total sum in the check: " + totalsum);
    alert("Total sum in the check: " + totalsum); 
}

// totalsum();


//Print the most expensive goods in the check (function)

function maxpointinthecheck() {
    alert("Print the most expensive point (price)");
    for (let id in goods) {
        goods.sort(function(a, b) {
            return b.price-a.price;
        });
        if ( id == 0 ) {
        alert( "Name: " + goods[id].name + ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);
        console.log( "Variable id: " + id + ", Id: " + goods[id].id + ", Name: " + goods[id].name + 
        ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);   
        }     
    }
// alert("Print the most expensive point (price * quantity)");
    for (let id in goods) {
        goods.sort(function(a, b) {
            return (b.price * b.quantity)-(a.price * a.quantity);
        });
        if ( id == 0 ) {
        alert( "Name: " + goods[id].name + ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);
        console.log( "Variable id: " + id + ", Id: " + goods[id].id + ", Name: " + goods[id].name + 
        ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);
        }    
    }
}

// maxpointinthecheck();

//Print the average price in the check (function)

function averagepriceincheck() {
    alert("Print average price in the check");
    let pricesforgoods = []; 
    let quantityforgoods = []; 
    let sumforeachpoint = [];
    for (let id in goods) {
        console.log( "Variable id: " + id + ", Id: " + goods[id].id + ", Name: " + goods[id].name + 
        ", Quantity: " + goods[id].quantity + ", Price: " + goods[id].price);   
        console.log("Price will be added to array: " + goods[id].price);
        console.log(pricesforgoods.push(goods[id].price));  
        console.log("Quantity will be added to array: " + goods[id].quantity);
        console.log(quantityforgoods.push(goods[id].quantity)); 
        console.log(sumforeachpoint.push(goods[id].price * goods[id].quantity));    
    }
    console.log("Price for each point in the check: " + pricesforgoods);
    console.log("Quantity for each point in the check: " + quantityforgoods);
    console.log("Sum for each point in the check: " + sumforeachpoint);
    // alert("Price: " + pricesforgoods); 
    // alert("Quantity: " + quantityforgoods);  
    totalsum = sumforeachpoint.reduce(function (total, amount) {  
        return total + amount
    });
    console.log("Total sum in the check: " + totalsum);
    // alert("Total sum in the check: " + totalsum); 
    totalquantity = quantityforgoods.reduce(function (total, amount) {  
        return total + amount
    });
    console.log("Total quantity in the check: " + totalquantity);
    // alert("Total quantity in the check: " + totalquantity); 
    let averageprice = totalsum / totalquantity ;
    console.log("Average price for one goods in the check: " + averageprice);
    alert("Average price for one goods in the check: " + +averageprice.toFixed(2));
}

// averagepriceincheck();