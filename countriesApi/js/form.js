form = document.querySelector('#formulario');
search = document.querySelector('#search');

const formularioPais = (data) => {
    form.addEventListener('keyup', async(e) => {
        e.preventDefault();

        const letraForm = search.value.toLowerCase();

        
        const formFilter = data.filter(item => {
            const nameApi = item.translations.spa.common.toLowerCase();
            if(nameApi.indexOf(letraForm) !== -1){
                return item;
            }  
        })
        pintarCard(formFilter);
    })
}