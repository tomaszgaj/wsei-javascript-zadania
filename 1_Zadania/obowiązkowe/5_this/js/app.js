// Zadanie 0

var car = {
    brand : "Lanos",
    color : "Green",
    numberOfKilometers : 0,
    printCarinfo : function(){
        console.log(car.brand + " " + car.color + ", " + car.numberOfKilometers);
    },
    drive : function(a){
        console.log(this.brand + " " + this.color + ", " + (a + this.numberOfKilometers))
    }
}

car.printCarinfo();
car.drive(20);

//Zadanie 1

car.data = ["3.05.1998","4.01.2018"];
car.push = function(){
    this.data.push("4.2.2018");
}
car.chack = function(){
    for(var x =0;x<this.data.length;x++){
        console.log(this.data[x]);
    }
    return this.data;
}
car.push();
car.chack();

// Zadanie 3

var stairs = {
    step : 0,
    up : function(){
        this.step = this.step + 1;
    },
    down : function(){
        this.step = this.step - 1;
    },
    printStep: function(){
        console.log("Schodek: " + this.step);
    }
}
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep()