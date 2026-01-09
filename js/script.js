document.querySelectorAll('.carrusel').forEach(carrusel => {
    const contenedor = carrusel.querySelector('.contenidoProductos');
    const btnLeft = carrusel.querySelector('.btn-left');
    const btnRight = carrusel.querySelector('.btn-right');

    btnRight.addEventListener('click', () => {
        contenedor.scrollLeft += 300;
    });

    btnLeft.addEventListener('click', () => {
        contenedor.scrollLeft -= 300;
    });
});
