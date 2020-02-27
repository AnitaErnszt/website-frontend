import React, { useState } from "react";

export default function Timer(props) {
  const stoptime = props.stoptime;
  const start_time = props.start_time;
  let now = new Date();
  const [gameTime, SetGameTime] = useState(now - start_time);

  if (!stoptime) {
    setTimeout(() => Second(), 1000);
  }

  function Second() {
    SetGameTime(new Date().getTime() - start_time);
  }

  function AddZero(number) {
    return number < 10 ? "0" + number : number;
  }

  var d = new Date();
  d.setTime(gameTime);
  let hours = AddZero(Math.floor(gameTime / 1000 / (60 * 60)));
  let minutes = AddZero(d.getMinutes());
  let seconds = AddZero(d.getSeconds());

  return (
    <div className="time-div">
      <div className="timer">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}
