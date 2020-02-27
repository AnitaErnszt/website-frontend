import React, { useState } from "react";

export default function Card1(props) {
  const flipped = props.flipped;
  const id = props.id;
  const color = props.color;
  const [temp, SetTemp] = useState(false);

  function handleFlip() {
    SetTemp(true);
    setTimeout(() => WaitAndFlip(), 500);
    if (!flipped) {
      return props.passcolor(color, id);
    }
  }

  function WaitAndFlip() {
    SetTemp(false);
    return props.waitandflip(color, id);
  }

  return (
    <div className="card-div" onClick={handleFlip}>
      <div
        className="gamecard"
        style={flipped || temp ? { backgroundColor: color } : null}
      />
    </div>
  );
}
