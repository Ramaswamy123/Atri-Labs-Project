let navbarElement = document.getElementById("navbar-container")
let optionEl = document.getElementById("option");
let cancelEl = document.getElementById("cancel")
let optionContainerEl = document.getElementById("optionContainer")

optionEl.addEventListener("click", function() {
    // cancelEl.classList.toggle("cancel-icon")
    optionEl.classList.toggle("option-icon")
    optionContainerEl.classList.toggle("options-container")
})
cancelEl.addEventListener("click", function() {
    cancelEl.classList.toggle("cancel-icon")
    optionEl.classList.toggle("option-icon")
    optionContainerEl.classList.toggle("options-container")
})