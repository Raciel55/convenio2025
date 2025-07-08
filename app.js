const empresas = [
    { id: "sergio", representante: "LUIS SERGIO BALCAZAR GARCIA", nombre: "AUTOTRANSPORTES ESTRELLA DEL VALLE DE MEXICO, S.A. DE C.V." },
    { id: "chaparro", representante: "RICARDO CHAPARRO FLORES", nombre: "SITIO AUTOTRANSPORTES NIÑOS HEROES Y FCO VILLA, S.A. DE C.V." },
    { id: "beto-nava", representante: "ROBERTO NAVA GALLARDO", nombre: "GRUPO SANCRISTEX, S.A. DE C.V." },
    { id: "chupas", representante: "JUAN FERNANDO ALVAREZ MENESES", nombre: "SAN RAFAEL CHAMAPA CORPORATIVO DE TRANSPORTE EJECUTIVO SRCCTE, S.A. DE C.V." },
    { id: "apaxtle", representante: "MARIA DEL PILAR ESPERILLA PORRAS", nombre: "UNION DE TAXISTAS Y TRANSPORTE COLECTIVO APAXTLE, S.A. DE C.V." },
    { id: "saul", representante: "SAUL IGNACIO OSORIO DELGADO", nombre: "TRANSPORTES MEXICO GUADALUPE VICTORIA SAN PABLO Y ANEXAS, S.A. DE C.V." },
    { id: "ruta-58", representante: "EDGAR JOSE LUIS GARCIA CEDILLO", nombre: "AUTOTRANSPORTES EL CAPULIN RUTA 58, S.A. DE C.V." },
    { id: "semesa", representante: "WENDY GOMEZ GONZALEZ", nombre: "SERVICIOS METROPOLITANOS DE EXCELENCIA, S.A. DE C.V." },
    { id: "excelencia", representante: "LUIS SALGADO URBAN", nombre: "EXCELENCIA EN EL TRANSPORTE DE ALQUILER DEL ESTADO DE MEXICO, S.A. DE C.V." },
    { id: "quiroz-36", representante: "ROBERTO QUIROZ DIAZ", nombre: "TRANSPORTES CHALCO 36, S.A. DE C.V." },
    { id: "izcalli", representante: "JULIO CESAR MOYA LUNA", nombre: "SITIO DE TAXIS Y RADIO TAXIS DE IZCALLI DEL RIO, S.A. DE C.V." },
    { id: "isra", representante: "ISRAEL GONZALEZ ROSAS", nombre: "AUTOBUSES DEL VALLE DE MEXICO, S.A. DE C.V." },
    { id: "lety", representante: "LETICIA ZARATE RIVERA", nombre: "BLOQUE DE AGRUPACIONES DE RENOVACION, S.A. DE C.V." },
    { id: "santos", representante: "JOSE SANTOS REYES GASPAR", nombre: "AUTOTRANSPORTISTAS Y CONCESIONARIOS DEL ESTADO DE MEXICO RUTA 82 ANDEN \"U\" CUATRO CAMINOS Y RAMALES, S.A. DE C.V." },
    { id: "mario", representante: "MARIO RIZO LOPEZ", nombre: "TRANSPORTES TERRESTRES CON ENLACE AL DISTRITO FEDERAL, S.A. DE C.V." },
    { id: "don jorge", representante: "JORGE ENRIQUEZ GONZALEZ", nombre: "LINEA MEXICO TACUBA HUIXQUILUCAN Y ANEXAS, S.A. DE C.V." },
    { id: "cureno", representante: "JAIME ALFREDO CUREÑO MUÑOZ", nombre: "RADIO TAXI SAN ISIDRO, S.A. DE C.V." },
    { id: "adolfo", representante: "JOSE ALFREDO RAMIREZ ZUÑIGA", nombre: "TRANSPORTISTAS COLECTIVOS ADOLFO LOPEZ MATEOS, HUIXQUILUCAN TOREO, S.A. DE C.V." },
    { id: "martin", representante: "MARTIN GUTIERREZ MILLA", nombre: "AUTOTRANSPORTES MIR DE SAN ANTONIO TULTITLAN, S.A. DE C.V." },
    { id: "acatlan", representante: "LUIS ROBERTO GONZALEZ HUERTA", nombre: "ASOCIACION DE PROPIETARIOS, OPERADORES Y AUTOTRANSPORTISTAS DE ACATLAN, S.A. DE C.V." },
    { id: "rincon-verde", representante: "MIGUEL CARLOS ROMERO LUCAS", nombre: "AUTOTRANSPORTES DEL CENTRO DE NAUCALPAN, S.A. DE C.V." },
    { id: "rafa", representante: "RAUL RAFAEL MUCIÑO ROJAS", nombre: "RUTA 09 ASOCIACION DE PROPIETARIOS Y AUTOTRANSPORTES DE AGUA BENDITA HUIXQUILUCAN GRUPO VALLE DE MEXICO, S.A. DE C.V." },
    { id: "miguel", representante: "MIGUEL ANGEL RODRIGUEZ CORTES", nombre: "TRANSPORTES URBANOS Y SUBURBANOS DE SAN ANTONIO TULTITLAN, S.A. DE C.V." },
    { id: "administradora", representante: "JORGE MOLINA MATRINTEZ", nombre: "ADMINISTRADORA DE TRANSPORTE INDEPENDIENTE, S.A. DE C.V." },
    { id: "basurto", representante: "JAVIER GUADALUPE BASURTO MONTOYA", nombre: "A.C.P.T.A. RUTA 27 II MIGUEL HIDALGO, S.A. DE C.V." },
    { id: "ray", representante: "RAYMUNDO DAVID BENITEZ CRUZ", nombre: "TRANSPORTES EN NEZAHUALCOYOTL PERLA-REFORMA, S.A. DE C.V." },
    { id: "elba", representante: "MANUEL RICARDO RODRIGUEZ MORALES", nombre: "TRANSPORTES DE ALQUILER DE MEXICO Y ANEXOS DE CUAUTITLAN, S.A. DE C.V." }
];

// ✅ Registrar una sola vez el evento de carga de firma
const firmaInput = document.getElementById('firmaInput'); // input tipo file
const firmaDigital = document.getElementById('firmaDigital'); // <img>

if (firmaInput && firmaDigital) {
    firmaInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                firmaDigital.src = e.target.result;
                firmaDigital.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            firmaDigital.src = './img/white.jpg';
            firmaDigital.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('moral').addEventListener('click', function () {
        ocultarSecciones();
        mostrarEmpresas();
    });
    document.getElementById('fisica').addEventListener('click', function () {
        ocultarSecciones();
        document.getElementById('sec-fisica').style.display = 'block';
        document.getElementById('sig-fis').addEventListener('click', function () {
            ocultarSecciones();
            document.getElementById('sec-datos').style.display = 'block';
            // ⚠️ Elimina primero listeners anteriores si existen (por si el usuario regresa
            document.getElementById('terminar').addEventListener('click', function (event) {
                event.preventDefault();

                const ingtitular1 = document.getElementById('ing-titular-1');
                const ingtitular2 = document.getElementById('ing-titular-2');
                const ingtitular3 = document.getElementById('ing-titular-3');
                const ingtitular4 = document.getElementById('ing-titular-4');

                const nombres = document.getElementById('nombres').value;
                const apellidoP = document.getElementById('apellido-paterno').value;
                const apellidoM = document.getElementById('apellido-materno').value;

                let nombreCompleto = `${nombres} ${apellidoP} ${apellidoM}`.trim();

                ingtitular1.innerHTML = (nombreCompleto).toUpperCase();
                ingtitular2.innerHTML = (nombreCompleto).toUpperCase();
                ingtitular3.innerHTML = (nombreCompleto).toUpperCase();
                ingtitular4.innerHTML = (nombreCompleto).toUpperCase();


                convenio();
            });
        });
    });

    document.getElementById('ir-inicio').addEventListener('click', function () {
        ocultarSecciones();
        document.getElementById('sec-inicio').style.display = 'block';
    });
    document.getElementById('ir-fisica').addEventListener('click', function () {
        ocultarSecciones();
        document.getElementById('sec-fisica').style.display = 'block';
    });
    document.getElementById('ir-moral').addEventListener('click', function () {
        ocultarSecciones();
        document.getElementById('sec-moral').style.display = 'block';
    });
    document.getElementById('ir-ingresar-datos').addEventListener('click', function () {
        ocultarSecciones();
        document.getElementById('sec-datos').style.display = 'block';
    });
    document.getElementById('ir-convenio').addEventListener('click', function () {
        ocultarSecciones();
        document.getElementById('sec-convenio').style.display = 'block';
    });
});
function ocultarSecciones() {
    document.getElementById('sec-moral').style.display = 'none';
    document.getElementById('sec-inicio').style.display = 'none';
    document.getElementById('sec-datos').style.display = 'none';
    document.getElementById('sec-convenio').style.display = 'none';
    document.getElementById('sec-datos').style.display = 'none';
    document.getElementById('sec-fisica').style.display = 'none';
};
function mostrarEmpresas() {
    document.getElementById('sec-moral').style.display = 'block';
    const empresasDiv = document.getElementById('empresas');

    let contenido = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre del Representante</th>
                    <th>Empresa</th>
                    <th>Seleccionar</th>
                </tr>
            </thead>
            <tbody id="tablaEmpresas">
    `;

    empresas.forEach(empresa => {
        contenido += `
            <tr>
                <td>${(empresa.id).toUpperCase()}</td>
                <td>${empresa.representante}</td>
                <td>${empresa.nombre}</td>
                <td>
                    <button class="btn btn-primary seleccionar-btn" data-id="${empresa.id}">
                        <img src="./img/siguiente.png" width="50px">
                    </button>
                </td>
            </tr>
        `;
    });

    contenido += `</tbody></table>`;
    empresasDiv.innerHTML = contenido; // ← tabla se inserta aquí

    const input = document.getElementById('buscadorEmpresas');
    const tabla = document.getElementById('tablaEmpresas');
    const filas = tabla.getElementsByTagName('tr');

    input.addEventListener('keyup', function () {
        const filtro = input.value.toLowerCase();

        for (let i = 0; i < filas.length; i++) {
            const celdas = filas[i].getElementsByTagName('td');
            let textoFila = '';

            for (let j = 0; j < celdas.length - 1; j++) {
                textoFila += celdas[j].textContent.toLowerCase() + ' ';
            }

            filas[i].style.display = textoFila.includes(filtro) ? '' : 'none';
        }
    });

    const botones = document.querySelectorAll('.seleccionar-btn');
    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            const idEmpresa = this.getAttribute('data-id');
            const empresaSeleccionada = empresas.find(emp => emp.id === idEmpresa);

            if (!empresaSeleccionada) return;

            document.getElementById('sec-moral').style.display = 'none';
            document.getElementById('sec-datos').style.display = 'block';

            console.log("Empresa seleccionada:", empresaSeleccionada);

            const btnTerminar = document.getElementById('terminar');
            const nuevoBtn = btnTerminar.cloneNode(true);
            btnTerminar.parentNode.replaceChild(nuevoBtn, btnTerminar);

            nuevoBtn.addEventListener('click', function (event) {
                event.preventDefault();

                const ingtitular1 = document.getElementById('ing-titular-1');
                const ingtitular2 = document.getElementById('ing-titular-2');
                const ingtitular3 = document.getElementById('ing-titular-3');
                const ingtitular4 = document.getElementById('ing-titular-4');


                ingtitular1.innerHTML = empresaSeleccionada.representante;
                ingtitular2.innerHTML = empresaSeleccionada.nombre;
                ingtitular3.innerHTML = empresaSeleccionada.representante;
                ingtitular4.innerHTML = empresaSeleccionada.representante;

                convenio();

            });
        });
    });
}
function convenio() {
    document.getElementById('sec-datos').style.display = 'none';
    document.getElementById('sec-convenio').style.display = 'block';

    const ingconcesion = document.getElementById('ing-concesion');
    const ingmunicipio = document.getElementById('ing-municipio');
    const ingserie = document.getElementById('ing-serie');
    const ingmarca = document.getElementById('ing-marca');
    const ingsubmarca = document.getElementById('ing-submarca');
    const ingmodelo = document.getElementById('ing-modelo');
    const ingfecha = document.getElementById('ing-fecha');

    const concesion = (document.getElementById('concesion').value).toUpperCase();
    const municipio = (document.getElementById('municipio').value).toUpperCase();
    const serie = (document.getElementById('serie').value).toUpperCase();
    const marca = (document.getElementById('marcaAuto').value).toUpperCase();
    const submarca = (document.getElementById('submarcaTaxi').value).toUpperCase();

    //Fecha actual
    const fechaActual = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const hoy = fechaActual.toLocaleDateString('es-MX', opcionesFecha)

    // Consultar modelo del coche usando el VIN
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${serie}?format=json`)
        .then(response => response.json())
        .then(data => {
            const result = data.Results[0];
            const anio = result.ModelYear || "Desconocido";

            // Asignar valores
            ingconcesion.textContent = (concesion).toUpperCase();
            ingmunicipio.textContent = (municipio).toUpperCase();
            ingserie.textContent = (serie).toUpperCase();
            ingmarca.textContent = (marca).toUpperCase();
            ingsubmarca.textContent = (submarca).toUpperCase();
            ingmodelo.textContent = (anio).toUpperCase();
            ingfecha.textContent = hoy;

            console.log("Año:", anio);

            document.getElementById('imprimir').addEventListener('click', function () {
                ocultarSecciones();
                document.getElementById('sec-navegacion').style.display = 'none';
                document.getElementById('sec-imprimir').style.display = 'none';
                document.getElementById('sec-convenio').style.display = 'block';

                // Esperar a que todo se pinte antes de imprimir
                setTimeout(() => {
                    window.print();
                }, 300);
            });
        })
        .catch(error => {
            console.error("Error al consultar el VIN:", error);
            document.getElementById("resultadoVIN").textContent = "Hubo un error al consultar el VIN.";
        });
}
window.onafterprint = function () {
    console.log("Impresión finalizada");
    ocultarSecciones();
    document.getElementById('sec-navegacion').style.display = 'block';
    document.getElementById('sec-imprimir').style.display = 'block';
    document.getElementById('sec-convenio').style.display = 'block'; // opcional
};