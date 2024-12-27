const apiKey = 'e3b6282e97195a6fc117d4d7943b1414';  

// Function to fetch weather data from OpenWeatherMap API
const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === "404") {
      alert("City not found!");
    } else {
      // Display weather data
      document.getElementById('location-name').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temp').textContent = `${data.main.temp}°C`;
      document.getElementById('weather-type').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('wind-speed').textContent = `Wind: ${data.wind.speed} km/h`;
    }
  } catch (error) {
    alert('Error fetching weather data');
  }
};

// Event listener for the "Get Weather" button
document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('location-input').value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

// Optional: Add event listener for pressing 'Enter' to get the weather
document.getElementById('location-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = document.getElementById('location-input').value;
    if (city) {
      getWeather(city);
    } else {
      alert("Please enter a city name");
    }
  }
});
// function getWeather() {
//     const apiKey = 'e3b6282e97195a6fc117d4d7943b1414'; // Replace with your valid OpenWeather API key
//     const city = document.getElementById('city').value;

//     if (!city) {
//         alert('Please enter a city');
//         return;
//     }

//     const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

//     // Fetch current weather
//     fetch(currentWeatherUrl)
//         .then(response => {
//             if (!response.ok) throw new Error('City not found');
//             return response.json();
//         })
//         .then(data => {
//             displayWeather(data);
//         })
//         .catch(error => {
//             console.error('Error fetching current weather data:', error);
//             alert('Error: ' + error.message);
//         });

//     // Fetch weather forecast
//     fetch(forecastUrl)
//         .then(response => {
//             if (!response.ok) throw new Error('City not found');
//             return response.json();
//         })
//         .then(data => {
//             displayHourlyForecast(data.list);
//         })
//         .catch(error => {
//             console.error('Error fetching forecast data:', error);
//             alert('Error: ' + error.message);
//         });
// }

// function displayWeather(data) {
//     const tempDivInfo = document.getElementById('temp-div');
//     const weatherInfoDiv = document.getElementById('weather-info');
//     const weatherIcon = document.getElementById('weather-icon');
//     const hourlyForecastDiv = document.getElementById('hourly-forecast');

//     // Clear previous data
//     weatherInfoDiv.innerHTML = '';
//     hourlyForecastDiv.innerHTML = '';
//     tempDivInfo.innerHTML = '';

//     const cityName = data.name;
//     const temperature = Math.round(data.main.temp);
//     const description = data.weather[0].description;
//     const iconCode = data.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

//     const temperatureHTML = `<p>${temperature}°C</p>`;
//     const weatherHTML = `<p>${cityName}</p><p>${description}</p>`;

//     tempDivInfo.innerHTML = temperatureHTML;
//     weatherInfoDiv.innerHTML = weatherHTML;
//     weatherIcon.src = iconUrl;
//     weatherIcon.alt = description;

//     showImage();
// }

// function displayHourlyForecast(hourlyData) {
//     const hourlyForecastDiv = document.getElementById('hourly-forecast');
//     const next24Hours = hourlyData.slice(0, 8); // Get the next 8 time intervals (24 hours)

//     hourlyForecastDiv.innerHTML = ''; // Clear previous forecast

//     next24Hours.forEach(item => {
//         const dateTime = new Date(item.dt * 1000);
//         const hour = dateTime.getHours();
//         const temperature = Math.round(item.main.temp);
//         const iconCode = item.weather[0].icon;
//         const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

//         const hourlyItemHtml = `
//             <div class="hourly-item">
//                 <span>${hour}:00</span>
//                 <img src="${iconUrl}" alt="Hourly Weather Icon">
//                 <span>${temperature}°C</span>
//             </div>
//         `;
//         hourlyForecastDiv.innerHTML += hourlyItemHtml;
//     });
// }

// function showImage() {
//     const weatherIcon = document.getElementById('weather-icon');
//     weatherIcon.style.display = 'block';
// }
