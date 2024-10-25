function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Nick must be filled out");
      return false;
    }
  }
