const banderas = document.querySelector("#cardBoss")


document.addEventListener("DOMContentLoaded", () => {
    getData();
});



const getData = async () => {
    try{
        const res = await fetch ('https://restcountries.com/v3.1/all');
        const data = await res.json();
        pintarCard(data);
        formularioPais(data); //form.js
        option(data) //select.js
    }catch(error){
        console.log(error);
    };
};


const pintarCard = (data) => {
    
    let elementos = '';
    data.forEach(item => {
        elementos += `
        <section class="card col-12 col-sm-12 col-md-5 col-lg-2 p-0 mt-5 shadow-sm">
                    <img src="${item.flags.png}" class="rounded-top">
                    <article class="card-body">
                        <h5 class="card-title">${item.translations.spa.common}</h5>
                        <article>
                            <h5 class="card-text mb-1 d-inline pop">Population:
                                <p class="text d-inline ps-1 population">${item.population}</p>
                            </h5>
                        </article>
                        <article>
                            <h5 class="card-text mb-1 d-inline reg">Region:
                                <p class="text d-inline ps-1 region">${item.region}</p>
                            </h5>
                        </article>
                        <article>
                            <h5 class="card-text mb-1 d-inline cap">Capital:
                                <p class="text d-inline ps-1 capital">${item.capital}</p>
                            </h5>
                        </article>
                    </article>
                </section>
        `
    });
    banderas.innerHTML = elementos;
};

