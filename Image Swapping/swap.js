var pictures = ['<img src="images/cat.jpg" onclick="IcoClick(this.id)">', '<img src="images/color.jpg" onclick="IcoClick(this.id)">',
'<img src="images/city.jpg" onclick="IcoClick(this.id)">', '<img src="images/sea.jpg" onclick="IcoClick(this.id)">'];

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

function IcoClick(clickImg) {
    alert(clickImg);
}

function StartScripts(){
    DisplayImage();
}

window.addEventListener("load", StartScripts, false);
document.addEventListener("click", IcoClick(), false);
