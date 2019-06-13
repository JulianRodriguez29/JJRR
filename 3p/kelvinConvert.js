function convertKelvin() {
    let k = document.getElementById("kelvin").value
    let o = k-273.15
    document.getElementById("out").innerHTML = o.toFixed(2) + " celsius"
}
function convertCelsius() {
    let c = document.getElementById("celsius").value
    let o = (c*1)+273.15
    document.getElementById("out2").innerHTML = o.toFixed(2) + " kelvin"
}