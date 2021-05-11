var toggle = document.querySelector(".toggle")
var navigation = document.querySelector(".navigation")

toggle.onclick = function () {
    toggle.classList.toggle("active")
    navigation.classList.toggle("active")
}
