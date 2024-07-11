document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".add-to-cart-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Ha sido agregado al carrito");
        });
    });
});