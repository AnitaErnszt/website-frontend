import React, { useState } from "react";
import Card from "./Card";

export default function Game(props) {
  const [game, SetGame] = useState("");
  const [cards, SetCards] = useState(props.starter_cards);
  const [found, SetFound] = useState(0);

  function ButtonClicked(color, id) {
    SetCards(prevValue => {
      const newValue = prevValue;
      newValue[id].flipped = true;
      return newValue;
    });
    if (game === "") {
      SetGame({ color: color, id: id });
    }
  }

  function FlipBackCall(color, id) {
    if (game !== "") {
      CheckCurrentGame(color, id);
    }
  }

  function FlipBack(id1, id2) {
    SetCards(prevValue => {
      const newValue = prevValue;
      newValue[id1].flipped = false;
      newValue[id2].flipped = false;
      return newValue;
    });
    SetGame("");
  }

  function CheckCurrentGame(color, id) {
    if (game.color !== color) {
      FlipBack(game.id, id);
    } else {
      if (found + 2 === cards.length) {
        props.stoptime();
      } else {
        SetFound(found + 2);
      }
    }
    SetGame("");
  }

  return (
    <div className="App">
      {cards.map(card => (
        <Card
          color={card.color}
          key={card.id}
          id={card.id}
          flipped={card.flipped}
          passcolor={ButtonClicked}
          waitandflip={FlipBackCall}
        />
      ))}
    </div>
  );
}
