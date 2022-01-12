import React from "react";

export default function Weather(){
    return (
        <div className="Weather">
        <button className='btn btn-primary'>Hello</button>
        <p>Monday, 27th April</p>
        <h2>6:30am</h2>
        <p>London</p>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon"></img>
        <h1>10 °C</h1>
        <p>Monday</p>
        <hr></hr>
        <div className="row">
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon"></img>
            <p>12°C</p>
        </div>
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon"></img>
            <p>12°C</p>
        </div>
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon"></img>
            <p>12°C</p>
        </div>
        <div className="col-3">
            <p>Tue</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon"></img>
            <p>12°C</p>
        </div>
        </div>
        </div>
        );
}