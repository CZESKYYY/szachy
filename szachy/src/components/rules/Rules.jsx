import "./styl_zasszach.css";

function Rules() {
    return (

        <div id="container">
            
                <div id="king"><img src="./obrazki/krolek.webp" alt="krol" /><br /><p>Król może ruszać się o jedno pole w poziomie, pionie lub na ukos. Najwyżej raz w grze każdy z króli może wykonać specjalny ruch zwany roszadą.</p></div>
                <div id="rook"><img src="./obrazki/wieza.webp" alt="wieza" /><br /><p>Wieża porusza się o dowolną liczbę wolnych pól w poziomie i pionie; porusza się ona również podczas roszady.</p></div>
                <div id="bishop"><img src="./obrazki/goniec.webp" alt="goniec" /><br /><p>Goniec może ruszać się o dowolną liczbę wolnych pól po przekątnych.</p></div>
                <div id="queen"><img src="./obrazki/hetman.webp" alt="Hetman" /><br /><p>Hetman porusza się o dowolną liczbę wolnych pól w poziomie, pionie i na ukos.</p></div>
                <div id="horse"><img src="./obrazki/kon.webp" alt="kon" /><br /><p>Ruchy skoczka opisuje się także porównując je do litery „L” lub cyfry „7” (lub dowolnej odbitej, w poziomie i pionie, ich postaci), przy czym wykonuje on dwa kroki w danym kierunku, 90° zwrot w jednym z kierunków i krok w nowo wybranych kierunku. Ruch skoczka nie jest blokowany przez inne bierki, tzn. „skacze” on na nowe pole.</p></div>
                <div id="pawn"><img src="./obrazki/pionek.webp" alt="pion" /><br /><p>W pierwszym ruchu ma on możliwość wykonania ruchu o dwa pola naprzód, o ile żadne z tych pól nie jest zajęte. Przez resztę gry porusza się o jedno pole naprzód. Nie może ruszać się do tyłu. Piony są jedynymi bierkami, które biją inaczej niż się poruszają. Mogą one zbić wrogą bierkę, jeśli znajduje się ona na jednym z dwóch pól sąsiadujących w poziomie z polem przed nimi.</p></div>
            
        </div>

    )
}

export default Rules