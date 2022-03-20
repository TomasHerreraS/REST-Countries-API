const select = document.getElementById('select');




const option = (data) => {
    select.addEventListener('change', async(e) => {
        e.preventDefault();
    
        const value = select.value;
        console.log(value);

        const optionFilter = data.filter(item => {
            const region = item.region.toLowerCase();
            if(region.indexOf(value) !==-1 ){
                return item
            }
        })

        pintarCard(optionFilter);
        
    })

}