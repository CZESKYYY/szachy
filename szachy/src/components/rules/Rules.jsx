import "./styl_zasszach.css";

function Rules() {
    return (
            <>
                <div id="wrapper4">
                <div id="container">

                        

                        <div id="king"><img src="./obrazki/krolek.webp" alt="krol"/><br />Król może ruszać się o jedno pole w poziomie, pionie lub na ukos. Najwyżej raz w grze każdy z króli może wykonać specjalny ruch zwany roszadą.</div>
                        <div id="rook"><img src="./obrazki/wieza.webp" alt="wieza"/><br />Wieża porusza się o dowolną liczbę wolnych pól w poziomie i pionie; porusza się ona również podczas roszady.</div>
                        <div id="bishop"><img src="./obrazki/goniec.webp" alt="goniec"/><br />Goniec może ruszać się o dowolną liczbę wolnych pól po przekątnych.</div>
                        <div id="queen"><img src="./obrazki/hetman.webp" alt="Hetman"/><br /> Hetman porusza się o dowolną liczbę wolnych pól w poziomie, pionie i na ukos.</div>
                        <div id="horse"><img src="./obrazki/kon.webp" alt="kon"/><br />Ruchy skoczka opisuje się także porównując je do litery „L” lub cyfry „7” (lub dowolnej odbitej, w poziomie i pionie, ich postaci), przy czym wykonuje on dwa kroki w danym kierunku, 90° zwrot w jednym z kierunków i krok w nowo wybranych kierunku. Ruch skoczka nie jest blokowany przez inne bierki, tzn. „skacze” on na nowe pole. , </div>
                        <div id="pawn"><img src="./obrazki/pionek.webp" alt="pion"/><br /> W pierwszym ruchu ma on możliwość wykonania ruchu o dwa pola naprzód, o ile żadne z tych pól nie jest zajęte. Przez resztę gry porusza się o jedno pole naprzód. Pion nie może ruszać się do tyłu. Piony są jedynymi bierkami, które biją inaczej niż się poruszają. Mogą one zbić wrogą bierkę, jeśli znajduje się ona na jednym z dwóch pól sąsiadujących w poziomie z polem przed nimi. Piony mają również dwa szczególne posunięcia: en passant oraz promocję .</div>

                </div>
                </div>
            </>
        )
}

export default Rules