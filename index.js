// Import stylesheets
import './style.css';

//Variables globales
let lista = [19, 37, 29, 18, 19, 34, 24, 16, 17, 37, 37];
let moda = 0;

/**
 * Calcula frecuencia de un valor en una lista
 * @param {array} items
 * @returns {object}
 */
function carcularFrecuencia(items) {
  let numFrecuencia = 0;
  let frecuencia = {};
  //Filtramos los numeros repetidos en una copia del array original
  const copiaLista = filter(items);
  //Inicializa el recorrido de cada numero unico
  for (let i = 0; i < copiaLista.length; i++) {
    const nunValidador = copiaLista[i];
    //Iniciamos a recorrer la frecuencia de cada numero
    for (let i2 = 0; i2 < lista.length; i2++) {
      if (nunValidador == lista[i2]) {
        numFrecuencia++;
      }
    }
    frecuencia[nunValidador] = numFrecuencia;
    //Limpiamos la frecuencia al finalizar el recorrido de cada numero
    numFrecuencia = 0;
  }
  return frecuencia;
}

/**
 * Filtra un array con elemntos duplicados para obtener elementos unicos
 * @returns {array}
 */
function filter(_lista) {
  //copia una lista de numeros unicos
  let listaUnicos = [];
  //Recorre el array
  for (let i = 0; i < _lista.length; i++) {
    const num = _lista[i];
    //Valida que el array de unicos no contenga numeros duplicados
    if (!listaUnicos.includes(num)) {
      listaUnicos.push(num);
    }
  }
  return listaUnicos;
}

/**
 * Obtiene la moda
 * 
 * @param {object} object
 * @returns {number}
 */
function getModa(object) {
  const arrayResult = Object.values(object);
  return Math.max(...arrayResult);
}


function onInit() {
  moda = getModa(carcularFrecuencia(lista));
  setAlert();
}

/**
 * Función para mostrar resultado
 * @return {void}
 */
 function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    <p>La moda es: ${moda}</p>
  </div>
  `;
}


onInit();