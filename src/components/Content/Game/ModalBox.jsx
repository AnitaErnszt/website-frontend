import React, { useState } from "react";

export default function ModalBox(props){
  const [player, SetPlayer] = useState("Anonymous")
  let end_time = new Date().getTime();

  function handleInput(event){
    const value = event.target.value
    SetPlayer(value)
  }

  function handleClose(){
    props.modalclose();
    const game_time = end_time - props.time.getTime();
    let request_body = {
      "player_name": player,
      "game_time": game_time,
      "user_id": props.user.id
    };
    console.log(request_body);
    let request = new XMLHttpRequest();
    request.open("POST", "https://********.execute-api.eu-west-1.amazonaws.com/dev/dynamodb-game");
    request.send(JSON.stringify(request_body));
  }

  return (
    <div className="container">
    <div className="modal fade show" style={{display: "block"}} id="getPlayerName" role="dialog" aria-modal="true">
      
      <div className="modal-dialog modal-sm">

        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Well done! Nice game!</h4>
            <button type="button" className="close game-close" onClick={handleClose}>&times;</button>
          </div>

            <div className="modal-body">
              <label>Please enter your name:</label>
              <input type="text" name="player_name" value={player} onChange={handleInput}/>
              <div className="text-right">
              <button type="button" className="btn btn-outline-info" onClick={handleClose}>Submit</button>
              </div>
              </div>
        </div>

      </div>
    </div>
    </div>
  );
}