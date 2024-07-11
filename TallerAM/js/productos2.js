document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito.');
    });
});