# Weather App

A sleek, modern weather application that fetches real-time weather data from the OpenWeatherMap API.  
Designed with a clean UI featuring a dark background and a stylish gradient card, this app displays temperature, humidity, wind speed, and weather conditions for any searched city.



## Features

- Responsive, centered layout with smooth linear gradient background card  
- Search for any city and fetch live weather data using OpenWeatherMap API  
- Dynamic weather icons matching current conditions  
- Displays temperature (°C), city name, humidity (%), and wind speed (km/h)  
- Error handling for invalid city names with a user-friendly message  
- Custom icons for humidity and wind speed  
- Accessible and simple user interface

  <img width="1892" height="836" alt="image" src="https://github.com/user-attachments/assets/cc6d836a-049e-4256-81bf-e4f257aad240" />



## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)  
- An OpenWeatherMap API key. You can get one for free at [https://openweathermap.org/api](https://openweathermap.org/api)

### Installation

1. Clone or download this repository.  
2. Replace `"YOUR_API_KEY_HERE"` in `script.js` with your OpenWeatherMap API key.  
3. Ensure your icons are placed correctly or the image paths in the HTML match your icon files.  
4. Open `index.html` in your web browser.

---

## File Structure


/
├── index.html # Main HTML file with structure and placeholders
├── style.css # Styles for layout, colors, and typography
├── script.js # JavaScript file handling API calls and DOM updates
├── humidity-icon.png # Icon image for humidity (replace or update path accordingly)
├── wind-icon.png # Icon image for wind speed (replace or update path accordingly)
├── search-icon.png # Search icon used in the search button
└── README.md # This file


---

## Usage

- Type the city name in the input box and press the search button.  
- The app will display the current weather for that city including temperature, humidity, wind speed, and a weather icon.  
- If the city is invalid or not found, an error message will display.




## Technologies Used

- HTML5  
- CSS3 (Flexbox, gradients)  
- Vanilla JavaScript (Fetch API)  
- OpenWeatherMap API  

Thank you for checking out my Weather App project!


