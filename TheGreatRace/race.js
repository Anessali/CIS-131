//Racers
var firefox = document.getElementById("firefox");
var chrome = document.getElementById("chrome");
var ie = document.getElementById("exploder");

//Counts
var count = 0,
    cMove = 0,
    fMove = 0,
    eMove = 0;

var eSpeed = 5;
var lever = true;

function lights(){
    document.getElementById("sun").src = "images/sunGreen.png";
    interval = setInterval(startRace, 100);
}

function startRace(){
    /*  firefox  */
    fMove += Math.random() * 10;
    firefox.style.left = fMove + "px";
    if (fMove > count) {
        count = fMove;
    }
    if (count >= 1550 && fMove >= 1550){
        clearInterval(interval);
        winner(firefox);
    }
    /*  chrome  */
    cMove += Math.random() * 10;
    chrome.style.left = cMove + "px";
    if (cMove > count){
        count = cMove;
    }
    if (count >= 1550 && cMove >= 1550){
        clearInterval(interval);
        winner(chrome);
    }
    /*  exploder  */
    eMove += Math.random() * eSpeed;
    ie.style.left = eMove + "px";
    if (eMove > count){
        count = eMove;
    }
    if (eMove >= 250){
        document.getElementById("ram").innerHTML = '<button class="btn btn-default" id="moreRam" onclick="installRam()">Quick! Download more RAM!</button>';
    }
    if (count >= 1550 && eMove >= 1550){
        clearInterval(interval);
        winner(exploder);
    }
}

function winner(champion){
    var winner = champion.src;
    document.getElementById("theChampion").innerHTML = '<image src="' + winner + '" ' + 'onclick="reset()"' +'>';
}

function reset(){
    document.getElementById("sun").src = "images/sunRed.png";
    document.getElementById("theChampion").innerHTML = "";
    document.getElementById("ram").innerHTML = "";
    exploder.src = "images/exploder.png";
    firefox.style.left = 0;
    chrome.style.left = 0;
    exploder.style.left = 0;
    count = 0;
    cMove = 0;
    fMove = 0;
    eMove = 0;
    eSpeed = 5;
}

function startInterval(){

}

function installRam(){
    exploder.src = "images/edge.png";
    eSpeed = 15;
}
