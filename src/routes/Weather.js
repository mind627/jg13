import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('YourCity'); // 원하는 도시 이름으로 변경

  useEffect(() => {
    const API_KEY = 'YOUR_API_KEY'; // OpenWeatherMap API 키
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios.get(API_URL)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter a city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <div>
        {weatherData.main && (
          <div>
            <h2>City: {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;