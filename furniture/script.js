

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");
const centerlinks = document.getElementById("center-links");


menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");
    centerlinks.classList.toggle("active");

 if (navLinks.classList.contains("active")) 
 if(centerlinks.classList.contains("active")) 

         {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});




