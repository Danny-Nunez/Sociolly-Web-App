import React from "react";
import "./home.css";

function Expo() {
  const d = new Date();
  const weekDay = [
    "Sunday ☀️",
    "Monday 🌞",
    "Tuesday ⛅",
    "Wednesday 🌅",
    "Thursday ☀️",
    "Friday 🌞",
    "Saturday 🌄",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <>
      <div className="main">
        <div id="day">{day}</div>
        <div className="dateshell">
          <div id="date">{date}</div>
          <div id="month">{month}</div>
          <div id="year">{year}</div>
        </div>
      </div>
    </>
  );
}

export default Expo;
