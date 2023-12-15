
function show(anything, dropdown) {
    dropdown.closest('.dropdown').querySelector('.textBox').value = anything;
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function (dropdown) {
    dropdown.onclick = function () {
        dropdown.classList.toggle('active');
    }
});

// Función para deshabilitar la escritura en los dropdowns
function disableInput(e) {
    e.preventDefault();
}

// Aplicar el evento a los inputs de los dropdowns
var dropdownInputs = document.querySelectorAll('.dropdown .textBox');
dropdownInputs.forEach(function (input) {
    input.addEventListener('keydown', disableInput);
});
