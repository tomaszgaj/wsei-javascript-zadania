  
function countHello(num) {
    var counter = 1;
    var intervalId = setInterval(()=>{
        console.log("Hello " + counter);
        if (num == counter) {
            clearInterval(intervalId);
        }
        counter++;
    }, 500);
}

countHello(5);
