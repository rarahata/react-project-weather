import { parseWithOptions } from "date-fns/fp";
import React, { useState } from "react";

export default function WeatherTemperature(props){
const [unit, setUnit] = useState("celsius");

function changeToF(event){
    event.preventDefault();
    setUnit("fahrenhite");
}

function changeToC(event){
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius"){
    return (<div className="WeatherTemperature">
    <h1>{props.celsius}</h1>&nbsp;°C |&nbsp;<a href="#" onClick={changeToF}>°F</a>
    </div>);
}else{
    return (<div className="WeatherTemperature">
    <h1>{Math.round(props.celsius * 9/5 +32)}</h1>&nbsp;<a href="#" onClick={changeToC}>°C</a>|&nbsp;°F
    </div>);
}
}