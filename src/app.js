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
    let displayCity = document.querySelector("h1");
    let displayDate = document.querySelector("#today");
    let displayDescription = document.querySelector("#weather-description");
    let displayHumidity = document.querySelector("#humidity");
    let displayIcon = document.querySelector("#current-icon");
    let displayTemperature = document.querySelector("#degrees");
    let displayWind = document.querySelector("#wind");

    displayCity.innerHTML = response.data.city;
    displayDate.innerHTML = showDate(response.data.time * 1000);
    displayDescription.innerHTML = response.data.condition.description;
    displayHumidity.innerHTML = Math.round(response.data.temperature.humidity);
    displayIcon.setAttribute("src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
    displayIcon.setAttribute("alt", response.data.condition.description);
    displayTemperature.innerHTML = Math.round(response.data.temperature.current);
    displayWind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "7a45btfdd9a2a5b0bb56a376f3of7ede";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}`;

axios.get(apiUrl).then(showTemperature);