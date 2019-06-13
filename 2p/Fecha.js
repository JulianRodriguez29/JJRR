class fecha{
    constructor(d,m,a){
        if ((typeof d != 'number')||(typeof m != 'number')||(typeof a != 'number'))
        {
          console.log("No es un numero");
        }
        else{
        this.d=d;
        this.m=m;
        this.a=a;
        }
    };
    getDia(d){
        return this.d;
    }
    getMes(m){
        return this.m;
    }
    getAnnio(a){
        return this.a;
    }
    aumentaUnDia(d,m,a){
        this.d=this.d+1;
        if(this.d===32){
            this.d=1;
            this.m=this.m+1;
        }
        if(this.m===13){
            this.m=1;
            this.a=this.a+1;
        }
        return 'El dia es '+this.d+' el mes es '+this.m+' y el año es '+this.a
    }
}