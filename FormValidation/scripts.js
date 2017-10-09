

//populates the listbox
function popSelect(){
    var selects = ["Test", "Test2"];
    var selectHolder = document.getElementById("listbox");
    for (var i = 0; i < selects.length; i++){
        selectHolder.innerHTML += '<option value="' + selects[i] + '" id="item-' + i + '">' + selects[i] + '</option>';
    }
}

function start(){
    popSelect();
}

window.addEventListener("load", start, false);