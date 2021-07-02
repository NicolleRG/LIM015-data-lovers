import { ranking, sortData } from './data.js';
import data from './data/athletes/athletes.js';

//---------------ATLETAS-----------------------------------------------------------------------------
const dataAthletes = data.athletes;
const imgColumn1 = document.querySelectorAll('#athleteTable img');
const nocTextColumn1 = document.querySelectorAll('#athleteTable .noc-text');
const avatarColumn2 = document.querySelectorAll('#athleteTable .avatar');
const nameColumn2 = document.querySelectorAll('#athleteTable .name-text');
const sportColumn3 = document.querySelectorAll('#athleteTable .sport-text');
const medalQuantityGold = document.querySelectorAll('#athleteTable .medal-quantity-golden');
const medalQuantitySilver = document.querySelectorAll('#athleteTable .medal-quantity-silver');
const medalQuantityBronze = document.querySelectorAll('#athleteTable .medal-quantity-bronze');
const nextIcon = document.querySelectorAll('.next-icon');
const previousIcon = document.querySelectorAll('.previous-icon');
const iconUp = document.querySelectorAll('.icon-up');
const iconDown = document.querySelectorAll('.icon-down');

function groupBy(key){
    return function group(data){
        return data.reduce((acc,item)=>{
            const property = item[key]; 
            acc[property] = acc[property] || [];
            acc[property].push(item);
            return acc;
        }, {});
    };
}
const groupByName = groupBy('name');
const newData = groupByName(dataAthletes);
//const arrayOfNames = Object.keys(newData); //[names]

for (let key in newData){
    const medalArray = newData[key].map(element=>element.medal);
    const goldQuantity = medalArray.filter(element=>element==='Gold').length;
    const silverQuantity = medalArray.filter(element=>element==='Silver').length;
    const bronzeQuantity = medalArray.filter(element=>element==='Bronze').length;
    newData[key].push({Gold:goldQuantity, Silver:silverQuantity, Bronze:bronzeQuantity });
}

const arrayNames = ranking(newData, 'Gold', 'desc');
// console.table(arrayNames);
function showDataTable(array, startIndexProperty, data){
    let i = 0;
    for (let key in data){
        key = array[i+startIndexProperty];
        const arrayInProperty = data[key]; //[{},{},{}]
        //console.log(arrayInProperty[arrayInProperty.length-1]);
            imgColumn1[i].src = `./img-paises/${arrayInProperty[0].team}.png`;
            nocTextColumn1[i].textContent = arrayInProperty[0].noc;
            nameColumn2[i].textContent = arrayInProperty[0].name;
            avatarColumn2[i].textContent = arrayInProperty[0].gender;
            sportColumn3[i].textContent = arrayInProperty[0].sport;
            medalQuantityGold[i].textContent = arrayInProperty[arrayInProperty.length-1]['Gold'];
            medalQuantitySilver[i].textContent = arrayInProperty[arrayInProperty.length-1]['Silver'];
            medalQuantityBronze[i].textContent = arrayInProperty[arrayInProperty.length-1]['Bronze'];
        i<19? i++ : false;
    }
}

showDataTable(arrayNames, 0, newData);
const rankingMedal = (typeMedal, order) =>{
    index = 0;
    showDataTable(ranking(newData, typeMedal, order),index,newData);
}
iconDown[3].addEventListener('click', () => rankingMedal('Gold','desc'));
iconUp[3].addEventListener('click', () => rankingMedal('Gold','asc'));
iconDown[4].addEventListener('click', () => rankingMedal('Silver','desc'));
iconUp[4].addEventListener('click', () => rankingMedal('Silver','asc'));
iconDown[5].addEventListener('click', () => rankingMedal('Bronze','desc'));
iconUp[5].addEventListener('click', () => rankingMedal('Bronze','asc'));

let index = 0;
nextIcon[0].addEventListener('click', () => {
    index = index + 20;
    console.log(arrayNames);
    showDataTable(arrayNames , index , newData); 
});
previousIcon[0].addEventListener('click', () => {
    index===0 ? index=0 : index = index-20;
    console.log(arrayNames);
    showDataTable(arrayNames , index , newData);
});

//Se ordena alfabéticamente por nombre
const sortName = order => {
    index = 0;
    showDataTable(sortData(arrayNames,order),index,newData);
}
iconDown[1].addEventListener('click', () => sortName('asc'));
iconUp[1].addEventListener('click', () => sortName('desc'));

//--------------------PAISES------------------------------------------------------------------------------
const imgCountryTable = document.querySelectorAll('#countryTable img');
const nocTextCountry = document.querySelectorAll('#countryTable .noc-text');
const numberAthletes = document.querySelectorAll('#countryTable .number-athletes')
const medalQuantityGoldCountry = document.querySelectorAll('#countryTable .medal-quantity-golden');
const medalQuantitySilverCountry = document.querySelectorAll('#countryTable .medal-quantity-silver');
const medalQuantityBronzeCountry = document.querySelectorAll('#countryTable .medal-quantity-bronze');
const totalMedals = document.querySelectorAll('.total-medals');

const groupByNoc = groupBy('noc');
const dataNoc = groupByNoc(dataAthletes);
const arrayOfNocs = Object.keys(dataNoc); // [nocs]

function showMedalQuantityCountry (array , typeMedal) {
    const medalArray = array.map(element=>element.medal);
    const typeMedalArray = medalArray.filter(element=>element===typeMedal);
    return typeMedalArray.length>0? typeMedalArray.length : '-';
}
function showNumberAthletes (array) {
    const athletesArray = array.map(element=>element.name);
    return athletesArray.length;
}
function showTotalMedals (array) {
    const medalArray = array.map(element=>element.medal);
    return medalArray.length;
}
function showDataTableCountry (array , startIndexProperty , data){
    let i = 0;
    for (let key in data){
        key = array[i+startIndexProperty];
        const arrayInProperty = data[key]; //[{},{},{}]
            imgCountryTable[i].src = `./img-paises/${arrayInProperty[0].team}.png`;
            nocTextCountry[i].textContent = arrayInProperty[0].team;
            numberAthletes[i].textContent = showNumberAthletes(arrayInProperty);
            medalQuantityGoldCountry[i].textContent = showMedalQuantityCountry(arrayInProperty, 'Gold');
            medalQuantitySilverCountry[i].textContent = showMedalQuantityCountry(arrayInProperty, 'Silver');
            medalQuantityBronzeCountry[i].textContent = showMedalQuantityCountry(arrayInProperty, 'Bronze');
            totalMedals[i].textContent = showTotalMedals(arrayInProperty);
        i<19? i++ : false;
    }
}
showDataTableCountry(arrayOfNocs, 0, dataNoc);
index = 0;
nextIcon[1].addEventListener('click', () => {
    index = index + 20;
    showDataTableCountry(arrayOfNocs , index , dataNoc);
    //console.log(index);  
});
previousIcon[1].addEventListener('click', () => {
    index===0 ? index=0 : index = index-20;
    //console.log(index);
    showDataTableCountry(arrayOfNocs , index , dataNoc);
});
const sortNoc = order => {
    index = 0;
    showDataTableCountry(sortData(arrayOfNocs,order),index, dataNoc);
}
iconDown[6].addEventListener('click', () => sortNoc('asc'));
iconUp[6].addEventListener('click', () => sortNoc('desc'));

//Filtro
const select= document.querySelectorAll('.select');
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
captureInputFilter(0)

// const showDataInTable = (data , startIndexItem) =>{
//    for(let i = 0; i<20 ; i++){ 
//         const item = data[i+startIndexItem];
//         imgColumn1[i].src = `./img-paises/${item.team}.png`;
//         nocTextColumn1[i].textContent = item['noc'];
//         nameColumn2[i].textContent = item.name;
//         avatarColumn2[i].textContent = item.gender;
//         sportColumn3[i].textContent = item.sport;
//     }
// }
// showDataInTable(dataAthletes , 0);

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
