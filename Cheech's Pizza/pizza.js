/* jshint browser: true */

/***************************
 * Edit these variables to *
 * control page elements   *
 ***************************/
var numInList = 10; //controls number of choices in 'How many?' Select
var pizzaType = ['Cheese'];

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
}

function Start(){
    PopulatePage();
}

window.addEventListener("load", Start(), false);