function textovalido(texto) {
    if (texto == null || texto == "" || texto.length < 1) {
        return false;
    } else {
        return true;
    }
}

function showerror() {
    var html = '<div class="alert-danger text-center" role="alert"> escribe algo en tus recordatorios </div>';
    document.getElementById("error").innerHTML = html;
}

function limpiar() {
    document.getElementById("error").innerHTML = "";
}

function crear_recor() {
    var texto = document.getElementById("texto").value;
    if (!textovalido(texto)) {
        showerror();
        return;
    }
    limpiar();

    var referencia = new Date();
    var id = referencia.getTime();
    var fecha = referencia.toLocaleDateString();

    var recordatorio = { "id": id, "fecha": fecha, "texto": texto };
    comprobarrecor(recordatorio);
}

function comprobarrecor(recordatorio) {
    var texto = localStorage.getItem("recordatorios");
    if (texto == null || texto == "" || texto.length < 1) {
        var recor = [];
        recor.push(recordatorio);
        guardarrecor(recor);
    } else {
        var recor2 = JSON.parse(texto);
        recor2.push(recordatorio);
        guardarrecor(recor2);
    }
}

function guardarrecor(recordatorios) {
    var recorjson = JSON.stringify(recordatorios);
    localStorage.setItem("recordatorios", recorjson);
}

function show() {
    var html = "";
    var records = localStorage.getItem("recordatorios");
    if (records == null || records == "" || records.length < 1) {
        html = "todavía no hay recordatorio";
        document.getElementById("recordatorios").innerHTML = html;
    } else {
        var recorjson = JSON.parse(records);
        for (var i = 0; i < recorjson.length; i++) {
            html += formatear(recorjson[i]);
        }

        document.getElementById("recordatorios").innerHTML = html;
    }
}

function formatear(recordatorio) {
    var html = '';
    html += '<div class="recordatorio" id="' + recordatorio.id + '">';
    html += '  <div class="row">';
    html += '    <div class="col-6 text-left">';
    html += '      <small><i class="fa fa-calendar" aria-hidden="true"></i> ' + recordatorio.fecha + '</small>';
    html += '    </div>';
    html += '    <div class="col-6 text-right">';
    html += '      <small><i class="fa fa-window-close" aria-hidden="true"></i></small>';
    html += '    </div>';
    html += '    <div class="col-12">';  // Columna de ancho completo para el texto
    html += '      <div class="row">';
    html += '        <div class="col-12">' + recordatorio.texto + '</div>';
    html += '      </div>';
    html += '    </div>';
    html += '  </div>';
    html += '</div> <br>';

    return html;
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("todo bien");

    document.getElementById("boton").onclick = function () {
        crear_recor();
        show();
    };

    document.getElementById("borrar").onclick = function () {
        borrarTodos();
        show();
    };

    show();  // Llamar a show al cargar la página

}, false);


function borrarTodos() {
    // Eliminar todos los recordatorios en el almacenamiento local
    localStorage.removeItem("recordatorios");
}