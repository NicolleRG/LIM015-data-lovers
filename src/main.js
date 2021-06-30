import {sortData} from './data.js';
import data from './data/athletes/athletes.js';

const dataAthletes = data.athletes;// array de objetos de atletas
const imgColumn1 = document.querySelectorAll('.table-content img');
const nocTextColumn1 =document.querySelectorAll('.noc-text');
const avatarColumn2 = document.querySelectorAll('.avatar');
const nameColumn2 = document.querySelectorAll('.name-text');
const sportColumn3 = document.querySelectorAll('.sport-text');
 
const showDataTable = (data,startIndexItem) =>{
   for(let i = 0; i<20 ; i++){ 
        const item = data[i+startIndexItem];
        imgColumn1[i].src = `./img-paises/${item.team}.png`;
        nocTextColumn1[i].textContent = item.noc;
        nameColumn2[i].textContent = item.name;
        avatarColumn2[i].textContent = item.gender;
        sportColumn3[i].textContent = item.sport;
    }
}
showDataTable(dataAthletes,0);

//const pages = dataAthletes.length/rowsNum; //135 páginas aprox.
//console.log(pages);

const nextIcon = document.querySelectorAll('.next-icon');
const previousIcon = document.querySelectorAll('.previous-icon');
let rowsNum = 0;
function showNextData() {
    rowsNum = rowsNum + 20;
    showDataTable(dataAthletes,rowsNum);
    //console.log(rowsNum);
} 
nextIcon[0].addEventListener('click',showNextData);

function showPreviousData() {
    rowsNum===0 ? showDataTable(dataAthletes,0): rowsNum=rowsNum-20;
    //console.log(rowsNum);
    showDataTable(dataAthletes,rowsNum);
}
previousIcon[0].addEventListener('click',showPreviousData);

/*Orden alfabético por noc, nombre, sport */

const iconUp =document.querySelectorAll('.icon-up');
const iconDown =document.querySelectorAll('.icon-down');

iconDown[0].addEventListener('click',function(){ 
    rowsNum=0;
    showDataTable(dataAthletes,rowsNum);
    //console.log(sortData(dataAthletes,'noc'));
    sortData(dataAthletes,'noc','desc').forEach((item,index)=>{
        imgColumn1[index].src = `./img-paises/${item.team}.png`;
        nocTextColumn1[index].textContent = item.noc;
        nameColumn2[index].textContent = item.name;
        avatarColumn2[index].textContent = item.gender;
        sportColumn3[index].textContent = item.sport;
    }) 
})

iconDown[1].addEventListener('click',function(){ 
    rowsNum=0;
    showDataTable(dataAthletes,rowsNum);
    sortData(dataAthletes,'name','desc').forEach((item,index)=>{
        imgColumn1[index].src = `./img-paises/${item.team}.png`;
        nocTextColumn1[index].textContent = item.noc;
        nameColumn2[index].textContent = item.name;
        avatarColumn2[index].textContent = item.gender;
        sportColumn3[index].textContent = item.sport;
    }) 
})
iconDown[2].addEventListener('click',function(){ 
    rowsNum=0;
    showDataTable(dataAthletes,rowsNum);
    //console.log(sortData(dataAthletes,'noc'));
    sortData(dataAthletes,'sport','desc').forEach((item,index)=>{
        imgColumn1[index].src = `./img-paises/${item.team}.png`;
        nocTextColumn1[index].textContent = item.noc;
        nameColumn2[index].textContent = item.name;
        avatarColumn2[index].textContent = item.gender;
        sportColumn3[index].textContent = item.sport;
    }) 
})

iconUp[0].addEventListener('click',function(){ 
    rowsNum=0;
    showDataTable(dataAthletes,rowsNum);
    //console.log(sortData(dataAthletes,'noc'));
    sortData(dataAthletes,'noc','asc').forEach((item,index)=>{
        imgColumn1[index].src = `./img-paises/${item.team}.png`;
        nocTextColumn1[index].textContent = item.noc;
        nameColumn2[index].textContent = item.name;
        avatarColumn2[index].textContent = item.gender;
        sportColumn3[index].textContent = item.sport;
    }) 
})
iconUp[1].addEventListener('click',function(){ 
    rowsNum=0;
    showDataTable(dataAthletes,rowsNum);
    //console.log(sortData(dataAthletes,'name'));
    sortData(dataAthletes,'name','asc').forEach((item,index)=>{
        imgColumn1[index].src = `./img-paises/${item.team}.png`;
        nocTextColumn1[index].textContent = item.noc;
        nameColumn2[index].textContent = item.name;
        avatarColumn2[index].textContent = item.gender;
        sportColumn3[index].textContent = item.sport;
    }) 
})
iconUp[2].addEventListener('click',function(){ 
    rowsNum=0;
    showDataTable(dataAthletes,rowsNum);
    //console.log(sortData(dataAthletes,'sport'));
    sortData(dataAthletes,'sport','asc').forEach((item,index)=>{
        imgColumn1[index].src = `./img-paises/${item.team}.png`;
        nocTextColumn1[index].textContent = item.noc;
        nameColumn2[index].textContent = item.name;
        avatarColumn2[index].textContent = item.gender;
        sportColumn3[index].textContent = item.sport;
    }) 
})

function groupBy(key){
    return function group(array){
        return array.reduce((acc,obj)=>{
            const property = obj[key]; 
            acc[property] = acc[property] || [];
            acc[property].push(obj);
            return acc;
        }, {});
    };
}
const groupByName = groupBy("name");
groupByName(dataAthletes.slice(0,7));
console.log(groupByName(dataAthletes.slice(0,7)));





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



