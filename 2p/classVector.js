class Vector{
    constructor(a){
        if(typeof a===Array){
            this.a=a;
        }
        else {console.log('No es vector');
        a=[2,3,4,5,6];
    }
}
minimo(a){
let t=a[0]//2
for(let x of a){
    if(t>x)t=x
}
return t;
}
}