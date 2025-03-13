const apiKey = 'cb66ab68a05843934fc626e1ad60d5d3';
const locButton = document.querySelector('.loc-button');
const todayInfo = document.querySelector('.today-info');
const todayWeatherIcon = document.querySelector('.today-weather i');
const todayTemp = document.querySelector('.weather-temp');
const daysList = document.querySelector('.days-list');

const weatherIconMap = {
    '01d': 'sun', '01n': 'moon', '02d': 'sun', '02n': 'moon',
    '03d': 'cloud', '03n': 'cloud', '04d': 'cloud', '04n': 'cloud',
    '09d': 'cloud-rain', '09n': 'cloud-rain', '10d': 'cloud-rain', '10n': 'cloud-rain',
    '11d': 'cloud-lightning', '11n': 'cloud-lightning', '13d': 'cloud-snow', '13n': 'cloud-snow',
    '50d': 'water', '50n': 'water'
};

function fetchWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric&lang=pt_br`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== "200") {
                alert("Localização não encontrada. Tente novamente!");
                return;
            }
            
            const todayWeather = data.list[0].weather[0].description;
            const todayTemperature = `${Math.round(data.list[0].main.temp)}°C`;
            const todayWeatherIconCode = data.list[0].weather[0].icon;
            
            todayInfo.querySelector('h2').textContent = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
            todayInfo.querySelector('span').textContent = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });           
            todayWeatherIcon.className = `bx bx-${weatherIconMap[todayWeatherIconCode]}`;
            todayTemp.textContent = todayTemperature;
            
            document.querySelector('.today-info div span').textContent = `${data.city.name}, ${data.city.country}`;
            document.querySelector('.today-weather h3').textContent = todayWeather;
            
            document.querySelector('.day-info').innerHTML = `
                <div><span class="title">Chance de Chuva</span><span class="value">${data.list[0].pop * 100}%</span></div>
                <div><span class="title">Umidade do Ar</span><span class="value">${data.list[0].main.humidity}%</span></div>
                <div><span class="title">Velocidade do Vento</span><span class="value">${data.list[0].wind.speed} km/h</span></div>
            `;
            
            const hoje = new Date();
            const proximosDias = data.list.slice(1);
            const diasUnicos = new Set();
            let count = 0;
            daysList.innerHTML = '';
            
            for (const dayData of proximosDias) {
                const forecastDate = new Date(dayData.dt_txt);
                const diaAbreviado = forecastDate.toLocaleDateString('pt-BR', { weekday: 'short' });
                if (!diasUnicos.has(diaAbreviado) && forecastDate.getDate() !== hoje.getDate()) {
                    diasUnicos.add(diaAbreviado);
                    daysList.innerHTML += `
                        <li>
                            <i class='bx bx-${weatherIconMap[dayData.weather[0].icon]}'></i>
                            <span>${diaAbreviado}</span>
                            <span class="day-temp">${Math.round(dayData.main.temp)}°C</span>
                        </li>
                    `;
                    count++;
                }
                if (count === 4) break;
            }
        })
        .catch(error => {
            alert(`Erro ao buscar os dados: ${error.message}`);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData('Caxias do Sul, BR');
});

locButton.addEventListener('click', () => {
    const location = prompt('Digite a localização desejada:');
    if (location) {
        fetchWeatherData(location);
    }
});