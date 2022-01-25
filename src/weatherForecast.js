import React from "react";
import "./weatherForecast.css";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecast(){
    return (
    <div className="WeatherForecast">
    <div className="row">
    <div className="col">
        <p>Tue</p>
        <WeatherIcon code="01d" size={50}/>
        <p>12°C</p>
    </div>
    </div>
    </div>);
}