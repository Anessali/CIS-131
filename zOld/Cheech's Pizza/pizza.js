/* jshint browser: true */

/***************************
 * Edit these variables to *
 * control page elements   *
 ***************************/
var numInList = 10; //controls number of choices in 'How many?' Select
var pizzaType = ['Cheese', 'Pepperoni', 'Veggie Lovers', 'Ananas', 'Meat lovers'];

/***************************
 * Function populates page *
 ***************************/
function PopulatePage() {

    var idItem;
    var listItem;
    /*   loop populates the 'How many?' Select   */
    for (var count = 1; count <= numInList; count++){
        //adds option elements with item ID
        idItem = '<option id="item-' + count + '"></option>';
        document.getElementById('numList').innerHTML += idItem;
        //populates option elements with numbers
        listItem = document.getElementById('item-' + count);
        listItem.innerHTML += count;
    }
    /*  Loop populates pizza types  */
    for (count = 0; count < pizzaType.length; count++){
        //populates option elements for pizza type
        idItem = '<option id="pizza-' + count + '"></option>';
        document.getElementById('pizzaList').innerHTML += idItem;
        //adds items from pizzaType array
        listItem = document.getElementById('pizza-' + count);
        listItem.innerHTML += pizzaType[count];
    }
}

document.addEventListener("submit", function(){
    //Name
    var name = '<p>Name: ' + document.getElementById('name').value + '</p>';
    //Phone Number
    var num ='<p>Phone Number: ' + document.getElementById('number').value + '</p>';
    //toppings
    var toppings = document.getElementById('pizzaList').value;
    //'How many?' Select
    var list = document.getElementById('numList').value;
    //calculates prices
    var price = 7.99 * list;
    var tax = 0.076;
    var roundedPrice = Math.round(price);
    var cost = '<p>Your order is $' + price + ', with ' + (100 * tax) + '% tax.</p>';
    price = price * tax + price;
    price = Math.round(price * 100) / 100;
    var total = '<p>Your total comes to $' + price + '</p>';
    var numTop = 'You ordered ' + list + ' ' + toppings + ' pizzas.';
    //Final output
    document.getElementById("formOutput").innerHTML = name + num + numTop + cost + total + "<p>Thank you for choosing Cheech's Pizza. Have a wonderful day!</p>";
}, false);

function Start(){
    PopulatePage();
}

window.addEventListener("load", Start(), false);
