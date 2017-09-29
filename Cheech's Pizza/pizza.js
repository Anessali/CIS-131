

/***************************
 * Function populates page *
 ***************************/
function PopulatePage(){
    var pItem = '<option>' + count + '</option>';
    for (var count = 1; count <= 10; count++){
        document.getElementsByClassName("form-control")[0].innerHTML = pItem;
    }
}

function Test(){
    document.getElementsByTagName('h1')[0].innerHTML = 'Hello. This be javascript';
}

function Start(){
    //var test = 'troubleshoot'
    PopulatePage();
    //Test();
}

window.addEventListener("load", Start(), false);