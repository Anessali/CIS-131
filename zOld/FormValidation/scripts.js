
//populates the listbox
function popSelect(){
    //var selects = ["Test", "Test2"];
    var selectHolder = document.getElementById("listbox");
    for (var i = 1; i <= 5; i++){
        selectHolder.innerHTML += '<option>' + i + '</option>';
    }
}

//form validation
function validate(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var em = /@/.test(email);
    var phone = document.getElementById("phone").value;
    var ph = /^\d{3}-\d{3}-\d{4}$/.test(phone);
    var radio = document.getElementById("radioB").value;
    var listNum = document.getElementById("listbox").value;
    var error = document.getElementsByClassName("error");
    var namebool = false, emailBool = false, phoneBool = false;
    //Name
    if (name.length < 6){
        document.getElementById("name").style.backgroundColor = "#ffcccc";
        error[0].innerHTML = "You must enter a valid name";
    } else {
        document.getElementById("name").style.backgroundColor = "";
        error[0].innerHTML = "";
        nameBool = true;
    }
    //Email
    if (em == false){
        document.getElementById("email").style.backgroundColor = "#ffcccc";
        error[1].innerHTML = "Invalid email address";
    } else {
        document.getElementById("email").style.backgroundColor = "";
        error[1].innerHTML = "";
        emailBool = true;
    }
    //Phone Number
    if (ph == false){
        document.getElementById("phone").style.backgroundColor = "#ffcccc";
        error[2].innerHTML = "Invalid phone number";
    } else {
        document.getElementById("phone").style.backgroundColor = "";
        error[2].innerHTML = "";
        phoneBool = true;
    }
    if (nameBool && emailBool && phoneBool){
        document.getElementById('vetForm').submit();
        window.location.href = "thankyou.html";
    }
}

function checkRadio(){
    var radio = document.getElementsByName('animal');
    radio[0].checked = true;
}

function start(){
    popSelect();
    checkRadio();
}

window.addEventListener("load", start, false);
