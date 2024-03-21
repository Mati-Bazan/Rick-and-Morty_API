//Personajes
const apiRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/character?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data)
    divRes=document.querySelector("#resultado")
    divRes.innerHTML= ""
    data.results.map(item =>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Estatus: </b>${item.status}</p>
                <p class="card-text"><b>Especie: </b>${item.species}</p>
                <p class="card-text"><b>Genero: </b>${item.gender}</p>
            </div>
        </div>
        `
        divRes.appendChild(divItem)
    })
}

apiRick(1)

//Ubicaciones 
const apiRickLocate = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/location?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data)
    divRes=document.querySelector("#locate_resultado")
    divRes.innerHTML= ""
    data.results.map(item =>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Tipo: </b>${item.type}</p>
                <p class="card-text"><b>Dimension: </b>${item.dimension}</p>
                <p class="card-text"><b>Creado: </b>${item.created}</p>
            </div>
        </div>
        `
        divRes.appendChild(divItem)
    })
}

apiRickLocate(1)

// Episodios
const apiRickEpi = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/episode?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data)
    divRes=document.querySelector("#resultado_epi")
    divRes.innerHTML= ""
    data.results.map(item =>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Estreno: </b>${item.air_date}</p>
                <p class="card-text"><b>Episodio: </b>${item.episode}</p>
                <p class="card-text"><b>Creado: </b>${item.created}</p>
            </div>
        </div>
        `
        divRes.appendChild(divItem)
    })
}

apiRickEpi(1)