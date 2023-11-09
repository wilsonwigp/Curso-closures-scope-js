//incoroporado en ecmascript 5
pi=3.1416;
console.log(pi);
//solo se a asignado el vlor sin la declaración pasando como var undefined;

//usando el modo stricto
"use strict"
pi=3.1416;
console.log(pi);
//en el modo estricto no deja ejecutar hasta que se asigne y se declare la variable

function myfunction(){
    return pi=3.1416;
}
console.log(myfunction());
//el modo estricto solo se activara en forma global mas no asi dentro de la funcion