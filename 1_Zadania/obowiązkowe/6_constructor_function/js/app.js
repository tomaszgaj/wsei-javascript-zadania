//Zadanie 0
var item;
var Basket = function (){
    this.products = [];
    this.sum =  0;
}
Basket.prototype.addProduct = function(name,price){
    item = {
        names:name,
        prices : price
    }
    this.products.push(item);
    this.sum = this.sum + price;
}
Basket.prototype.showBasket  = function(){
    for(var x = 0; x <this.products.length;x++){
        console.log("Produkt: " + this.products[x].names + " " + this.products[x].prices );
    }
    console.log("Suma za produkty: " + this.sum);
}


var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();