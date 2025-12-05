````markdown
# 🌤 Weather Forecast App

A simple, clean weather app built with **HTML, CSS, and JavaScript** that lets you search for any city and instantly see its current weather conditions.

Type a city name, hit search (or press Enter), and you’ll get live data like temperature, humidity, wind speed, and visibility — all powered by the **OpenWeatherMap API**.

---

## ✨ Features

- 🔍 **City-based weather search**  
  Search any city in the world and get real-time weather data.

- 🌡 **Key weather details at a glance**
  - Current temperature (°C)  
  - Feels like temperature  
  - Max & min temperature  
  - Humidity (%)  
  - Wind speed (km/h)  
  - Visibility

- 🎨 **Clean, gradient-based UI**  
  A centered card layout with a modern glassy feel and icons for each metric.

- ⌨️ **Keyboard-friendly**  
  Press **Enter** inside the input to trigger the search.

- 📱 **Responsive card layout**  
  Designed to look good on both desktop and smaller screens.

---

## 🛠 Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling and layout
- **Vanilla JavaScript (ES6+)** – Fetching data and updating the UI
- **OpenWeatherMap API** – Live weather data

---

## 🚀 Getting Started

### 1. Clone or download the project

```bash
git clone <your-repo-url>
cd <project-folder>
````

Or just download the files and open them in your editor.

### 2. Get an API key from OpenWeatherMap

1. Go to the OpenWeatherMap website and create a free account.
2. Generate an **API key** from your dashboard.
3. In `script.js`, replace the placeholder key with your own:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

### 3. Run the project

You don’t need any backend for this.

* Simply open **`index.html`** in your browser.
* Or use a simple live server (like VS Code’s Live Server extension) for smoother reloading.

---

## 💡 How It Works

1. **Default State**

   * The app sets a default city:

     ```js
     const cityName = "New Delhi";
     ```
   * On load, it immediately fetches and displays the weather for this city.

2. **When user searches a city**

   * It reads the value from:

     ```js
     const cityName = searchCityInput.value.trim();
     ```
   * If the input is empty, it shows a friendly alert.
   * Otherwise, it builds a request URL:

     ```js
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
     ```
   * Then it calls:

     ```js
     fetchWeatherData(apiUrl);
     ```

3. **Fetching data**

   * `fetchWeatherData` uses `fetch()` + `async/await` to call the API.
   * On success, it updates:

     * `.city`
     * `.temp`
     * `.feels-like`
     * `.max-temp`
     * `.min-temp`
     * `.humidity`
     * `.wind`
     * `.visibility`

4. **Error handling**

   * If the city is invalid or the response is not OK, it alerts:

     > City not found
   * If there’s a network or other error, it logs it and shows a generic warning.

---

## 🧱 Folder / File Structure

```text
project-folder/
│
├── index.html      # Main HTML markup
├── style.css       # App styling
├── script.js       # Core JavaScript logic
└── icon/           # Weather, humidity, wind, visibility icons
    ├── search.webp
    ├── weather.webp
    ├── humidity.webp
    ├── wind.webp
    └── visibility.webp
```

---

## 🔮 Possible Improvements

This version is intentionally simple, but you can easily extend it:

* Change weather icon based on actual conditions (clear, rain, clouds, etc.).
* Show country code, sunrise/sunset time, or description (`"Clear sky"`, `"Light rain"`, etc.).
* Add error messages inline on the UI instead of using `alert`.
* Add loading states while fetching data.
* Convert visibility from meters to kilometers for cleaner display.

---

## ✅ Summary

This project is a neat starting point for working with **APIs**, **DOM updates**, and **basic frontend UI**.
It’s small enough to understand in one sitting but real enough to feel like an actual app.

Tweak it, break it, improve it — that’s where the real learning happens.

```
```
