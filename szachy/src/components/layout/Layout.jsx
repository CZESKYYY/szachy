import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
let otworz_board;

 window.getSocket().on("serwerUstawiaNick",function(nazwa){
     if (otworz_board) otworz_board(nazwa)
         console.log(nazwa)
      })
 function Layout(){
    useEffect(() => {
        window.inicjalizacja()
      }, []);
     const navigate = useNavigate(); 
     otworz_board = (nazwisko) => {
            navigate("/gra");
            setTimeout(() => {
                
                let sentnick = document.getElementById("nick1");
               sentnick.innerHTML = "<span style='color: white'>" + nazwisko + "</span>";
            }, 100);

     }
 
    return (
        <>
                    <div id="wrapper">
                <div id="left">
                    <h1>Szaszki</h1>
                    <ul>
                        <li><Link to="/ruchy">Ruchy Pionków</Link></li>
                        <li><Link to="/gra">Przejdź do gry</Link></li>
                        <li><Link to="/">Wybierz nick</Link></li>
                        <li>x</li>
                    </ul>

                </div>

                <Outlet />
            </div>
        
        </>

    )
}

export default Layout