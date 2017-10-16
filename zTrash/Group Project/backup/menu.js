function PopulateMenu(){
    var count = 1
    count = 1;
    var menuWriter = document.getElementById("menuItem");
    var leMenu = ( //adds menu elements into leMenu variable
      '<div class="row">' +
        '<div class="col-md-12 centered" id="menu-"><h2>Bracket Burgers</h2></div>' +
      '</div>' +
      '<div class="col-md-4 centered" id="menuItem-">' +
      '</div>'
    );
    do { //populates menu items
    document.getElementById("menuItem-" + count).innerHTML = leMenu;
    count++;
    } while (count <= 6);
}

function PopulateMenuItems(){
    var count = 1
    count = 1;
    var menuWriter = document.getElementById("menuItem");
    var leMenu = ( //adds menu elements into leMenu variable
      '<div class="col-md-4 centered" id="menuItem-">' +
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
        '</div>' +
      '</div>'
    );
    do { //populates menu items
    document.getElementById("menuItem-" + count).innerHTML = leMenu;
    count++;
  } while (count <= 6);
}

function StartScripts(){
    PopulateMenuItems();
}

window.addEventListener("load", StartScripts, false)
