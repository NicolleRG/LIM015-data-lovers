import { sortData } from './data.js';
import data from './data/athletes/athletes.js';
const dataAthletes = data.athletes;
const imgColumn1 = document.querySelectorAll('.table-content img');
const nocTextColumn1 = document.querySelectorAll('.noc-text');
const avatarColumn2 = document.querySelectorAll('.avatar');
const nameColumn2 = document.querySelectorAll('.name-text');
const sportColumn3 = document.querySelectorAll('.sport-text');
const medalQuantityGold = document.querySelectorAll('.medal-quantity-golden');
const medalQuantitySilver = document.querySelectorAll('.medal-quantity-silver');
const medalQuantityBronze = document.querySelectorAll('.medal-quantity-bronze');
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
const arrayOfNames = Object.keys(newData); // [names]

function showMedalQuantity (array , typeMedal) {
    const medalArray = array.map(element=>element.medal);
    const typeMedalArray = medalArray.filter(element=>element===typeMedal);
    return typeMedalArray.length>0? typeMedalArray.length : '-';
}
function showDataTable(array , startIndexProperty , data){
    //console.log(array);
    let i = 0;
    for (let key in data){
        key = array[i+startIndexProperty];
        //console.log(key);
        const arrayInProperty = data[key]; //[{},{},{}]
            imgColumn1[i].src = `./img-paises/${arrayInProperty[0].team}.png`;
            nocTextColumn1[i].textContent = arrayInProperty[0].noc;
            nameColumn2[i].textContent = arrayInProperty[0].name;
            avatarColumn2[i].textContent = arrayInProperty[0].gender;
            sportColumn3[i].textContent = arrayInProperty[0].sport;
            medalQuantityGold[i].textContent = showMedalQuantity(arrayInProperty, 'Gold');
            medalQuantitySilver[i].textContent = showMedalQuantity(arrayInProperty, 'Silver');
            medalQuantityBronze[i].textContent = showMedalQuantity(arrayInProperty, 'Bronze');
        i<19? i++ : false;
    }
}
showDataTable(arrayOfNames , 0 , newData);

let index = 0;
nextIcon[0].addEventListener('click', () => {
    index = index + 20;
    showDataTable(arrayOfNames , index , newData);
    //console.log(index);  
});
previousIcon[0].addEventListener('click', () => {
    index===0 ? showDataTable(0): index = index-20;
    //console.log(index);
    showDataTable(arrayOfNames , index , newData);
});

/*Orden alfabético por nombre */
index=0;
const sortName = order =>{
    index = 0;
    showDataTable(sortData(arrayOfNames,order),index,newData)
}
iconDown[1].addEventListener('click', () => sortName('asc'))
iconUp[1].addEventListener('click', () => sortName('desc'));


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

