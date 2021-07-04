import { sortData, rankingOnlyMedals, rankingTotalMedals, rankingTotalAthletes, arrayData, arrayDataCountry } from './data.js';
import data from './data/athletes/athletes.js';
//---------------ATLETAS-----------------------------------------------------------------------------
const dataAthletes = data.athletes;
const iconUp = document.querySelectorAll('.icon-up');
const iconDown = document.querySelectorAll('.icon-down');
const nextIcon = document.querySelectorAll('.next-icon');
const previousIcon = document.querySelectorAll('.previous-icon');
const imgColumn1 = document.querySelectorAll('#athleteTable img');
const nocTextColumn1 = document.querySelectorAll('#athleteTable .noc-text');
const avatarColumn2 = document.querySelectorAll('#athleteTable .avatar');
const nameColumn2 = document.querySelectorAll('#athleteTable .name-text');
const sportColumn3 = document.querySelectorAll('#athleteTable .sport-text');
const medalQuantityGold = document.querySelectorAll('#athleteTable .medal-quantity-golden');
const medalQuantitySilver = document.querySelectorAll('#athleteTable .medal-quantity-silver');
const medalQuantityBronze = document.querySelectorAll('#athleteTable .medal-quantity-bronze');

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

//Se agrega un objeto con cantidad de medallas dentro de cada array agrupado por nombre
for (let key in newData){
    const medalArray = newData[key].map(element=>element.medal);
    const goldQuantity = medalArray.filter(element=>element==='Gold').length;
    const silverQuantity = medalArray.filter(element=>element==='Silver').length;
    const bronzeQuantity = medalArray.filter(element=>element==='Bronze').length;
    newData[key].push({Gold:goldQuantity, Silver:silverQuantity, Bronze:bronzeQuantity });
}
function showDataTable(array, startIndexProperty, data){
    let i = 0;
    for (let key in data){
        key = array[i+startIndexProperty];
        const arrayInProperty = data[key]; //[{},{},{}]
            imgColumn1[i].src = `./img-paises/${arrayInProperty[0].team}.png`;
            nocTextColumn1[i].innerText = arrayInProperty[0].noc;
            nameColumn2[i].innerText = arrayInProperty[0].name;
            avatarColumn2[i].innerText = arrayInProperty[0].gender;
            sportColumn3[i].innerText = arrayInProperty[0].sport;
            medalQuantityGold[i].innerText = arrayInProperty[arrayInProperty.length-1]['Gold'];
            medalQuantitySilver[i].innerText = arrayInProperty[arrayInProperty.length-1]['Silver'];
            medalQuantityBronze[i].innerText = arrayInProperty[arrayInProperty.length-1]['Bronze'];
        i<19? i++ : false;
    }
}
let arrayNames = rankingOnlyMedals(newData, 'Gold', 'desc');
showDataTable(arrayNames, 0, newData);

// Flechas siguiente y atrás muestran la data que corresponde
let index = 0;
nextIcon[0].addEventListener('click', () => {
    index += 20;
    return showDataTable(arrayNames , index , newData); 
});
previousIcon[0].addEventListener('click', () => {
    index === 0 ? index = 0 : index -= 20;
    return showDataTable(arrayNames , index , newData);
});

//Orden alfabético Atletas
const sortName = order => {
    index = 0;
    return showDataTable(sortData(arrayNames,order),index,newData);
}
iconDown[0].addEventListener('click', () => sortName('desc'));
iconUp[0].addEventListener('click', () => sortName('asc'));

//Ranking por medalla de Oro, Plata y Bronze
const rankingMedal = (typeMedal, order) =>{
    arrayNames = rankingOnlyMedals(newData, typeMedal, order);
    index = 0;
    return showDataTable(arrayNames,index,newData);
}
iconDown[1].addEventListener('click', () => rankingMedal('Gold','desc'));
iconUp[1].addEventListener('click', () => rankingMedal('Gold','asc'));
iconDown[2].addEventListener('click', () => rankingMedal('Silver','desc'));
iconUp[2].addEventListener('click', () => rankingMedal('Silver','asc'));
iconDown[3].addEventListener('click', () => rankingMedal('Bronze','desc'));
iconUp[3].addEventListener('click', () => rankingMedal('Bronze','asc'));

const topRanking = arrayData.slice(0,4);

//Mostrar información Tarjetas
let i = 0;
document.querySelectorAll('.cards > .card-athlete').forEach((cardAthlete)=>{
    const accesInformation = topRanking[i][1];
    cardAthlete.innerHTML += `
          <div class="medals">
            <div class="medal">
              <div class="medal-circle-golden">
                <span class="medal-quantity">${accesInformation[topRanking[i][1].length -1].Gold}</span>
              </div>
              <span class="medal-letter">Oro</span>
            </div>
            <div class="medal">
              <div class="medal-circle-silver">
                <span class="medal-quantity">${accesInformation[topRanking[i][1].length -1].Silver}</span>
              </div>
              <span class="medal-letter">Plata</span>
            </div>
            <div class="medal">
              <div class="medal-circle-bronze">
                <span class="medal-quantity">${accesInformation[topRanking[i][1].length -1].Bronze}</span>
              </div>
              <span class="medal-letter">Bronce</span>
            </div>
          </div>
          <div class="img-box"><img class="img-card"src="./img-atletas/${accesInformation[0].name !=='Kathleen Genevieve "Katie" Ledecky'? accesInformation[0].name :'KathleenGenevieve'}.jpg"></div>
         
          <p class="name-athlete-card">${accesInformation[0].name}</p>
          <tr class="line-card"></tr>
          <p class="sport-athlete-card">${accesInformation[0].sport}</p>
          <div class="team-athlete-card">
            <img src= "./img-paises/${accesInformation[0].team}.png" alt="flag">
            <span class="team-name">${accesInformation[0].noc}</span>
          </div>`
    i<4? i++: false;
})

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

//Se agrega un objeto con cantidad de medallas dentro de cada array agrupado por noc
for (let key in dataNoc){
    const medalArray = dataNoc[key].map(element=>element.medal);
    const goldQuantity = medalArray.filter(element=>element==='Gold').length;
    const silverQuantity = medalArray.filter(element=>element==='Silver').length;
    const bronzeQuantity = medalArray.filter(element=>element==='Bronze').length;
    dataNoc[key].push({Gold:goldQuantity, Silver:silverQuantity, Bronze:bronzeQuantity });
}
function showNumberAthletes (array) {
    const athletesArray = array.map(element=>element.name);
    return athletesArray.length;
}
function showDataTableCountry (array , startIndexProperty , data) {
    let i = 0;
    for (let key in data){
        key = array[i+startIndexProperty];
        const arrayInProperty = data[key]; //[{},{},{}]
            imgCountryTable[i].src = `./img-paises/${arrayInProperty[0].team}.png`;
            nocTextCountry[i].textContent = arrayInProperty[0].team;
            numberAthletes[i].textContent = showNumberAthletes(arrayInProperty);
            medalQuantityGoldCountry[i].textContent = arrayInProperty[arrayInProperty.length-1]['Gold'];
            medalQuantitySilverCountry[i].textContent = arrayInProperty[arrayInProperty.length-1]['Silver'];
            medalQuantityBronzeCountry[i].textContent = arrayInProperty[arrayInProperty.length-1]['Bronze'];
            totalMedals[i].textContent = arrayInProperty.length-1;
        i<19? i++ : false;
    }
}
let arrayNocs = rankingTotalMedals(dataNoc, 'desc');
showDataTableCountry(arrayNocs, 0, dataNoc);

// Flechas siguiente y atrás muestran la data que corresponde
index = 0;
nextIcon[1].addEventListener('click', () => {
    index += 20;
    showDataTableCountry(arrayNocs, index, dataNoc); 
});
previousIcon[1].addEventListener('click', () => {
    index===0 ? index = 0 : index -= 20;
    showDataTableCountry(arrayNocs, index, dataNoc);
});

//Orden Alfabético Equipo
const sortNoc = order => {
    index = 0;
    showDataTableCountry(sortData(arrayNocs, order), index, dataNoc);
}
iconDown[4].addEventListener('click', () => sortNoc('desc'));
iconUp[4].addEventListener('click', () => sortNoc('asc'));

//Ranking Nº de atletas
const showRankingTotalAthletes = (order) =>{
    arrayNocs = rankingTotalAthletes(dataNoc, order)
    index = 0;
    showDataTableCountry(arrayNocs, index, dataNoc);
}
iconDown[5].addEventListener('click', () => showRankingTotalAthletes('desc'));
iconUp[5].addEventListener('click', () => showRankingTotalAthletes('asc'));

//Ranking Medalla de Oro, Plata y Bronze
const rankingMedalCountry = (typeMedal, order) =>{
    arrayNocs = rankingOnlyMedals(dataNoc, typeMedal, order);
    index = 0;
    return showDataTableCountry(arrayNocs, index, dataNoc);
}
iconDown[6].addEventListener('click', () => rankingMedalCountry('Gold','desc'));
iconUp[6].addEventListener('click', () => rankingMedalCountry('Gold','asc'));
iconDown[7].addEventListener('click', () => rankingMedalCountry('Silver','desc'));
iconUp[7].addEventListener('click', () => rankingMedalCountry('Silver','asc'));
iconDown[8].addEventListener('click', () => rankingMedalCountry('Bronze','desc'));
iconUp[8].addEventListener('click', () => rankingMedalCountry('Bronze','asc'));

//Ranking Total de medallas
const showRankingTotalMedals = (order) => {
    arrayNocs = rankingTotalMedals(dataNoc, order);
    index = 0;
    return showDataTableCountry(arrayNocs, index, dataNoc);
}
iconDown[9].addEventListener('click', () => showRankingTotalMedals('desc'));
iconUp[9].addEventListener('click', () => showRankingTotalMedals('asc'));

//Mostrar información Tarjetas
const topRankingCountry = arrayDataCountry.slice(0,3);
let i2 = 0;
document.querySelectorAll('.cards > .card-country').forEach((cardCountry)=>{
    const accesInformation = topRankingCountry[i2][1];
    cardCountry.innerHTML += `
                        <div class="medals">
                            <div class="medal">
                                <div class="medal-circle-golden">
                                    <span class="medal-quantity">${accesInformation[topRankingCountry[i2][1].length -1].Gold}</span>
                                </div>
                                <span class="medal-letter">Oro</span>
                             </div>
                             <div class="medal">
                             <div class="medal-circle-silver">
                                 <span class="medal-quantity">${accesInformation[topRankingCountry[i2][1].length -1].Silver}</span>
                             </div>
                             <span class="medal-letter">Plata</span>
                          </div>
                          <div class="medal">
                                <div class="medal-circle-bronze">
                                    <span class="medal-quantity">${accesInformation[topRankingCountry[i2][1].length -1].Bronze}</span>
                                </div>
                                <span class="medal-letter">Bronce</span>
                             </div>
                        </div>
                        <div class="img-box"><img class="img-card" src="./img-paises/${accesInformation[0].team}.png" alt="flag"></div>
                        <p class="name-country-card">${accesInformation[0].team}</p>
                        <tr class="line-card"></tr>
                        <p class="number-medals">Total medallas: ${accesInformation.length-1}</p>
                        <p class="number-athletes">Total atletas: ${showNumberAthletes(accesInformation)}</p>`
          
    i2<3? i2++ : false;
})

//Filtro
const select= document.querySelectorAll('.select');
const options = document.querySelectorAll('.options');
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
captureInputFilter(0);

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
