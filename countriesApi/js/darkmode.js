body = document.querySelector('.body');
header = document.querySelector('#header');
h4 = document.querySelector('h4');
icono = document.querySelector('.material-icons-outlined');
darkmode1 = document.querySelector('#pHeader');
form = document.querySelector('.form-control');
input = document.querySelector('#formulario');
cbox = document.querySelector('.form-select');
africa = document.querySelector('.africa');
america = document.querySelector('.america');
asia = document.querySelector('.asia');
europa = document.querySelector('.europa');
oceania = document.querySelector('.oceania');
// cardBody = document.querySelector('.card-body');
// cardTitle = document.querySelector('.card-title');
// cardPop = document.querySelector('.pop');
// cardPopulation = document.querySelector('.population');
// cardReg = document.querySelector('.reg');
// cardRegion = document.querySelector('.region');
// cardCap = document.querySelector('.cap');
// cardCapital = document.querySelector('.capital');

document.addEventListener('click',  (e) => {
    e.preventDefault();
    if (e.target.id === "pHeader" || e.target.id === "icon"){
        if(body.classList.contains('darkmode')){
            body.classList.remove('darkmode');
            header.classList.remove('darkmode');
            h4.classList.remove('darkmode');
            icono.classList.remove('darkmode');
            darkmode1.classList.remove('darkmode');
            form.classList.remove('darkmode');
            form.classList.remove('darked');
            input.classList.remove('darkmode');
            input.classList.remove('darked');
            cbox.classList.remove('darkmode');
            africa.classList.remove('darkmode');
            america.classList.remove('darkmode');
            asia.classList.remove('darkmode');
            europa.classList.remove('darkmode');
            oceania.classList.remove('darkmode');
        }
        else{
            body.classList.add('darkmode');
            header.classList.add('darkmode');
            h4.classList.add('darkmode');
            icono.classList.add('darkmode');
            darkmode1.classList.add('darkmode');
            form.classList.add('darkmode');
            form.classList.add('darked');
            input.classList.add('darked');
            input.classList.add('darkmode');
            africa.classList.add('darkmode');
            america.classList.add('darkmode');
            asia.classList.add('darkmode');
            europa.classList.add('darkmode');
            oceania.classList.add('darkmode');
            cbox.classList.add('darkmode');
        }
    }
});

