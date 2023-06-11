

function desplegarTexto (descripcion) {

    var parrafoImagen = document.getElementById(descripcion)

    if (parrafoImagen.style.display == 'none') {
        parrafoImagen.style.display = 'block'
    } else {
        parrafoImagen.style.display = 'none'
    }
}