let mybutton = document.getElementById("backToTop");
let navLeft = document.getElementsByClassName("navbar")[0];
let navRight = document.getElementsByClassName("navbar")[1];
let toggle = document.getElementsByClassName("toggle-men")[0];
let nav = document.getElementsByClassName("navigation")[0];


window.onscroll = function() { scroll() };

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navLeft.style.display = "none";
        navRight.style.display = "none";
        mybutton.style.display = "block";
        if (window.innerWidth >= 992) {
            toggle.style.display = "block";
            nav.style.display = "block";
        }
    } else {
        navLeft.style.display = "block";
        navRight.style.display = "block";
        mybutton.style.display = "none";
        if (window.innerWidth <= 992) {
            toggle.style.display = "block";
            nav.style.display = "block";
        } else {
            toggle.style.display = "none";
            nav.style.display = "none";
        }
    }
}

function btnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}