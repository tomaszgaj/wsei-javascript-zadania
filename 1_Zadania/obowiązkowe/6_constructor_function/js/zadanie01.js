//Zadanie 1
var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var RobotKira = new Robot("Kira");
RobotKira.sayHi("Lary");
RobotKira.changeName("Kara");
RobotKira.fixIt();

var RobotKara = new Robot("Kara");
RobotKara.sayHi("Szajni");
RobotKara.changeName("Kevin");
RobotKara.fixIt();