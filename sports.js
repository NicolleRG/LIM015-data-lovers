
//SPORT.HTML
let remplaza = /\+/gi; //expresion regular
let url = window.location.href; //Captura la URL de la ventana actual

url = decodeURI(url); //decodificia la url
url = url.replace(remplaza, " "); //remplaza epsacion en blanco por +
url = url.toUpperCase(); // pasa a mayusculas el texto
// url = "HTTP://127.0.0.1:5500/SRC/SPORTS.HTML?VERINFO=ARCHERY"
// url = "HTTP://127.0.0.1:5500/SRC/SPORTS.HTML?1"
console.log(url);

function obtener_valor(variable) { //Funcion que obtine el valor de la variable en la url    
    // variable -="verinfo" 
    let variable_may = variable.toUpperCase(); // variable_may = "VERINFO" 
    console.log(variable_may);
    let variable_pos = url.indexOf(variable_may); //  variable_pos = 38
    console.log(variable_pos);

    if (variable_pos != -1) {
        var pos_separador = url.indexOf("?", variable_pos);
        console.log(pos_separador);

        if (pos_separador != -1) {
            return url.substring(variable_pos + variable_may.length + 1, pos_separador);
        } else {
            return url.substring(variable_pos + variable_may.length + 1, url.length);
        }
    } else {
        return "NO_ENCONTRADO";
    }
}

let valor = obtener_valor("data");
console.log(valor);

document.getElementById('title').innerHTML = valor;

let plantillaHTML = "";
let titular; 
let titular2 = "Jose";
let texto = "Soy el contenido de Cristina";
let texto2 = "Soy el contenido de Jose";
let events = ["Team mixed", "atletis 100m", "ATletis 300m"];

for (let index = 0; index < events.length; index++) {
    
    titular =  events[index];
    titular2 = titular2 + " - " + events[index];
    texto = texto + " - " + events[index];
    texto2 = texto2 + " - " + events[index];
    plantillaHTML += `
        <div class="acordeon">
            <div class="bloque">
                <h2 class="h2">${titular}</h2>
                <div class="contenido">${texto}</div>
                </div>
                <div class="bloque">
                    <h2 class="h2">${titular2}</h2>
                <div class="contenido">${texto2}</div>
            </div>
        </div>
    `;
}

console.log(plantillaHTML);


//container-events
let contentDiv = document.getElementById('container-events');
contentDiv.innerHTML = plantillaHTML; //agregar plantilla html con innerhtml

//var p = document.createElement("div");
//contentDiv.appendChild(p);



//-------------------------------------------------//

const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')

//cuando haga click en h2
//quitar la clase activo de todos los bloques
//vamos a añadir la clase activo al bloque con la posición del h2

//Recorrer todos los h2
h2.forEach((cadaH2, i) => {
    //asignando un click a cada h2
    h2[i].addEventListener('click', () => {

        //Recorrer todos los bloques
        bloque.forEach((cadaBloque, i) => {

            //Quitamos la clase activo de todos los bloques
            bloque[i].classList.remove('activo')
        })
        //Añadiendo la clase activo al bloque cuya posicion sea igual al del h2 (Linea 188)
        bloque[i].classList.add('activo')
    })
})
