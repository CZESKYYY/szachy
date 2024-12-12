import React, { useState, useEffect } from 'react';

  import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

  const socket = io();

function Board() {
    useEffect(() => {
        window.inicjalizacja()
      }, []);
   

       socket.on("nick",function(assignnick){
         let sentnick = document.getElementById("nick1");
        sentnick.innerHTML = "<span style='color: navy'>" + sentnick + "</span>";

      }
      
      )
    return (
       
        <>
            <div id="nick1"><p></p></div>




            <div id="boardwrapper">

                <div id="board" >
                
                </div>
            </div>
            
               

            <div id="nick2"><p></p></div>

            <div id="notacja">
                <div id="status"></div>
                <label>Notacja:</label>
                <div id="pgn"></div>
            </div>

        </>

    )
}

export default Board