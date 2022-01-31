import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import DateFormat from "./dateFormat";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./weatherTemperature";
import WeatherForecast from "./weatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [inputCity, setInputCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log("response", response);
    setWeatherData({
      ready: true,
      celsius: Math.round(response.data.main.temp),
      city: response.data.name,
      iconCode: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(),
      coord: response.data.coord,
    });
  }

  function search() {
    const apiKey = "67ca492fd73748fde63df058209eed51";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setInputCity(event.target.value);
    console.log(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city.."
            autoFocus
            onChange={updateCity}
          ></input>
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    console.log(weatherData.coord);
    return (
      <div className="Weather">
        <div className="container">
          {form}
          <DateFormat date={weatherData.date} />
          <h2>{weatherData.city}</h2>
          <WeatherIcon code={weatherData.iconCode} size={100} />
          <div className="row">
            <div className="col-6">
              <WeatherTemperature celsius={weatherData.celsius} />
            </div>
            <div className="col-6">
              <ul>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
