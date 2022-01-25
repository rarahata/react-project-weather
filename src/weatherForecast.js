import React, { useState }from "react";
import "./weatherForecast.css";
import WeatherIcon from "./weatherIcon";
import axios from "axios";


export default function WeatherForecast(props){
    const [weatherForecast, setWeatherForecast] = useState({});
    const [ready, setReady] = useState(false);
    function handleResponse(response){
        setReady(true);
        setWeatherForecast({
            temperature: response.lat
        });
        console.log(weatherForecast.temperature);
    }

    if (ready){
    return (
    <div className="WeatherForecast">
    <div className="row">
    <div className="col">
    <p>Tue</p>
    <WeatherIcon code="01d" size={50}/>
    <p>19°C</p>
    <p>10°C</p>
    </div>
    </div>
    </div>);}else{
        let apiKey ="67ca492fd73748fde63df058209eed51";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
        console.log("apiUrl", apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }
    }