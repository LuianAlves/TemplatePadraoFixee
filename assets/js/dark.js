const changeDarkMode = document.querySelector("#dark-mode")

changeDarkMode.addEventListener("change", function() {
    document.body.classList.toggle("dark")
})