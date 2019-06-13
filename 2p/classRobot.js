class Robot{
    constructor(name){
        this.name=name;
    };
    speak(){ console.log("Soy un robot y no puedo dañar a la gente")};
    makeCoffee(){console.log("Haciendo cafe...")};
    blinkLight(){console.log("Prendiendo la luz")};
};
var a = new Robot('aRobot');