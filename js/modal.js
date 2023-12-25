        // URL de la API que proporciona nombres de discotecas (reemplaza con tu propia API)
        const apiUrl = 'https://api.ejemplo.com/discotecas';

        // Variable para almacenar el JSON de la API
        let discotecas;

        // Utilizando Fetch para obtener los nombres de las discotecas
        fetch(apiUrl)
            .then(response => {
                // Verificar si la respuesta es exitosa (código de estado 200)
                if (!response.ok) {
                    throw new Error(`Error de red - Código: ${response.status}`);
                }
                // Convertir la respuesta a formato JSON
                return response.json();
            })
            .then(data => {
                // Almacenar el JSON en la variable
                discotecas = data;

                // Imprimir el JSON en la consola
                console.log('Datos de la API:', apiData);
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
            });

            const jsonDisco = [
                {
                  "nombre": "Discoteca A"
                },
                {
                  "nombre": "Discoteca B"
                },
                {
                  "nombre": "Discoteca C"
                }
              ];



function show(anything, dropdown) {
    dropdown.closest('.dropdown2').querySelector('.textBox').value = anything;
    }

    let dropdowns = document.querySelectorAll('.dropdown2');
    dropdowns.forEach(function (dropdown) {
        dropdown.onclick = function () {
            // Close all other dropdowns
            dropdowns.forEach(function (otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle the clicked dropdown
            dropdown.classList.toggle('active');
        }
    });

    document.addEventListener('click', function(e) {
        let isDropdown = e.target.matches('.dropdown2 *');
        
        if (!isDropdown) {
            let dropdowns = document.querySelectorAll('.dropdown2.active');
            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove('active');
            });
        }


    });


            // Función para deshabilitar la escritura en los dropdowns
            function disableInput(e) {
                e.preventDefault();
            }
    
            // Aplicar el evento a los inputs de los dropdowns
            var dropdownInputs = document.querySelectorAll('.dropdown2 .textBox');
            dropdownInputs.forEach(function (input) {
                input.addEventListener('keydown', disableInput);
            });
    
            var aña1 = document.querySelectorAll('.dropdown2 .option div');
            
            aña1.forEach(function (option) {
                option.addEventListener('click', function() {
                    var input = option.closest('.dropdown2').querySelector('.textBox');
                    if(input.validity.valid && input.value.trim() !== '') {
                        input.closest('.dropdown2').classList.add('filled');
                    } 
                });
            });
