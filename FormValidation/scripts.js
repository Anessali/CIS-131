

//populates the listbox
function popSelect(){
    //var selects = ["Test", "Test2"];
    var selectHolder = document.getElementById("listbox");
    for (var i = 1; i <= 5; i++){
        selectHolder.innerHTML += '<option>' + i + '</option>';
    }
}

//form validation
function submitted(){
    //var name = document.getElementById("name").value;
    //var email = document.getElementById("email").value;
    //var radio = document.getElementById("radioB").value;
    //var listNum = document.getElementById("listbox").value;
}

function validate(){

    if (name.length < 2){
        document.getElementById("name").style.backgroundColor = "red";
    }
}

function start(){
    popSelect();
}

window.addEventListener("load", start, false);
//document.addEventListener("click", submitted, false);
