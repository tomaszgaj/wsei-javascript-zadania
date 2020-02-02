// Zadanie 0a

var city = {
    capital : "Glasgow",
    population : 10000000,
    president : "Scot",
    primeMinisters : ["Macmillan","aAlanla"]
}
console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//Zadanie 0b

var timeMachine = {
    shape : "shape123",
    model : "model123",
    run : function(data,plase){
        var result = data + plase;
        console.log("run(date, place) - metoda, dzięki której można się przenieść w czasie. Argument date to data, do jakiej chcemy się przenieść, a place to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi.")
        console.log(result);
    }}

console.log(timeMachine.shape);
console.log(timeMachine.model);

timeMachine.run("4.10.2009 ","Glasgow");

// Zadanie 1

var book = {
    title : "Świat jeste Pełen Chętnych Suk",
    author :"Jacek Piekara" ,
    numberOfPages:"300" 
}
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// Zadanie 2
var person = {
    name : "Jacek",
    age : "21",
    sayHello() {
        console.log("hello");
    }
}
console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3

var recipe = {
    title  : "bulka",
    servings  : "maka"
}
console.log(recipe.title);
console.log(recipe.servings);

recipe.ingredients  = "tablica stringów";

console.log(recipe.ingredients );
console.log("---------------------------------" );

// Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log("spoon isExist: " + spoon.isExist);
console.log("---------------------------------" );