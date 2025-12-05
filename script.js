const searchCityInput = document.querySelector("#searchCity");
const searchCityBtn = document.querySelector(".search-btn");

// bydefault city name
const cityName = "New Delhi";
document.querySelector(".city").textContent = cityName;

const apiKey = "94e0815485c0e16c10267c3b8e0dcc96";


async function fetchWeatherData(apiUrl)
{
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            alert("City not found");
        }
        const data = await response.json();
        console.log(data);

        // update the UI page with fetched data
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
        document.querySelector(".max-temp").textContent = `Max Temp: ${Math.round(data.main.temp_max)}°C`;
        document.querySelector(".min-temp").textContent = `Min Temp: ${Math.round(data.main.temp_min)}°C`;
        document.querySelector(".feels-like").textContent = `Feels Like: ${Math.round(data.main.feels_like)}°C`;
        document.querySelector(".visibility").textContent = `${data.visibility};`;
    }
    catch(error){
        console.log("Error in fetching weather data:", error);
        alert("Unable to fetch weather details. Check city name or your internet.");
    }
}

// by default, fetch weather data for "New Delhi"
fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`);


// Event listener for search button
searchCityBtn.addEventListener("click", () => {
    const cityName = searchCityInput.value.trim();  // get latest value
    if (!cityName) {
        alert("Please enter a city name 🙂");
        return;
    }
    else{
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
        fetchWeatherData(apiUrl);
    }
})

searchCityInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        searchCityBtn.click();
    }
})
























// // 1. Get the INPUT element (not its value directly)
// const searchCityInput = document.querySelector("#searchCity");
// const searchCityBtn = document.querySelector(".search-btn");

// const apiKey = "94e0815485c0e16c10267c3b8e0dcc96";

// // 2. Add event listener on button
// searchCityBtn.addEventListener("click", () => {
//     const cityName = searchCityInput.value.trim();  // get latest value

//     if (!cityName) {
//         alert("Please enter a city name 🙂");
//         return;
//     }

//     fetchWeatherData(cityName);
// });

// // (Optional but useful) — allow Enter key to work also
// searchCityInput.addEventListener("keyup", (event) => {
//     if (event.key === "Enter") {
//         searchCityBtn.click();
//     }
// });

// // 3. Function to fetch weather data
// async function fetchWeatherData(cityName) {
//     // Build URL *inside* the function using latest cityName
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error("City not found");
//         }

//         const data = await response.json();
//         console.log(data);

//         // 4. Update your UI using the API data
//         document.querySelector(".city").textContent = data.name;
//         document.querySelector(".temp").textContent = `${Math.round(
//             data.main.temp
//         )}°C`;
//         document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
//         document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
//     } catch (error) {
//         console.log("Error in fetching weather data:", error);
//         alert("Unable to fetch weather details. Check city name or your internet.");
//     }
// }