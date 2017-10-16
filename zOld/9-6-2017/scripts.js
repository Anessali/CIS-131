
var myName = "<h2>Tj</h2>";
var catImg = "cat2.jpg";
var catSwap = 0;

function toggleImg(){
    var newSrc;
    if (catSwap == 1){
        newSrc = "cat1.jpg";
        catSwap = 0;
    } else {
      newSrc = "cat2.jpg";
      catSwap = 1;
    }
    document.getElementById('cat').src = newSrc;
}

function changeImage() {
    document.getElementById('cat').src = catImg;
}
function changeImageWhite(catImage) {
    document.getElementById('cat').src = catImage;
}
