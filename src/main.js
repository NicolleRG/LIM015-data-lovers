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


/*prueba*/

document.querySelector('#btn').addEventListener('click', traerDatos);

function traerDatos(){

    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'athletes.json', true)
    xhttp.send(); //enviar esto
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){

            console.log(this.responseText);
            let datos= JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#res')
            res.innerHTML= ' ';

            for(let item of datos){
                console.log(item.event);
            }
        }
    }
}





console.log(example, data);
