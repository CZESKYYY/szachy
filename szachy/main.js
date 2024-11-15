function formularz() {
	let x = document.forms["myForm"]["nickname"].value;
	if (x!="") {
		let wynik = document.getElementById("wynik");
		let nazwisko = document.getElementById("nickname").value;
		wynik.innerHTML = "<span style='color: navy'>" + nazwisko + "</span>";
	} else {
		wynik.innerHTML = "<span style='color: red;'>Wpisz nick.</span>";
	}
}