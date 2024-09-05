function valami() {
    if (document.getElementById("bp").checked == false && document.getElementById("2024").checked == false) {
        document.getElementById("valasz").innerHTML = "no bueno"
    }
    else if (document.getElementById("bp").checked == true && document.getElementById("2024").checked == false || document.getElementById("bp").checked == false && document.getElementById("2024").checked == true) {
        document.getElementById("valasz").innerHTML = "2/1"
    }
    else{
        document.getElementById("valasz").innerHTML = "okayo"
        
    }

}
