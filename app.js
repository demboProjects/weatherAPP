window.addEventListener("load", () => {
    let latitude;
    let longitude;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            console.log("latitude: ", latitude, "\nlongitude: ", longitude);
        })
    }
})
console.log("é isso ai");