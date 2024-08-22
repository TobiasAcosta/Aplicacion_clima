let api_key ='f824e5a771e7088c72df274fc3fb89a5';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let difKelvin = 273.15;

const btnBusqueda = document.getElementById('botonBusqueda');

btnBusqueda.addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    
    if(ciudad){
        fetchDatosClima(ciudad);
    }    
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json() )
    .then(response => mostrarDatosClima(response)) //importante
}

function mostrarDatosClima(response){
    const elementoClima = document.getElementById('datosClima');
    
    elementoClima.innerHTML = '';
    const nameCity = response.name;
    const namePais = response.sys.country;
    const temperaturaData = response.main.temp;
    const descripcion= response.weather[0].description;
    const humedad = response.main.humidity;
    const temperatura = temperaturaData - difKelvin;

    const icon = response.weather[0].icon;
    const iconData = `https://openweathermap.org/img/wn/${icon}@2x.png`
    
    elementoClima.innerHTML = `
        <h2> ${nameCity}, ${namePais}</h2>
        <p> Temperatura: ${Math.round(temperatura)}°C</p>
        <p> Humedad: ${humedad}%</p>
        <img src="${iconData}">
        <p> Descripción: ${descripcion}</p>
    `;
}
