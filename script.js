const searchbtn = document.querySelector(".search");
const searchinput = document.querySelector(".search-input");
const emplacementEl = document.querySelector(".location");
const temperature = document.querySelector(".temperature");

searchbtn.addEventListener('click', function() {
    const ville = searchinput.value; // Correction : .value au lieu de .values
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=148e7384e2b0f72b779dee3400945b03`)
    .then(response => response.json())
    .then(donnees => {
        emplacementEl.textContent = donnees.name;
        temperature.textContent = `température: ${donnees.main.temp} °F`; // Utilisation de backticks pour les templates literals
    })
    .catch(error => console.error('Erreur :', error)); // Ajout de gestion des erreurs
});
