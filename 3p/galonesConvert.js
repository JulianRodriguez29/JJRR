function convertGalones() {
    let g = document.getElementById("galones").value
    let o = g*3.78541
    document.getElementById("out").innerHTML = o.toFixed(2) + " litros"
}
function convertLitros() {
    let l = document.getElementById("litros").value
    let o = l*0.264172
    document.getElementById("out2").innerHTML = o.toFixed(2) + " galones"
}