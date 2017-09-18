var pictures = ['<img src="images/cat.jpg">', '<img src="images/color.jpg">', '<img src="images/city.jpg">', '<img src="images/sea.jpg">'];

function DisplayImage() {
    var count = 0;
    var swap;
    var imgLoc;
    imgLoc = document.getElementById("displayPic");
    imgLoc.innerHTML = pictures[count];

    do { //generates page icons
      swap = document.getElementById("icon-" + count);
      swap.innerHTML = pictures[count];
      count++;
    } while(count <= 3);
}

function PicClick() {

}

function StartScripts(){
    DisplayImage();
    PicClick();
}

window.addEventListener("load", StartScripts, false)
