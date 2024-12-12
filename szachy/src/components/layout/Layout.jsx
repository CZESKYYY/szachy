import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

let test;

 window.getSocket().on("nick",function(nazwa){
    if (test) test()
        console.log(nazwa)
     })
 function Layout(){
     const navigate = useNavigate(); 
     test = () =>     navigate("/gra");
    window.getSocket()
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