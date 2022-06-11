const pdtToPaes = function (valor, asignatura) { // espera un puntaje a buscar y el literal object de la asignatura
    const tabla = asignatura.tablaConversionPuntaje;
    let message = '';

    for (let i =0; i < tabla.length ; i++) {
        let pdt = tabla[i].pdt;
        let paes = tabla[i].paes;
        if (pdt === valor) {
            message = `Tu puntaje PDT ${pdt} equivale a ${paes} puntos en la PAES de ${asignatura.name}`;
            break;
        }
    }
    return message;
}

const buscarEnTabla = function (valorBuscado, tabla) { // la tabla esperada es un array de literal objects con 2 valores. El primero es el que se busca y el segundo es el resultado.
    let valor;
    for (let i = 0; i < tabla.length ; i++) {
        let llaves = Object.keys(tabla[i]);
        if (tabla[i][llaves[0]] === valorBuscado) {
            valor = tabla[i][llaves[1]];
            break;
        }
    }
    return valor;
}


const crearSelect = (asignaturas) => {
    const div = document.getElementById('pdt2paes');
    let html = '';

    for (let asignatura in asignaturas){
        html += ` <h3>${asignaturas[asignatura].nombre}</h3>
        <p>Elige cuál es tu puntaje PDT y te diré a cuánto puntaje PAES corresponde.</p>
        <select id="${asignatura}-pdt-select" class="form-select">
        </select>`;
    }
    div.innerHTML = html;
}


const poblarSelect = (tabla, selectId) => { 
    let opciones = '';
    const select = document.getElementById(selectId)
    for (let i = 0; i < tabla.length ; i++) {
        let llaves = Object.keys(tabla[i]);
        let opcion = tabla[i][llaves[0]];
        opciones += `<option>${opcion}</option>`;
    }
    select.innerHTML = opciones;
}



crearSelect(asignaturas)

for (let asignatura in asignaturas){
    poblarSelect(asignaturas[asignatura].tablaPdt2Paes, `${asignatura}-pdt-select`);
}