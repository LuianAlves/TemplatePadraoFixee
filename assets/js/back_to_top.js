// Get the button
let mybutton = document.getElementById("backToTop");
let navbar = document.getElementById("nav_bar1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function btnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}