function desplegar(num) {
    var html = "";
    for (var i = 0; i < num; i++) {
        let a = 0;

    for (let divisor = 2; divisor <= 6; divisor++) {
        if (i % divisor === 0) {
            a = divisor;
            break;
        }
    }

    // Si no se encuentra ningún divisor, se asigna 1 (valor predeterminado)
    if (a === 0) {
        a = 1;
    }

        html += '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">';
        html += '    <div class="card">';
        html += '    <a href="pagina_especifica.html?id=' + i + '&a=' + a + '" class="img-link">';
        html += '            <figure>';
        html += '                <img src="img/i'+a+'.jpg" class="img-fluid" alt="Diseño Gráfico">';
        html += '            </figure>';
        html += '            <div class="contenido-card">';
        html += '                <h3>disco'+(i+1)+'</h3>';
        html += '                 <p><i class="fa fa-calendar" aria-hidden="true"></i> 10 de diciembre 2023</p>';
        html += '            </div>';
        html += '        </a>';
        html += '    </div>';
        html += '</div>';
    }
    document.getElementById('desplegar').innerHTML = html;
}

    document.addEventListener('DOMContentLoaded', function () {
        desplegar(9);
    }, false);