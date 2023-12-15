function desplegar(num) {
    var html = "";
    for (var i = 0; i < num; i++) {
        let a = 0;
        if (i % 2 == 0) {
            a = 2;
        } else if (i % 3 == 0) {
            a = 3;
        } else {
            a = 1;
        }

        // Estructura de la columna dentro de un enlace <a>
        html += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">';
        html += '    <a href="pagina_especifica.html?id=' + i + '&a=' + a + '" class="img-link">';
        html += '        <img src="img/i' + a + '.jpg" alt="aña" class="img-fluid">';
        html += '        <br>';
        html += '        <h3>soy la imagen ' + (i + 1) + '</h3>';
        html += '    </a>';
        html += '</div>';
    }
    document.getElementById('desplegar').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
    desplegar(20);
}, false);
