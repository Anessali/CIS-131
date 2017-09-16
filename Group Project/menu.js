var menuHeaders = ['Bracket Burgers', 'Pastries', 'Coffee'];

var itemCount = 1; //global count variable for PopulateMenuItems

function PopulateMenu(){
    var count = 1;
    var leMenu;
    do { //populates menu items
      leMenu = ( //adds menu elements into variable
        '<div class="row">' +
          '<div class="col-md-12 centered" id="menu-"><h2>' +
            //'Bracket Burgers' +
            menuHeaders[count - 1] + //1 subtracted for array
          '</h2></div>' + 
        '</div>' +
        '<div class="col-md-4 centered" id="menuItem-"' + itemCount + '>' +
        '</div>'
      );
      document.getElementById("menu-" + count).innerHTML = leMenu;
      PopulateMenuItems();
      count++;
  } while (count <= 3);
}

function PopulateMenuItems(){
    var leMenu;
    do { //populates menu items
      leMenu = ( //adds menu elements into variable
          '<div class="row">' +
            '<div class="col-sm-6 col-md-12">' +
              '<div class="thumbnail">' +
                '<img src="images/pic.png" alt="...">' +
                '<div class="caption">' +
                  '<h3>Thumbnail label</h3>' +
                  '<p>...</p>' +
                  '<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>'
      );
      document.getElementById("menuItem-" + itemCount).innerHTML = leMenu;
      count++;
  } while (count <= 6);
}

function StartScripts(){
    PopulateMenu();
}

window.addEventListener("load", StartScripts, false)
