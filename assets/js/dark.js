const changeDarkMode = document.querySelector("#dark-mode")


function darkMode() {
    document.body.classList.toggle("dark")
}

function loadDarkMode() {
    const dMode = localStorage.getItem("dark")

    if (dMode) {
        darkMode()
    }
}

loadDarkMode();

changeDarkMode.addEventListener("change", function() {
    darkMode();

    localStorage.removeItem("dark");

    if (!document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    }
})