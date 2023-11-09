console.log(nameofdog);
var nameofdog="Elmo";
//saldra undefined porque la variable var es declarada luego de ser llamada y es movida la variable arriba antes del console.log pero sin asignacion

  
nameosfdog();
function nameosfdog(){
    console.log(`El mejor perrito es ${elmos}`)
}

var elmos="elmito";

//var se eleva como undefined, se llama la funcion namesofdog pero antes se eleva la funcion namesofdog y se ejecuta la funcion sin problemas sin embargo la variable var elmos se mantiene como undefined por que no es asignada sino hasta el final.El hoisting ayuda a solucionar estos problemas.el hoisting se aplica en variables y funciones.