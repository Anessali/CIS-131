var pictures = ['<img src="images/cat.jpg">', '<img src="images/color.jpg">', '<img src="images/city.jpg">', '<img src="images/sea.jpg">'];

function DisplayImage() {
    var count = 0;
    var image = "";
    var imgLoc;
    imgLoc = document.getElementById("displayPic");
    imgLoc.innerHTML = pictures[count];
}

function AddIcons(){
    var count = 0;
}

function StartScripts(){
    DisplayImage();
    AddIcons();
}

window.addEventListener("load", StartScripts, false)