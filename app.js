const textInput = document.querySelector("#textarea");
let totalChar = document.querySelector("#total-counter");
let remainChar = document.querySelector("#remaining-counter");

textInput.addEventListener("keyup", () => {
    updateCounter();
})
updateCounter();

function updateCounter() {
    totalChar.innerHTML = textInput.value.length;
    remainChar.innerHTML = textInput.getAttribute("maxLength") - textInput.value.length;
}