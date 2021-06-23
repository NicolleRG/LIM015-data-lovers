import data from './data/athletes/athletes.js';

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
            console.log(e.currentTarget.innerHTML);
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







console.log(example, data);
