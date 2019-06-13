function sumar() {
    let a = parseInt(document.getElementById("numerador1"))
    let b = parseInt(document.getElementById("denomidor1"))
    let c = parseInt(document.getElementById("numerador2"))
    let d = parseInt(document.getElementById("denomidor2"))
    let e = a + c;
    let f = b + d;
    document.getElementById("out1").innerHTML = e;
    document.getElementById("out2").innerHTML = f;
    console.log(e)
    console.log(f)

}