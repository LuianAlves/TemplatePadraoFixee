const navigation = document.querySelector('.navigation');

document.querySelector('.toggle-men').onclick = function() {
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}
