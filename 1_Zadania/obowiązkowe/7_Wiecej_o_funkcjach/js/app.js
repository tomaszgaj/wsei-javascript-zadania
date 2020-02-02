/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */
// Zadanie 0

 //Utworzenie funkcji jeden()
 function jeden() {

    //Inicjacja zmiennej zmienna1 i przypisanie jej wartosci 1 ( wczyta się po funkcji jeden)
    var zmienna1 = 1;

    //Utworzenie funkcji dwa()
    function dwa() {

        //Wypisanie na konsole wartosci zmienna1
        console.log(zmienna1);

        //Inicjacja zmiennej zmienna2 i przypisanie jej wartosci 3
        var zmienna2 = 3;
    }

    //Wywołanie funkcji dwa
    dwa();

    //zmienna2 is not defined - dlatego, że zmienna2 jest zainicjowana w funkcji dwa(), a nie jest zmienna globalna,
    // wiec funkcja jeden() nie wie co to jest zmienna2;
    console.log(zmienna2)
}

//Wywowałenie funkcji jeden
jeden()