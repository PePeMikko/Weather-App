/*
function getWeather () {
    const apikey = "9644d4c6725e6d02289f7a3894ae44c6";
    const cityValue = "Helsinki";

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric')
}
*/

let weather = [];
const apikey = "9644d4c6725e6d02289f7a3894ae44c6";
const cityInput = document.querySelector('.js-city');

document.querySelector('.js-weather')
    .addEventListener('click', (event) => {
        let weatherHTML = '';

        const cityValue = cityInput.value;
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            weather = JSON.parse(xhr.response);
            console.log(xhr.response);

            weatherHTML += /* html */ `
                <div class="temp">${Math.floor(weather.main.temp)}°C</div>
                <div class="desc">${weather.weather[0].main}</div>
                <div class="desc2">Feels like: ${Math.floor(weather.main.feels_like)}</div>
                <div class="desc2">Humidity: ${weather.main.humidity}%</div>
                <div class="desc2">Wind Speed: ${weather.wind.speed} m/s</div>
            `
            document.querySelector('.js-three').innerHTML = weatherHTML;
        });
            xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
            xhr.send();
    });