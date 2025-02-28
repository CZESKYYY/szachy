import React, { useState, useEffect } from 'react';
import "./board.css";


  import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";


function Board() {
    let receivedNick = ""
  if(window.enemy){
receivedNick=window.enemy
  } 
    return (
       <div id="wrapper3">
        <>
            <div id="nick1">{receivedNick}</div>




            <div id="boardwrapper">

                <div id="board" >
                
                </div>
            </div>
            
               

            <div id="nick2"></div>

            <div id="notacja">
                <div id="status"></div>
                <label>Notacja:</label>
                <div id="pgn"></div>
            </div>

        </>
        </div>
    )
}

export default Board