import React from "react";
import "./weatherForecast.css";
import WeatherIcon from "./weatherIcon";
import axios from "axios";


export default function WeatherForecast(props){

    function handleResponse(response){
        console.log("coordresponse", response.data);
    }
    console.log(props);

    let longitude = props.coord.lon;
    let latitude = props.coord.lat; 
    let apiKey = "67ca492fd73748fde63df058209eed51";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);


    if (props.coord){
    return (
    <div className="WeatherForecast">
    <div className="row">
    <div className="col">
    <p>Tue</p>
    <WeatherIcon code="01d" size={36} />
    <p>19°C</p>
    <p>10°C</p>
    </div>
    </div>
    </div>);
    }else{ return "Loading"
};
}