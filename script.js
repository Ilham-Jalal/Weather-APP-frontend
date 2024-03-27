document.addEventListener('DOMContentLoaded', function () {
    const searchbtn = document.querySelector(".search");
    const searchinput = document.querySelector(".search-input");
    const emplacementEl = document.querySelectorAll(".LOCATION");
    const temperature = document.querySelectorAll(".temperature");
    const humidity = document.querySelectorAll(".humidité");
    const vitesseVent = document.querySelectorAll(".vitesse");

    searchbtn.addEventListener('click', function () {
        const apiKey = '804c77e03329cbb12122cffa1a098d0a';
        const city = searchinput.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(res => res.json())
            .then(donnees => {
                emplacementEl.forEach(el => el.textContent = donnees.name);
                temperature.forEach(el => el.textContent = `température: ${donnees.main.temp} °C`);
                humidity.forEach(el => el.textContent = `humidité: ${donnees.main.humidity}%`);
                vitesseVent.forEach(el => el.textContent = `vitesse du vent: ${donnees.wind.speed} m/s`);
            })
            .catch(error => console.error('Erreur :', error));
    });
});



// const apiKey = '804c77e03329cbb12122cffa1a098d0a'; // Replace with your actual API key
// const city = 'kasba tadla'; // Replace with the desired city
// let weatherdt ={};

//     async function weatherData() {
//       let weatherData;

//       const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

//       weatherData = await res.json();
//         if(weatherData){
//         weatherdt = weatherData;
//         }
//     }

// weatherData();
// setTimeout(function(){
// console.log(weatherdt)

// document.getElementById('LOCATION').textContent = weatherdt.name;
// document.getElementById('temperature').textContent = weatherdt.main.temp+ ' °C';
// document.getElementById('humidité').textContent = weatherdt.main.humidity+ ' %';
// document.getElementById('vitesse').textContent = weatherdt.wind.speed ;
// document.getElementById('description').textContent = weatherdt.weather[0].description;
// },1000)

