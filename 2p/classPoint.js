class Point{
    constructor(x,y){
        if((typeof(x)===undefined)&&(typeof(y)===undefined))
       {
          this.x=0;
          this.y=0;
       }
       else{
        this.x=x;
        this.y=y;
       }

    };
    toString(){return "("+this.x+","+this.y+")";};
    distance(p){
        var d1=(p.x)-(this.x);
        var d2=(p.y)-(this.y);
    d1=d1**2
    d2=d2**2
return Math.sqrt(d1+d2)
    };
    clone(){return new Point(this.x,this.y);};


p1=new Point(3,4);

p1.toString()

p3=p1.clone()