const API_KEY = "78f91203b9ea6e5474fcfb2af86c432a";

function onGeoOk(position) {
    // get latitude and longitude from automatic param position
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(`You live in (${lat}, ${long})`);
}

// function to run if not able to get location
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

// getting the location of the user
// param: function if success, function if failure
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
