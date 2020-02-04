//Task4

//Create list of purchase

let products = [
    {id: 0, name: "Bread", quantity: 3, bought: 1 },
    {id: 1, name: "Butter", quantity: 1, bought: 1 },
    {id: 2, name: "Milk", quantity: 2, bought: 2 },
    {id: 3, name: "Tomatoes", quantity: 1, bought: 2 },
    {id: 4, name: "Cucumbers", quantity: 1, bought: 2 },
    {id: 5, name: "Olives", quantity: 5, bought: 1 },
    {id: 6, name: "Fish", quantity: 1, bought: 1 },
    {id: 7, name: "Meat", quantity: 2, bought: 1 },
    {id: 8, name: "Eggs", quantity: 1, bought: 2 },
    {id: 9, name: "Candies", quantity: 1, bought: 2 },
];

//Print the list on the screen
//Status about goods in the purchase list (bought or not): 1 - bought; 2 - not bought.

function printpurchaselist() {
    alert("Print the purchase list on the screen");
    for (let id in products) {
        if ( products[id].bought === 2 ) {
            alert( "Name: " + products[id].name + ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
            console.log( "Variable id: " + id + ", Id: " + products[id].id + ", Name: " + products[id].name + 
            ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
        }
    }
    for (let id in products) {
        if ( products[id].bought === 1 ) {
            alert( "Name: " + products[id].name + ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
            console.log( "Variable id: " + id + ", Id: " + products[id].id + ", Name: " + products[id].name + 
            ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
        }
    }
}
// printpurchaselist();

//Add product in purchase list (function);
//Status about goods in the purchase list (bought or not): 1 - bought; 2 - not bought.
 
function addproductinpurchaselist() {  
    alert("Add product to the purchase list");
    check = prompt( "Please, write the name of the product", "undefinded" ); //need to print list of possible products
    let checkpr = [];
    let checkpr = products.filter(function(product) {
           return product.name == check;
    });
      console.log(products);
      if ( checkpr.length > 0 && checkpr[0].bought !== 1 ) {
            alert("in list");
            alert("Printred product: " + check);
            console.log(needid = checkpr[0].id);
            console.log("Printred product" + check);
            console.log("Check product id" + checkpr[0].id);
            console.log("Check product name" + checkpr[0].name + checkpr[0].bought);
            console.log("Length" + checkpr.length);
            addquantity = parseInt(prompt( "Please, write the quantity of the product", "1"), 10 );
            products[needid].quantity = (products[needid].quantity + addquantity);
            console.log(products);
            alert("Name: " + products[needid].name + ", Quantity: " + products[needid].quantity + ", Bought: " + products[needid].bought);
      } else if ( checkpr.length = [] ) {
            alert("not in list");
           let elements = products.length;
            console.log("Length:" + elements);
            quantity = parseInt(prompt( "Please, write the quantity of the product", "1"), 10 );
            bought = parseInt(prompt( "Please, write status of the product (bought -> 1 or not bought -> 2)", "2"), 10 ); 
            console.log(elements);
            console.log(check);
            console.log(quantity);
            console.log(bought);
            products.push({id: elements, name: check, quantity: quantity, bought: bought});
            console.log(products);
            let elements = products.length;
            console.log("Length:" + elements);
      } else {
            alert("This case not seen");
    }
}

// addproductinpurchaselist();

//Change the status of the product (bought or not bought) (function); 

function changestatus() {  
    alert("Change product from not bought to bought");
    buyproduct = prompt( "Please, write the name of the product", "undefinded" );
    console.log("Printred product" + buyproduct);
        for (let id in products) {
            if ( products[id].name === buyproduct && products[id].bought === 2 ) {
                alert( "Name: " + products[id].name + ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
                console.log( "Variable id: " + id + ", Id: " + products[id].id + ", Name: " + products[id].name + 
                ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
                products[id].bought = 1;
                alert( "Name: " + products[id].name + ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
                console.log( "Variable id: " + id + ", Id: " + products[id].id + ", Name: " + products[id].name + 
                ", Quantity: " + products[id].quantity + ", Bought: " + products[id].bought);
            } else if (( products[id].name === buyproduct && products[id].bought === 1 ) || ( products[id].name !== buyproduct && products[id].bought === 1 )) {  
                console.log( "Product bought" + products[id].name );
            } else {   
                console.log( "not in list or not bought" );
            }
        }
        console.log( products );
}   

// changestatus();
