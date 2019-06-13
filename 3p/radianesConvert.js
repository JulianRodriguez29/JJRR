function convertRadianes() {
    let radianes = document.getElementById("radianes").value
    let o = radianes*57.2958
    document.getElementById("out").innerHTML = o.toFixed(2) + " grados"
}
function convertGrados() {
    let grados = document.getElementById("grados").value
    let o = grados*0.0174533
    document.getElementById("out2").innerHTML = o.toFixed(2) + " radianes"
}