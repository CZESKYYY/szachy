import { Outlet, Link } from "react-router-dom";
function Layout(){
    return (
        <>
                    <div id="wrapper">
                <div id="left">
                    <h1>Szaszki</h1>
                    <ul>
                        <li><a href="./ZasSzach.html">Ruchy Pionków</a></li>
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