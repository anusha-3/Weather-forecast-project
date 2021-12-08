let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


searchButton.addEventListener('click',(e)=>
{

e.preventDefault();
getweather(searchInput.value);
searchInput.value='';



});

const getweather=async(city)=>
{
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d24119cbfd4ced53a65d683bbb580182`,


        {mode:'cors'}
        );

        const weatherData=await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id>200 && id<300){
            tempicon.src="Thunderstorm.png"
        }
        else if(id>300 && id<500){
            tempicon.src="Drizzle.png"
        }
        else if(id>500 && id<600){
            tempicon.src="Rain.png"
        }
        else if(id>600 && id<700){
            tempicon.src="Snowflake.png"
        }
        else if(id>700 && id<800){
            tempicon.src="Atmosphere.png"
        }
        else if(id==800){
            tempicon.src="Clear.png"
        }
        else {
            tempicon.src="Clouds.png"
        }
    }

catch(error){
    alert('City not found!!');
}
};



window.addEventListener("load", () => {
    let long;
    let lat;
    const proxy = "https://cors-anywhere.herokuapp.com/";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d24119cbfd4ced53a65d683bbb580182`;

            fetch(api).then((response) => {
                return response.json();
            })
                .then(data => {
                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];

                    loc.textContent = name;
                    climate.textContent = main;
                    tempvalue.textContent = Math.round(feels_like - 273)
                    console.log(data); 
                    if(id>200 && id<300){
                        tempicon.src="Thunderstorm.png"
                    }
                    else if(id>300 && id<500){
                        tempicon.src="Drizzle.png"
                    }
                    else if(id>500 && id<600){
                        tempicon.src="Rain.png"
                    }
                    else if(id>600 && id<700){
                        tempicon.src="Snowflake.png"
                    }
                    else if(id>700 && id<800){
                        tempicon.src="Atmosphere.png"
                    }
                    else if(id==800){
                        tempicon.src="Clear.png"
                    }
                    else {
                        tempicon.src="Clouds.png"
                    }
                    console.log(data);

                })
        }


        )
    }
})