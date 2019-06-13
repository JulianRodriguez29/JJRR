function convertDollar() {
    let e = document.getElementById("dollar").value
    let o = e*.89
    document.getElementById("out").innerHTML = o.toFixed(2) + " euros"
}
function convertEuros() {
    let d = document.getElementById("euros").value
    let o = d*1.12
    document.getElementById("out2").innerHTML = o.toFixed(2) + " dolares"
}