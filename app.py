from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

usuarios = {}  # Diccionario para almacenar usuarios y contraseñas

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registrar', methods=['POST'])
def registrar():
    try:
        data = request.get_json()
        nombre = data['nombre']
        contrasena = data['contrasena']

        if nombre and contrasena:
            if nombre not in usuarios:
                usuarios[nombre] = contrasena
                return jsonify({"mensaje": "Registro exitoso"})
            else:
                return jsonify({"error": "El nombre de usuario ya está registrado"})
        else:
            return jsonify({"error": "Error en el registro"})
    except Exception as e:
        return jsonify({"error": f"Error en la solicitud: {str(e)}"})


@app.route('/ver_usuarios')
def ver_usuarios():
    return jsonify(usuarios)

if __name__ == '__main__':
    app.run(debug=True)
