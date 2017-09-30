/* jshint browser: true */

/***************************
 * Edit these variables to *
 * control page elements   *
 ***************************/
var numInList = 10; //controls number of choices in 'How many?' Select
var pizzaType = ['Cheese', 'Pepperoni', 'Bananas', 'Ananas Comosus', 'Meat'];

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

document.addEventListener("click", function(){
    
    var formOutput;
    formOutput = document.getElementById('formOut');
    formOutput.innerHTML = document.getElementById('orderForm');
//    var formInfo = document.getElementById('orderForm');
//    formInfo.innerHTML = document.getElementById('formOut');
});

function SubmitForm() {
    var formOutput;
    formOutput = document.getElementById('formOut');
    formOutput.innerHTML = document.getElementById('orderForm');
}

function Start(){
    PopulatePage();
}

window.addEventListener("load", Start(), false);
