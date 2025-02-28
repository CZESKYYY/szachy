import { Outlet, Link } from "react-router-dom";
import "./nickcss.css";
function Login() {
    function wyslijdane(event) 
    {
        let wynik = document.getElementById("wynik");
        let nazwisko = document.getElementById("nickname").value;
        wynik.innerHTML = "<span style='color: navy'>" + nazwisko + "</span>";
         console.log(window.getSocket(), "window get socket")
        window.getSocket().emit("klientUstawiaNick", nazwisko, "test")
        console.log(nazwisko)
        event.preventDefault();
    }

    if (!window.isJoined) {
        window.getSocket().emit("joinGame", {code: "test"});
        window.isJoined = true;
    }

    return (
        <>
            <div id="wrapper2">
            <div id="formnick">
                <form  >
                    <p id="nickp">Nick:</p>
                    <br />
                    <input type="text" id="nickname" name="nickname" />
                    <br />

                    <button type="submit" onClick={wyslijdane} id="button" >Prześlij</button>

                </form>

                <p id="wynik"></p>

            </div>
            </div>
        </>
    )
}

export default Login