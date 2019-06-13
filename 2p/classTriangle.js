class Triangle{
    constructor(){
        load('Point.js');
        a=new Point(0,0);
        b=new Point(5,0);
        c=new Point(0,3)
    }
    toString(){return this.a+","+this.b+","+this.c;};
}