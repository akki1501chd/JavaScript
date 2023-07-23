class Car{
    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log(this.name);
    }

    stopEngine(){
        console.log(this.name);

    }
}

class Toyata extends Car{
    topSpeed(speed){
        console.log('Top spedd for '+this.name+' is '+spedd);
    }
}

let myCar = new Toyata();
myCar.setName('camry');
myCar.startEngine();
myCar.topSpeed(200);