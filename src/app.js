function showDate(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
    let displayDate = document.querySelector("#today");
    let displayDescription = document.querySelector("#weather-description");
    let displayHumidity=document.querySelector("#humidity")
    let displayTemperature = document.querySelector("#degrees");
    let displayWind = document.querySelector("#wind");

    displayDate.innerHTML = showDate(response.data.dt * 1000);
    displayDescription.innerHTML = response.data.weather[0].description;
    displayHumidity.innerHTML = Math.round(response.data.main.humidity);
    displayTemperature.innerHTML = Math.round(response.data.main.temp);
    displayWind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "0f509ad15c6d67d8d05c0fcc1b2ebde2";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);