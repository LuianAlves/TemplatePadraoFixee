
setTimeout(() => {
    document.getElementById("section-splash").classList.toggle('fade')
    document.getElementById("splash").classList.toggle('fade')
    document.getElementById("main").classList.toggle('fade')
    document.getElementById("home").classList.toggle('fade')
}, 7500);

setTimeout(() => {
    AOS.init();
}, 7500);

