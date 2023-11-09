function greeting(){
    let userName="Ana";//esta variable solo se accedera en este bloque de funcion
    console.log(userName);
    if(userName==="Ana"){
        console.log(`Hello ${userName}!`);
    }
}
greeting();

console.log(userName);
//no se podra acceder a userName al usar let solo se podra acceder dentro del bloque de función generara reference error username is not defined