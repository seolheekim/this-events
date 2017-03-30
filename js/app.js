//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/



var showMenu = document.getElementsByClassName("name");

for (var i = 0; i<showMenu.length; i++){
  showMenu[i].addEventListener("click", displayImg);
}

function displayImg() {
  var getImg = this.querySelectorAll(".menu")[0];
    if(getImg.style.display === "none"){
      getImg.style.display = "block";
    }else {
      getImg.style.display = "none";
    }
}