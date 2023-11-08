//variables
var a; //declarando 
var b="b";//declarando y asignando
b="bb";//reasignando el valor que se tiene
var a="aa"//redeclaración

//Global escope
var fruit="apple";//global
function bestfruit(){
    console.log(fruit);
}
bestfruit();
//se mostrara en consola apple porque la variable es global e ingresa a la funcion bestfruit();

function countries(){
    country="Colombia";//se esta declarando la variable como global al no ser especificada
    console.log(country);
}
countries();
console.log(country);//se imprimira dos veces colombia al ser una variable global se ejecutara dentro y fuera de la funcion
