import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import DateFormat from "./dateFormat";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./weatherTemperature";

export default function Weather(props){
    let [weather, setWeather]= useState({});
    let [ready, setReady] = useState(false);
    let [inputCity, setInputCity] = useState("");

    function handleResponse(response){
        console.log("response",response);
        setReady(true);
        setWeather({
            celsius: Math.round(response.data.main.temp),
            city: response.data.name,
            iconCode: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            date: new Date(),
        });
        console.log("weatherData", weather.date);
        console.log("temperature", weather.temperature);

    }

    function handleSubmit(event){
    event.preventDefault();
    const apiKey ="67ca492fd73748fde63df058209eed51";
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    }

    function updateCity(event){
        event.preventDefault();
        setInputCity(event.target.value);
    }

    
    let form = <form onSubmit={handleSubmit}>
    <div className="row">
    <div className="col-9">
    <input type="text" className="form-control" placeholder="Enter your city.." autoFocus onChange={updateCity}></input>
    </div>
    <div className="col-3">
    <button type="submit" className="btn btn-primary">Search</button>
    </div>
    </div>
    </form>
    
    if (ready){
        console.log(weather);
    return (
        <div className="Weather">
            <div className="container">
            {form}
            <DateFormat date={weather.date}/>
            <h2>{weather.city}</h2>
            <WeatherIcon code={weather.iconCode}/>
            <div className="row">
            <div className="col-6">
            <WeatherTemperature celsius={weather.celsius}/>
            </div>
            <div className="col-6">
            <ul>
            <li className="text-capitalize">{weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} m/s</li>
            </ul>
            </div>
            </div>
            <hr></hr>
            <div className="row">
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className="forecast-icon"></img>
            <p>12°C</p>
        </div>
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className="forecast-icon"></img>
            <p>12°C</p>
        </div>
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className="forecast-icon"></img>
            <p>12°C</p>
        </div>
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className="forecast-icon"></img>
            <p>12°C</p>
        </div>
        </div>
        </div>
        </div>
        );}else{
            return (<div className="Weather">
                <div className="container">
                {form}
                <h2>Welcome to Rei's Weather App</h2>
                <p>Enter the city you want to check the weather!</p>
                </div>
                </div>);
        }
    }
    