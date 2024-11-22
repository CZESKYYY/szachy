import React, { useState, useEffect } from 'react';
import "./board.css"
function Board() {
    useEffect(() => {
        window.inicjalizacja()
      }, []);
   
    return (
       
        <>
            <div id="nick1"><p>nick1</p></div>




            <div id="boardwrapper">

                <div id="board" >
                
                </div>
            </div>
            
               

            <div id="nick2"><p>nick2</p></div>

            <div id="notacja">
                <div id="status"></div>
                <label>Notacja:</label>
                <div id="pgn"></div>
            </div>

        </>

    )
}

export default Board