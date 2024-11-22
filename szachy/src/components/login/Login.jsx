import { Outlet, Link } from "react-router-dom";
function Login() {
    return (
        <>
            <div id="formnick">
                <form name="myForm" target="_blank" action="nick.html" method="POST">
                    <p id="nickp">Nick:</p>
                    <br />
                    <input type="text" id="nickname" />
                    <br />
                    <Link to="/gra">
                    <button type="button"  id="button" >Prześlij</button>
                    </Link>
                </form>

                <p id="wynik"></p>

            </div>
        </>
    )
}

export default Login