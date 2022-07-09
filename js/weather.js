const API_KEY = "add api key here";

function onGeoOk(position) {
    // get latitude and longitude from automatic param position
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    // fetch url
    fetch(url)
        .then(response => {response.json()}) 
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child")

            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

// function to run if not able to get location
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

// getting the location of the user
// param: function if success, function if failure
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
