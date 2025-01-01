const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherImage = document.getElementById("weather-icon-id");

function updateDateAndDay() {
    const dateElement = document.getElementById("current-date");
    const dayElement = document.getElementById("current-day");

    const now = new Date();

    const date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const day = now.toLocaleDateString("en-GB", { weekday: "long" });

    dateElement.textContent = date;
    dayElement.textContent = day;
}

updateDateAndDay();


const defaultCity = "Florence";

async function checkWeather(city) {
    try{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
            
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure+ " hPa";
    document.querySelector(".windDirection").innerHTML = data.wind.deg+ "°";
    const iconCode = data.weather[0].icon;
    const icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherImage.src = icon;
    }catch (err){
        console.log(err);
    }
}

searchBtn.addEventListener("click",()=>{
    const city = searchBox.value
    if (city){
        checkWeather(city);
}else{
    alert("please enter city name");
}
});

window.addEventListener("load", () => {
    checkWeather(defaultCity);
});
