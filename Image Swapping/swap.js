var pictures = ['<img src="images/cat.jpg" onclick="ClickOne()">', '<img src="images/color.jpg" onclick="ClickTwo()">',
'<img src="images/city.jpg" onclick="ClickThree()">', '<img src="images/sea.jpg" onclick="ClickFour()">'];

function DisplayImage() {
    var count = 0;
    var imgLoc;
    var swap; //icon population variable
    imgLoc = document.getElementById("displayPic");
    imgLoc.innerHTML = pictures[count];
    do { //generates page icons
      swap = document.getElementById("icon-" + count);
      swap.innerHTML = pictures[count];
      count++;
    } while(count <= 3);
}
/****************************************
*                Timer                  *
****************************************/
//variables
var timeCount = 0;
timer = setInterval(ImageSlider, 3000);
//function
function ImageSlider(){
    var imgSlide = document.getElementById("displayPic");
    imgSlide.innerHTML = pictures[timeCount];
    timeCount++;
    if (timeCount >= 4){
        timeCount = 0;
    }
}

/****************************************
*             Swaps Image               *
****************************************/
function ClickOne() {
    var icoImg = document.getElementById("displayPic");
    icoImg.innerHTML = pictures[0];
}
function ClickTwo() {
    var icoImg = document.getElementById("displayPic");
    icoImg.innerHTML = pictures[1];
}
function ClickThree() {
    var icoImg = document.getElementById("displayPic");
    icoImg.innerHTML = pictures[2];
}
function ClickFour() {
    var icoImg = document.getElementById("displayPic");
    icoImg.innerHTML = pictures[3];
}

//Starts script
function StartScripts(){
    DisplayImage();
}
window.addEventListener("load", StartScripts, false);