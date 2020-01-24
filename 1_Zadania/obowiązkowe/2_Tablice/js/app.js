// Zadanie 0

function distFromAvarage(tab) {
    let sum = 0;
    for (let x  of tab) {
        sum += x;
    }
    let y = sum / tab.length;
    let tab2 = [];
    for (let v of tab) {
        tab2.push(v - y);
    }
    return tab2;
}

distFromAvarage([1,2,3,4,5,6,7]);

// Zadanie 1

function myFavoriteFruits() {
    let tab = ["banan", "kiwi", "ananas"];
    console.log(tab[0]);
    console.log(tab[tab.length - 1]);
    for (let f of tab) {
        console.log(f);
    }
}

myFavoriteFruits();

// Zadanie 3

function printTable(array) {
    for (i of array) {
        console.log(i);
    }
}

printTable([1,2,3,4]);

// Zadanie 4

function multiply(array) {
    let v = 1;
    for (let i of array) {
        v *= i;
    }
    return v;
}

// Zadanie 5

function getEvenAvarage(array) {
    const even = [];
    let sum = 0;
    let found = 0;
    for (let i of array) {
        if (i%2 == 0) {
            sum += i;
            found++;
        }
    }
    if (found == 0) return null;
    else return sum / found;
} 

getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1,1]);

//Zadanie 6
function sortArray(array) {
    return array.sort();
}

//Zadanie 8
function addArrays(array1, array2) {
    const iterateArray = array1.length > array2.length ? array1 : array2;
    const result = [];

    function checkElement(element) {
        return element == null || element == undefined ? 0 : element;
    }

    for (iterator = 0; iterator < iterateArray.length; iterator++) {
        result.push(checkElement(array1[iterator]) + checkElement(array2[iterator]))
    }

    return result;
}