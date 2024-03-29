"use stict"

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();
var formValidity = true;

function setUpDays(){
  var dates = document.getElementById("delivDy").getElementsByTagName('option');
  twentyNine.appendChild(dates[28].cloneNode(true));
  thirty.appendChild(dates[28].cloneNode(true));
  thirty.appendChild(dates[29].cloneNode(true));
  thirtyOne.appendChild(dates[28].cloneNode(true));
  thirtyOne.appendChild(dates[29].cloneNode(true));
  thirtyOne.appendChild(dates[30].cloneNode(true));


}

function updateDays(){
  var deliveryDay = document.getElementById("delivDy");
  var dates = deliveryDay.getElementsByTagName("option");
  var deliveryMonth = document.getElementById("delivMo");
  var deliveryYear = document.getElementById("delivYr");
  var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;
  while (dates[28]){
    deliveryDay.removeChild(dates[28]);
  }

  if (deliveryYear.selectedIndex === -1){
    deliveryYear.selectedIndex = 0;
  }

  if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2018"){
    deliveryDay.appendChild(twentyNine.cloneNode(true));
  } else if (selectedMonth === "4" || selectedMonth === "11" || selectedMonth === "6" || selectedMonth === "9"){
    deliveryDay.appendChild(thirty.cloneNode(true));
  } else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth == "5" ||
        selectedMonth == "7" || selectedMonth === "10" || selectedMonth === "12"){
          deliveryDay.appendChild(thirtyOne.cloneNode(true));
        }
}

function removeSelectDefaults(){
  var emptyBoxes = document.getElementsByTagName("select");
  for (var i = 0; i < emptyBoxes.length; i++){
    emptyBoxes[i].selectedIndex = -1;
  }
}
function autocheckCustom(){
  var messageBox = document.getElementById("customText");
  if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder){
    document.getElementById("custom").checked = "checked";
  }

}
function copyBillingAddress(){
  var billingInputElements = document.querySelectorAll("#billingAddress input");
  var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
  if (document.getElementById('sameAddr').checked){
    for(var i = 0; i < billingInputElements.length; i++){
      deliveryInputElements[i + 1].value = billingInputElements[i].value;
    }
    document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
  } else {
    for (var i = 0; i < billingInputElements.length; i ++){
      deliveryInputElements[i + 1].value = "";
    }
  }
//  document.querySelector("#deliveryAddress select").selectedIndex = =1;
}

function validateForm(evt){
  evt.preventDefault();
  if (formValidity === true){
    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();
  } else {
    document.getElementById("errorText").innerHTML = "Please fix the indicated problems";
    document.getElementById("errorText").style.display = "block";
    scroll(0,0);
  }
}

function createEventListeners(){
  var deliveryMonth= document.getElementById("delivMo");
  deliveryMonth.addEventListener("change", updateDays, false);
  var deliveryYear = document.getElementById("delivYr");
  deliveryYear.addEventListener("change", updateDays, false);
  var messageBox = document.getElementById("customText");
  messageBox.addEventListener("blur", autocheckCustom, false);
  var same = document.getElementById("sameAddr");
  same.addEventListener("click", copyBillingAddress, false);

  var form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", validateForm, false);


}
function setUpPage(){
  removeSelectDefaults();
  setUpDays();
  createEventListeners();
}

window.addEventListener("load", setUpPage, false);
