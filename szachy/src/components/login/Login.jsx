function Login() {
    return (
        <>
            <div id="formnick">
                <form name="myForm"  action="Board.jsx" method="POST">
                    <p id="nickp">Nick:</p>
                    <br />
                    <input type="text" id="nickname" />
                    <br />
                    <button type="button"  id="button">Prześlij</button>
                </form>

                <p id="wynik"></p>

            </div>
        </>
    )
}

export default Login