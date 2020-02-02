//zadanie 6.2

var Calculator = function(){
    this.operations = [];
}

Calculator.prototype.add = function(num1,num2){
    this.a = num1;
    this.b = num2;
    var result = this.a + this.b;
    this.operations.push("added "+ this.a + " to "+ this.b + " got " + result);
    return result;
}
Calculator.prototype.multiply = function(num1,num2){
    this.a = num1;
    this.b = num2;
    var result = this.a + this.b;
    this.operations.push("multiplied "+ this.a + " with "+ this.b + " got " + result);
    return result;
}
Calculator.prototype.subtract = function(num1,num2){
    this.a = num1;
    this.b = num2;
    var result = this.a - this.b;
    this.operations.push("subtracted "+ this.a + " from "+ this.b + " got " + result);
    return result;
}
Calculator.prototype.divide = function(num1,num2){
    this.a = num1;
    this.b = num2;
    var result = this.a / this.b;
    this.operations.push("divided  "+ this.a + " by  "+ this.b + " got " + result);
    return result;
}
Calculator.prototype.printOperations = function(){
    for(var x=0;x<this.operations.length;x++){
        console.log(this.operations[x]);
    }
}
Calculator.prototype.clearoperations = function(){
    this.operations = [];
}

var CalculatorNumbers = new Calculator();
CalculatorNumbers.add(3,2);
CalculatorNumbers.subtract(1,10);
CalculatorNumbers.divide(6,3);
CalculatorNumbers.printOperations();
CalculatorNumbers.clearoperations();
console.log(CalculatorNumbers.operations);