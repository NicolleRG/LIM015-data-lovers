import data from './data/athletes/athletes.js';

/* Mostrar la data en las tablas*/
const tableContent = document.querySelector('.table-content');
const dataAthletes = data.athletes;// array de objetos de atletas
/* función que mueestra un fragmento con la creación de filas y columnas con la data*/

function createRowsInTable(data){
    const fragment = new DocumentFragment();
    data.forEach(item=>{
        const newRow = document.createElement('tr')
        /*columna 1*/
        const newColumn1 = document.createElement("td");
        const imgColumn1 = document.createElement("img");
        const imgAttribute = document.createAttribute("src")
            imgAttribute.value = `./img-paises/${item.team}.png` //bandera de país
        imgColumn1.setAttributeNode(imgAttribute);
        const spanColumn1 = document.createElement('span');
            spanColumn1.textContent = item.noc; // equipo del atleta
        newColumn1.appendChild(imgColumn1);
        newColumn1.appendChild(spanColumn1);
        newRow.appendChild(newColumn1);
        /*columna 2*/
        const newColumn2 = document.createElement('td');
        const divColumn2 = document.createElement('div');
        const spanDivColumn2 = document.createElement('span');
            spanDivColumn2.textContent = item.gender; // género del atleta
        divColumn2.appendChild(spanDivColumn2);
        const spanColumn2 = document.createElement('span');
            spanColumn2.textContent = item.name // nombre del atleta
        newColumn2.appendChild(divColumn2);
        newColumn2.appendChild(spanColumn2);
        newRow.appendChild(newColumn2);
        /*columna 3*/
        const newColumn3 = document.createElement('td');
        const spanColumn3 = document.createElement('span');
            spanColumn3.textContent = item.sport; // deporte del atleta
        newColumn3.appendChild(spanColumn3);
        newRow.appendChild(newColumn3);
        /*columna 4*/
        const newColumn4 = document.createElement('td');
        const divColumn4 = document.createElement('div');
        divColumn4.classList.add('medal-circle');
        divColumn4.classList.add('gold');
        const spanDivColumn4 = document.createElement('span');
            spanDivColumn4.textContent = 0; // agregar función contadora de medallas de oro por atletas
        divColumn4.appendChild(spanDivColumn4);
        newColumn4.appendChild(divColumn4);
        newRow.appendChild(newColumn4);
        /*columna 5*/
        const newColumn5 = document.createElement('td');
        const divColumn5 = document.createElement('div');
        divColumn5.classList.add('medal-circle');
        divColumn5.classList.add('silver');
        const spanDivColumn5 = document.createElement('span');
            spanDivColumn5.textContent = 0; // agregar función contadora de medallas de oro por atletas
        divColumn5.appendChild(spanDivColumn5);
        newColumn5.appendChild(divColumn5);
        newRow.appendChild(newColumn5);
        /*columna 6*/
        const newColumn6 = document.createElement('td');
        const divColumn6 = document.createElement('div');
        divColumn6.classList.add('medal-circle')
        divColumn6.classList.add('bronze');
        const spanDivColumn6 = document.createElement('span');
            spanDivColumn6.textContent = 0; // agregar función contadora de medallas de oro por atletas
        divColumn6.appendChild(spanDivColumn6);
        newColumn6.appendChild(divColumn6);
        newRow.appendChild(newColumn6);
        fragment.appendChild(newRow);
    });
    return tableContent.appendChild(fragment);
}
createRowsInTable(dataAthletes.slice(0,15));
const plusButton = document.querySelector('.plus-icon');
let i=15;
let n=30;
function dataPart() {
    createRowsInTable(dataAthletes.slice(i,n));
    i=i+15; 
    n=n+15; 
}
plusButton.addEventListener('click',dataPart);

/*tenDataAthletes.forEach(item=>{
    tableContent.innerHTML+=`
        <tr>
            <td class="column-1"><img src="" alt="flag"><span class="noc-text">${item.noc}</span></td>
            <td class="column-2"><div class="avatar-circle"><span class="avatar"></span></div><span class="name-text">${item.name}</span></td>
            <td class="column-3"><span class="sport-text"></span></td>
            <td class="column-4"> <div class="medal-circle"><span class="medal-quantity"></span></div></td>
            <td class="column-5"> <div class="medal-circle"><span class="medal-quantity"></span></div></td>
            <td class="column-6"> <div class="medal-circle"><span class="medal-quantity"></span></div></td>
        </tr>`
});*/

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







//console.log(example, data);
