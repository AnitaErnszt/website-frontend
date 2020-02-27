import React, { useState } from "react";
import Game from "./Game";
import Timer from "./Timer";
import ModalBox from "./ModalBox"

export default function SetGame(props) {
  const [gameTime, SetGameTime] = useState(false);
  const [modal, SetModal] = useState(false);
  let colours = ["red", "blue", "green", "purple", "yellow", "orange"];
  colours = [...colours, ...colours];
  shuffleColours(colours);
  const starter = [];
  for (let i = 0; i < colours.length; i++) {
    starter.push({
      id: i,
      color: colours[i],
      flipped: false
    });
  }

  function shuffleColours(array) {
    // Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const start_time = useState(new Date());

  function StopTime() {
    SetGameTime(true);
    SetModal(true);
  }

  function handleModalClose(){
    SetModal(false);
  }

  function Modal(){
    if (modal){
      return <ModalBox user={props.user} ameover={modal} time={start_time[0]} modalclose={handleModalClose}/>
    } else {
      return <div></div>
    }
  }

  return (
    <div>
      <h1 style={{ paddingBottom: "0" }}>Memory game</h1>
      <Timer start_time={start_time[0]} stoptime={gameTime} />
      <div className="content">
        <Game starter_cards={starter} stoptime={StopTime} />
      </div>
        <Modal />
    </div>
  );
}
