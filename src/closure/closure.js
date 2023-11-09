function greeting(){
    let username="Oscar";
    function displayusername(){
        return `Hello ${username}`
    }
    return displayusername;
}

const g=greeting();
console.log(g);//retornamos la funcion
console.log(g());//recordando el contexto de la funcion

