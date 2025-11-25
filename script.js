const apiKey = "91f3e6421744263c101b250bb4979bc1"; // Replace with your key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const form = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const errorMessage = document.getElementById("errorMessage");

// Map weather condition to icon URLs
const weatherIcons = {
  Clear: "https://openweathermap.org/img/wn/01d@2x.png",
  Clouds: "https://openweathermap.org/img/wn/03d@2x.png",
  Rain: "https://openweathermap.org/img/wn/09d@2x.png",
  Drizzle: "https://openweathermap.org/img/wn/10d@2x.png",
  Thunderstorm: "https://openweathermap.org/img/wn/11d@2x.png",
  Snow: "https://openweathermap.org/img/wn/13d@2x.png",
  Mist: "https://openweathermap.org/img/wn/50d@2x.png"
};

async function fetchWeather(city) {
  errorMessage.hidden = true;
  weatherDisplay.hidden = true;

  try {
    const response = await fetch(apiUrl + encodeURIComponent(city) + `&appid=${apiKey}`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    cityName.textContent = data.name;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;

    const condition = data.weather[0].main;
    weatherIcon.src = weatherIcons[condition] || weatherIcons.Clear;
    weatherIcon.alt = condition;

    weatherDisplay.hidden = false;
  } catch (error) {
    errorMessage.hidden = false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

 