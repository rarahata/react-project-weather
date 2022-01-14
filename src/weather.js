import React from "react";
import "./weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <div className="container">
            <form>
            <div className="row">
            <div className="col-9">
            <input type="text" className="form-control" placeholder="Enter your city.."></input>
            </div>
            <div className="col-3">
            <button type="submit" className="btn btn-primary">Search</button>
            </div>
            </div>
            </form>
        <p>Monday, 27th April</p>
        <h2>6:30am</h2>
        <p>London</p>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className="main-icon"></img>
        <div className="row">
        <div className="col-6">
        <h1>10 °C</h1>
        </div>
        <div className="col-6">
        <ul>
            <li>Description:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
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
        );
}