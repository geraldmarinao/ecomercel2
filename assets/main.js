// Código muy simple para mostrar alerta cuando se agrega al carrito

const botonesComprar = document.querySelectorAll('.comprar');

botonesComprar.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
});
