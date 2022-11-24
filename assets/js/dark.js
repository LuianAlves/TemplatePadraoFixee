const changeDarkMode = document.querySelector("#dark-mode")
const changeOnda = document.querySelector('[fill]')

function darkModeOnda() {
    changeOnda.setAttribute("fill", "#ffffff")
}

function lightModeOnda() {
    changeOnda.setAttribute("fill", "#1a1a1a")
}

function darkMode() {
    document.body.classList.toggle("dark")
}

function loadDarkMode() {
    const dMode = localStorage.getItem("dark")

    if (dMode) {
        darkMode()
        darkModeOnda()
    } else {
        lightModeOnda()
    }
}

loadDarkMode();

changeDarkMode.addEventListener("change", function() {
    darkMode();
    darkModeOnda();



    if (!document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
        localStorage.setItem("darkOnda", 2);
        localStorage.removeItem("lightOnda");
    } else {
        localStorage.setItem("lightOnda", 3);
        localStorage.removeItem("dark");
        localStorage.removeItem("darkOnda");
    }
})