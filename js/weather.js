const API_KEY = "78f91203b9ea6e5474fcfb2af86c432a";

const locationSpan = document.getElementById("location");
const tempSpan = document.getElementById("temp");

function onGeoOk(position) {
    // get latitude and longitude from automatic param position
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            locationSpan.innerText = `${data.name}, ${data.sys.country}`
            tempSpan.innerText = `${data.main.temp}\u00B0C, ${data.weather[0].main}`
        })

}

// function to run if not able to get location
function onGeoError() {
    // alert("Can't find you. No weather for you.")
    locationSpan.innerText = "No location found";
    tempSpan.classList.add("hidden");
}

// getting the location of the user
// param: function if success, function if failure
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


