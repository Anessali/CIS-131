var pictures = ['<img id="0" src="images/cat.jpg" onclick="Click(this.id)">', '<img id="1" src="images/color.jpg" onclick="Click(this.id)">',
'<img id="2" src="images/city.jpg" onclick="Click(this.id)">', '<img id="3" src="images/sea.jpg" onclick="Click(this.id)">'];
//parallel arrays - possibly a better solution to this
//

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
    } while(count <= 3); //array.length to possibly improve this
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
function Click(arrayId){
    var icoImg = document.getElementById("displayPic");
    icoImg.innerHTML = pictures[arrayId];
}

//Starts script
function StartScripts(){
    DisplayImage();
}
window.addEventListener("load", StartScripts, false);
