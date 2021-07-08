import data from './data/athletes/athletes.js';
import { filterOnlyOneName } from './data.js';
//SPORT.HTML
let remplaza = /\+/gi; //expresion regular
let url = window.location.href; //Captura la URL de la ventana actual

url = decodeURI(url); //decodificia la url
url = url.replace(remplaza, " "); //remplaza epsacion en blanco por +
url = url.toUpperCase(); // pasa a mayusculas el texto
// url = "HTTP://127.0.0.1:5500/SRC/SPORTS.HTML?VERINFO=ARCHERY"
// url = "HTTP://127.0.0.1:5500/SRC/SPORTS.HTML?1"
//console.log(url);

function obtener_valor(variable) { //Funcion que obtine el valor de la variable en la url    
    // variable -="verinfo" 
    let variable_may = variable.toUpperCase(); // variable_may = "VERINFO" 
    //console.log(variable_may);
    let variable_pos = url.indexOf(variable_may); //  variable_pos = 38
    //console.log(variable_pos);

    if (variable_pos != -1) {
        var pos_separador = url.indexOf("?", variable_pos);
        //console.log(pos_separador);

        if (pos_separador != -1) {
            return url.substring(variable_pos + variable_may.length + 1, pos_separador);
        } else {
            return url.substring(variable_pos + variable_may.length + 1, url.length);
        }
    } else {
        return "NO_ENCONTRADO";
    }
}


let sportName = obtener_valor("data");
//console.log(sportName);
document.getElementById('title').innerHTML = sportName;


//Mostrar los eventos y sus atletas
const dataAthletes = data.athletes;
const dataEvents = filterOnlyOneName(dataAthletes, 'event'); //306 eventos
// [{sport:"",..."},{},{},...]
console.log(dataAthletes);

//console.log(dataEvents)

let plantillaHTML = "";

for (let key in dataEvents) {
    let sportArray = dataEvents[key]; //{ 'sport': 'Archery' }
    //console.log(sportArray);
    if (sportArray.sport.toUpperCase() == sportName) { 
        // console.log("Data= ", sportArray);
        plantillaHTML += `
            <div class="acordeon">
                <div class="bloque">
                    <h2 class="h2">${sportArray.event}</h2>
                    <div class="contenido">
                        <section class="cards">
        `;
        for (let key in dataAthletes) {
            if( dataAthletes[key].event == sportArray.event){
                //console.log("Atleta= ",dataAthletes[key]);
                plantillaHTML += `
                    <div class="card-athlete">
                        <div class="medals">
                            <div class="medal">
                                <div class="medal-circle-${dataAthletes[key].medal.toLowerCase()}">
                                </div>
                                <span class="medal-letter">${dataAthletes[key].medal}</span>
                            </div>
                        </div>
                        <div class="img-box">
                            <img class="img-card" src="./img-atletas/${dataAthletes[key].name !=='Kathleen Genevieve" Katie" Ledecky'? dataAthletes[key].name :'KathleenGenevieve'}.jpg">
                        </div>
                        <p class="name-athlete-card">${dataAthletes[key].name}</p>
                        <tr class="line-card"></tr>
                        <div class="team-athlete-card">
                            <img src="./img-paises/${dataAthletes[key].team}.png" alt="flag">
                            <span class="team-name">${dataAthletes[key].noc}</span>
                        </div>
                    </div>
                `;

            }
        }
        plantillaHTML += `
                        </section>
                    </div>
                </div>
            </div>
        `;
    }
}


//console.log(plantillaHTML);


//container-events
let contentDiv = document.getElementById('container-events');
contentDiv.innerHTML = plantillaHTML; //agregar plantilla html con innerhtml



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


