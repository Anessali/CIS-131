var numOfMenuItems = 4; //controls number of items in menu
//arrays
var menuHeaders = ['Bracket Burgers', 'Pastries', 'Coffee'];
var pic = ['pic.png'];
//global counts
//var menuCount = 1; //global count variable for PopulateMenu
var itemCount = 1; //global count variable for PopulateMenuItems

function PopulateMenu(){
    var leMenu;
    do { //populates menu items
      leMenu = ( //adds menu elements into variable
        '<div class="row">' +
          '<div class="col-md-12 centered" id="menu-"><h2>' +
            menuHeaders[menuCount - 1] + //1 subtracted for array
          '</h2></div>' +
        '</div>' +
        '<div class="col-md-4 centered"' + '"id="menuItem-' + itemCount + '">' +
        '</div>'
      );
      document.getElementById("menu-" + menuCount).innerHTML = leMenu;
      PopulateMenuItems();
      menuCount++;
  } while (menuCount <= 3);
}

function PopulateMenuItems(){
    var leMenu;
    do { //populates menu items
      leMenu = ( //adds menu elements into variable
        '<div class="col-md-4 centered" class="menuItem-">' +
          '<div class="row">' +
            '<div class="col-sm-6 col-md-12">' +
              '<div class="thumbnail">' +
                '<img src="images/' + pic[0] + '" alt="...">' +
                '<div class="caption">' +
                  '<h3>Thumbnail label</h3>' +
                  '<p>...</p>' +
                  '<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div'
      );
      var getClass = document.getElementsByClassName("menuItem-" + itemCount);
      getClass[0].innerHTML = leMenu;
      getClass[1].innerHTML = leMenu;
      getClass[2].innerHTML = leMenu;
      //document.getElementsById("menuItem-" + itemCount).innerHTML = leMenu;
      itemCount++;
  } while (itemCount <= numOfMenuItems);
}

function StartScripts(){
    //PopulateMenu();
    PopulateMenuItems();
}

window.addEventListener("load", StartScripts, false)