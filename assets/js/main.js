// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


function open_submenu(type) {
  if (type === "nav_submenu") {
    let education = document.getElementById("education");
    let navSubmenu = document.getElementById("nav_submenu");
    if (navSubmenu.style.display === "none") {
            education.innerHTML = 'Education <i class="fa fa-caret-right"></i>';
            navSubmenu.style.display = "block";
    }
    else {
            education.innerHTML = 'Education <i class="fa fa-caret-down"></i>';
            navSubmenu.style.display = "none";
    }
  }
  // if (type === "") {

  // }
}