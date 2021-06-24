import data from './data/athletes/athletes.js';

/* Mostrar la data en las tablas*/

const dataAthletes = data.athletes;
let i=0;
document.querySelector('.noc-text').innerText = dataAthletes[i].noc;
const nameTag = document.querySelector('.name-text').innerText = dataAthletes[i].name;
const sportTag = document.querySelector('.sport-text').innerText = dataAthletes[i].sport; 
const newRow = document.createElement("tr");

const newColumn1 = document.createElement("td");
    let imgColumn1 = document.createElement("img");
    let imgAttribute = document.createAttribute("src")
        imgAttribute.value = "./img-paises/001-paraguay.png"; // img para sacar de la carpeta de imágenes
        imgColumn1.setAttributeNode(imgAttribute);
const spanColumn1 = document.createElement('span');
const textColumn1 = document.createTextNode('holi');// texto para sacar de la data columna 1
newRow.appendChild(newColumn1).appendChild(imgColumn1);
newRow.appendChild(newColumn1).appendChild(spanColumn1).appendChild(textColumn1);

const newColumn2 = document.createElement("td");
    let divColumn2 = document.createElement("div");
    let spanDivColumn2 = document.createElement("span")
    let spanDivColumn2Text = document.createTextNode('F') // identificador F O M del avatar
    divColumn2.appendChild(spanDivColumn2).appendChild(spanDivColumn2Text);
const spanColumn2 = document.createElement('span');
const textColumn2 = document.createTextNode('holi 2');// texto para sacar de la data columna 2
newRow.appendChild(newColumn2).appendChild(divColumn2);
newRow.appendChild(newColumn2).appendChild(spanColumn2).appendChild(textColumn2);

const newColumn3 = document.createElement("td");
newRow.appendChild(newColumn3);
const newColumn4 = document.createElement("td");
newRow.appendChild(newColumn4);
const newColumn5 = document.createElement("td");
newRow.appendChild(newColumn5);
const newColumn6 = document.createElement("td");
newRow.appendChild(newColumn6);

document.querySelector('.table-content').appendChild(newRow);

    for(i=0; i<dataAthletes.length; i++){
        
        //nocTag.innerHTML=data.athletes[i].noc;

        //nameArray.push(data.athletes[i].name);
        //sportArray.push(data.athletes[i].sport);
    }



//Filtro

/*const select= document.querySelectorAll('.select');
const options =document.querySelectorAll('.options');
const contentSelect = document.querySelectorAll('.select .content-select');
const hiddenInput = document.querySelectorAll('.user-selection');
//función que captura la opción seleccionada y la muestra en el select, guardar el valor en una variable;
const captureInputFilter = i => {
    document.querySelectorAll('.options > .option').forEach((option)=>{
        option.addEventListener('click', (e)=>{
            e.preventDefault();
            contentSelect[i].innerHTML=e.currentTarget.querySelector('.data').innerText;
            //console.log(e.currentTarget.innerHTML);
            select[i].classList.toggle('active');
            options[i].classList.toggle('active');
            hiddenInput.value = e.currentTarget.querySelector('.data').innerText;
        });
        
    });
    select[i].addEventListener('click', ()=>{
        select[i].classList.toggle('active');
        options[i].classList.toggle('active');
    });
};
captureInputFilter(0)*/



/* Mostrar la data DEPORTE en el recuadro*/





//console.log(example, data);
