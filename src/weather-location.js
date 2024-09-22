// 날씨와 위치 (geolocation)
const API_KEY = 'aaf9a8fc52b34c226265284825f81774';
const ICON_CLASSNAME = "icon";

const weatherContainer = document.querySelector("#weather-area span");
const weatherIcon = document.querySelector("#weather-area img");

function onGeoFound(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = data.name;
        const temp = Math.round(data.main.temp * 10) / 10;
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        console.log(iconUrl);
        weatherIcon.setAttribute('src', iconUrl);
        weatherIcon.parentElement.classList.remove(HIDDEN_CLASSNAME);
        weatherIcon.parentElement.classList.add(ICON_CLASSNAME);
        weatherContainer.innerText = `${city}, ${temp}℃`;
    });
}

function onGeoError() {
    weatherContainer.innerText = 'Somewhere on earth';

}

navigator.geolocation.getCurrentPosition(onGeoFound, onGeoError);