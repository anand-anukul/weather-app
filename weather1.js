const apiKey = "e6b6bc6a74dff2d40c14e3866e51b9be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const weatherIcon=document.querySelector(".weather-icon");

searchBtn.addEventListener("click" ,()=>{
    checkWeather(searchBox.value);
})

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind_speed").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src=="rain.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src=="mist.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src=="clearsky.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src=="drizzle.ico";
    }
    
    document.querySelector(".weather").style.display="block";
}




