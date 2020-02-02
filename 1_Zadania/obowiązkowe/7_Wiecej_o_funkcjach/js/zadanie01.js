
/** Zadanie 1
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Inicjacja funkcji sortArray()
function sortArray() {

    //Inicjacja tablicy liczb całkowitych
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywołanie funkcji sortującej
    points.sort(function (a, b) {
        //Zwrócenie wartosci odejmowania  b od a
        return a - b;
    });

    //Zwrócenie posortowanej tablicy
    return points;
}

//Wywołanie funkcji sortArray()
sortArray();