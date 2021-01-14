
//slides
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
} 


//showmenu
/*document.getElementById("menu1").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myDropdown3").classList.toggle("show");
}*/



window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").className = "menu-content";
    } else {
        document.getElementById("menu").className = "";
    }
}