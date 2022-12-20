const navigation = document.querySelector('.navigation');
const menuConfig = document.querySelector('.menu-config');

document.querySelector('.toggle-men').onclick = function() {
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}

document.querySelector('.icon-config').onclick = function() {
    this.classList.toggle('active')
    menuConfig.classList.toggle('active')
}