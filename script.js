

 const apiKey = '804c77e03329cbb12122cffa1a098d0a'; 

const cities = ["Tanger", "Rabat", "Fes", "Kasba Tadla"];

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur :', error);
    }
}

function displayWeather(city, data) {
    const weatherContainer = document.getElementById('weather-container');
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');


    const locationElement = document.createElement('div');

    locationElement.classList.add('location');
    locationElement.textContent = data.name;

    const temperatureElement = document.createElement('div');

    temperatureElement.textContent = `Température: ${data.main.temp} °C`;

    const conditionsElement = document.createElement('div');
    conditionsElement.textContent = `Conditions: ${data.weather[0].description}`;

    const image = document.createElement('img');
    switch (data.weather[0].description){
        case 'clear':
            image.src = '';
            break;
        case 'nuageux':
            image.src = './cloudy.png';
            break;
        case 'partiellement nuageux':
            image.src = './summer.png';
            break;
        case 'ciel dégagé':
            image.src = './weather.png';
            break;
        default:
            image.src = './weather.png';
            break;
    }

    const humidityElement = document.createElement('div');
    humidityElement.textContent = `Humidité: ${data.main.humidity}%`;

    const windSpeedElement = document.createElement('div');
    windSpeedElement.textContent = `Vitesse du vent: ${data.wind.speed} m/s`;

    weatherCard.appendChild(locationElement);
    weatherCard.appendChild(image);
    weatherCard.appendChild(temperatureElement);
    weatherCard.appendChild(conditionsElement);
    weatherCard.appendChild(humidityElement);
    weatherCard.appendChild(windSpeedElement);

    weatherContainer.appendChild(weatherCard);
}

// Fonction principale pour obtenir et afficher les données météorologiques de chaque ville
async function fetchAndDisplayWeather() {
    for (const city of cities) {
        const data = await getWeatherData(city);
        displayWeather(city, data);
        console.log(data);
    }
}

// Appel de la fonction pour obtenir et afficher les données météorologiques
fetchAndDisplayWeather();