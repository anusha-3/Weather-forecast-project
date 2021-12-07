let loc = document.getElementById("location");
let tempicon = Document.getElementById("temp-icon");
let tempvalue = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");



window.addEventListener("load", () => {
    let long;
    let lat;
    const proxy="https://cors-anywhere.herokuapp.com/";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d24119cbfd4ced53a65d683bbb580182`;

            fetch(api).then((response) => {
                return response.json();
            })
            .then(data => 
                {
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];

                    loc.textContent = name;
                    cancelAnimationFrame.textContent = main;
                    tempvalue.textContent = Math.round(feels_like - 273)


                })
        }

})