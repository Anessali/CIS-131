//Megan's Function
function className(){
	var pic = document.getElementsByClassName("bork");
	pic[0].innerHTML = "<img class='rounded-circle' src='wink.jpg' width='240' height='240'>";
}

//David's function

function tagName(){
	var phone = document.getElementsByTagName("p");
	phone[0].innerHTML = "<img class='rounded-circle' src='phone.jpg' alt='Corgi on phone' width='240' height='240'>";

}

//Tj's function

function attributeName(){
	//function changes an img src in the HTML
	document.getElementById("corg3").src="tongue.jpg";
}

//Nick's Function
function selectorName(){
	//Change background image on button press
	document.querySelector("body").style.backgroundImage = "url(spacebg.png)";
}
window.addEventListener("onclick", selectorName, false)

function start(){
	className();
	tagName();
	attributeName();
}

window.addEventListener("load", start, false);
