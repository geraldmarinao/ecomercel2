

const botonesComprar = document.querySelectorAll('.boton');

botonesComprar.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
}); 