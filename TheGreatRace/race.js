//Racers
var chrome = document.getElementById("chrome");
var firefox = document.getElementById("firefox");
var ie = document.getElementById("exploder");
var champion;

//Counts
var count = 0,
    cMove = 0,
    fMove = 0,
    eMove = 0;

var interval;
var eSpeed = 5;

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
        champion = firefox;
    }
    if (count >= 1550){
        clearInterval(interval);
        winner();
    }
    /*  chrome  */
    cMove += Math.random() * 10;
    chrome.style.left = cMove + "px";
    if (cMove > count){
        count = cMove;
        champion = chrome;
    }
    if (count >= 1550){
        clearInterval(interval);
        winner();
    }
    /*  exploder  */
    eMove += Math.random() * eSpeed;
    ie.style.left = eMove + "px";
    if (eMove > count){
        count = eMove;
        champion = exploder;
    }
    if (eMove >= 100){
        document.getElementById("ram").innerHTML = '<button class="btn btn-default" id="moreRam" onclick="installRam()">Quick! Install more RAM!</button>';
    }
    if (count >= 1550){
        clearInterval(interval);
        winner();
    }
}

function winner(){

}

function installRam(){
    document.getElementById("exploder").src = "images/edge.png";
    eSpeed = 15;
}
