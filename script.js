

//  const apiKey = '804c77e03329cbb12122cffa1a098d0a'; 

// const cities = ["Tanger", "Rabat", "Fes", "Kasba Tadla"];

// async function getWeatherData(city) {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Erreur :', error);
//     }
// }

// function displayWeather(city, data) {
//     const weatherContainer = document.getElementById('weather-container');
//     const weatherCard = document.createElement('div');
//     weatherCard.classList.add('weather-card');


//     const locationElement = document.createElement('div');

//     locationElement.classList.add('location');
//     locationElement.textContent = data.name;

//     const temperatureElement = document.createElement('div');

//     temperatureElement.textContent = `Température: ${data.main.temp} °C`;

//     const conditionsElement = document.createElement('div');
//     conditionsElement.textContent = `Conditions: ${data.weather[0].description}`;

//     const image = document.createElement('img');
//     image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
//     // switch (data.weather[0].description){
//     //     case 'Ensoleillé':
//     //         image.src = '';
//     //         break;
//     //     case 'Nuageux':
//     //         image.src = './cloudy.png';
//     //         break;
//     //     case 'Pluvieux':
//     //         image.src = './summer.png';
//     //         break;
//     //     case 'Neigeux':
//     //         image.src = './weather.png';
//     //         break;
//     //     case 'Venteux':
//     //         image.src = './weather.png';
//     //         break;    
//     //     case 'Orageux':
//     //         image.src = './weather.png';
//     //         break;
//     //     case 'Brouillard':
//     //         image.src = './weather.png';
//     //         break;
//     //     case 'Brume':
//     //         image.src = './weather.png';
//     //         break;
//     //     case 'pluie modérée':
//     //         image.src = './weather.png';
//     //         break;    
//     //     case 'légère pluie':
//     //         image.src = './weather.png';
//     //         break;

//     //     default:
//     //         image.src = './weather.png';
//     //         break;
//     // }

//     const humidityElement = document.createElement('div');
//     humidityElement.textContent = `Humidité: ${data.main.humidity}%`;

//     const windSpeedElement = document.createElement('div');
//     windSpeedElement.textContent = `Vitesse du vent: ${data.wind.speed} m/s`;

//     weatherCard.appendChild(locationElement);
//     weatherCard.appendChild(image);
//     weatherCard.appendChild(temperatureElement);
//     weatherCard.appendChild(conditionsElement);
//     weatherCard.appendChild(humidityElement);
//     weatherCard.appendChild(windSpeedElement);

//     weatherContainer.appendChild(weatherCard);
// }

// // Fonction principale pour obtenir et afficher les données météorologiques de chaque ville
// async function fetchAndDisplayWeather() {
//     for (const city of cities) {
//         const data = await getWeatherData(city);
//         displayWeather(city, data);
//         console.log(data);
//     }
// }

// // Appel de la fonction pour obtenir et afficher les données météorologiques
// fetchAndDisplayWeather();


// const searchCity = () => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemperature(data));


// const setInnerText = (id, text) =>{
//     document.getElementById(id).innerText = text;
// }
// displayWeather(city, data);



// }

const apiKey = '804c77e03329cbb12122cffa1a098d0a';
const cities = ["Tanger", "Rabat", "Fes", "Kasba Tadla"];

// Fonction pour obtenir les données météorologiques d'une ville donnée
async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur :', error);
    }
}

// Fonction pour afficher les données météorologiques dans une carte
function displayWeather(city, data) {
    const weatherContainer = document.getElementById('weather-container');
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    const locationElement = document.createElement('div');
    locationElement.classList.add('location');
    locationElement.textContent = city;

    const temperatureElement = document.createElement('div');
    temperatureElement.textContent = `Température: ${data.main.temp} °C`;

    const conditionsElement = document.createElement('div');
    conditionsElement.textContent = `Conditions: ${data.weather[0].description}`;

    const image = document.createElement('img');
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

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

async function fetchAndDisplayWeather() {
    for (const city of cities) {
        const data = await getWeatherData(city);
        displayWeather(city, data);
        console.log(data);
    }
}

fetchAndDisplayWeather();

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


function searchCity() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput.trim() !== '') {
      getWeatherData(searchInput)
        .then(data => {
            setInnerText('city', data.name);
            setInnerText('temp', data.main.temp);
            setInnerText('weather', data.weather[0].main);
            const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                const imgIcon = document.getElementById('image-icon');
                imgIcon.setAttribute('src', url);
        
          console.log(data);
        })
        .catch(err => console.error('Erreur lors de la recherche de la ville :', err));
    }
    
  }
  
