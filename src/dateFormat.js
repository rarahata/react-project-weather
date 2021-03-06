import React from "react";
import { format } from "date-fns";

export default function FormatDate(props) {
  console.log("props", props);
  //let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  //let months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
  return (
    <div>
      <p>{format(props.date, "EEEE, d MMM")}</p>
      <div> Updated on {format(props.date, "HH:mm")}</div>
    </div>
  );

  //return (props.date ? props.date.getMonth(): "Loading...");
  //return <p>{days[props.date.getDay()]}, {props.date.getDate()}{" "}{months[props.date.getMonth()]}<br/>{props.date.getHours()<10 ? 0 : ""}{props.date.getHours()}:{props.date.getMinutes() < 10 ? 0 : ""}{props.date.getMinutes()}</p>
}
