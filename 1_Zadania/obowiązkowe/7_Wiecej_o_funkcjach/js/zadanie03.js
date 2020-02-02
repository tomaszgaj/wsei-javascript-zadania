// Zdanie 3

hallow();

function hallow(){
    console.log("Cześć");
}

hallow();

// Zarówno gdy wywołanie utworzonej funkcji bedzie po funkcji jak i przed inicjacja funkcji
// Nie ma to znaczenia jak wynika z analizy programu.
// Fukncja wykona sie zarówno w 1 jak i w 2 przypadku.



//----------------------------



//hallow2();//  jeśli w tym miejscu odwołamy sie do zmiennej hallow2, nie znajdzie nam jej, dajac komunikat : hallow2 is not a function

var hallow2 = function(){
    console.log("Witaj");
}

hallow2();  // Natomiast gdy w tym miejscu sie odwołąmy do zmienenj hallow2, 
//wykona sie ona bez problemu, bo wie co to jest hallow2, 
//Funkcja zadeklarowana za pomocą deklaracji jest od razu dostępna dla całego 
//skryptu. Wynika to z faktu działania mechanizmu hoistingu 
//(znany ze zmiennych), który przenosi taką deklarację na początek kodu.
// Możemy więc odwoływać się do funkcji, która jest zadeklarowana 
//później w kodzie.