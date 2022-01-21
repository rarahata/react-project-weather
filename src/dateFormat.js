import React from "react";

export default function FormatDate(props){
    console.log("props ", props)
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
    if (props.date){
        if (props.date.getHours() < 10 && props.date.getMinutes() < 10){
        return <div>{days[props.date.getDay()]}, {props.date.getDate()}{" "}{months[props.date.getMonth()]}<br/>0{props.date.getHours()}:0{props.date.getMinutes()}</div>
    }else{
        return <div>{days[props.date.getDay()]}, {props.date.getDate()}{" "}{months[props.date.getMonth()]}<br/>{props.date.getHours()}:{props.date.getMinutes()}</div>
    }}else{
        return ("Loading...")
    }
    //return (props.date ? props.date.getMonth() : "Loading...");
}