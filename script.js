const searchCityInput = document.querySelector("#searchCity");
const searchCityBtn = document.querySelector(".search-btn");

const cityNotFoundError = document.querySelector(".city-not-found-error");

// bydefault city name
const cityName = "New Delhi";

const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "94e0815485c0e16c10267c3b8e0dcc96";


async function fetchWeatherData(apiUrl)
{
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            cityNotFoundError.style.display = "block";
            document.querySelector(".weather").style.display = "none";
            // alert("City not found");
            return;            
        }

        const data = await response.json();
        console.log(data);

        // hide error when data is valid
        cityNotFoundError.style.display = "none";
        
        // update the UI page with fetched data
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
        document.querySelector(".max-temp").textContent = `Max Temp: ${Math.round(data.main.temp_max)}°C`;
        document.querySelector(".min-temp").textContent = `Min Temp: ${Math.round(data.main.temp_min)}°C`;
        document.querySelector(".feels-like").textContent = `Feels Like: ${Math.round(data.main.feels_like)}°C`;
        document.querySelector(".visibility").textContent = `${data.visibility}`;

        const mainWeather = data.weather[0].main;

        if(mainWeather === "Clouds"){
            weatherIcon.src = "icon/cloudy.webp";
        }
        else if(mainWeather === "Thunderstorm"){
            weatherIcon.src = "icon/thunderstorm.webp";        
        }
        else if(mainWeather === "Drizzle"){          // fixed spelling
            weatherIcon.src = "icon/thunderstorm.webp";        
        }
        else if(mainWeather === "Rain"){
            weatherIcon.src = "icon/rainy.webp";        
        }   
        else if(mainWeather === "Snow"){             // fixed case
            weatherIcon.src = "icon/snow.webp";        
        }
        else if(mainWeather === "Mist"){
            weatherIcon.src = "icon/mist.webp";
        }
        else if(mainWeather === "Haze"){
            weatherIcon.src = "icon/haze.webp";        
        }
        else if(mainWeather === "Dust"){
            weatherIcon.src = "icon/dust.webp";        
        }
        else if(mainWeather === "Fog"){
            weatherIcon.src = "icon/fog.webp";        
        }
        else if(mainWeather === "Sand"){
            weatherIcon.src = "icon/sand.webp";        
        }
        else if(mainWeather === "Ash"){              // fixed "Ashr" → "Ash"
            weatherIcon.src = "icon/ash.webp";        
        }
        else if(mainWeather === "Squall"){
            weatherIcon.src = "icon/squall.webp";        
        }
        else if(mainWeather === "Tornado"){
            weatherIcon.src = "icon/tornado.webp";        
        }
        else{
            weatherIcon.src = "icon/clear.webp";        
        }

        document.querySelector(".weather").style.display = "block";
    }
    catch(error){
        // console.log("Error in fetching weather data:", error);
        // alert("Unable to fetch weather details. Check city name or your internet.");
        cityNotFoundError.style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
}


// Event listener for search button
searchCityBtn.addEventListener("click", () => {
    const cityName = searchCityInput.value.trim();  // get latest value
    if (!cityName) {
        alert("Please enter a city name 🙂");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;

    fetchWeatherData(apiUrl);

    searchCityInput.value = "";
})

searchCityInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        searchCityBtn.click();
    }
})
