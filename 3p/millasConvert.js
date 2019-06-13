function convertMillas() {
    let m = document.getElementById("millas").value
    let o = m*1.60934
    document.getElementById("out").innerHTML = o.toFixed(2) + " kilometros"
}
function convertKilometros() {
    let k = document.getElementById("kilometros").value
    let o = k*0.621371
    document.getElementById("out2").innerHTML = o.toFixed(2) + " millas"
}