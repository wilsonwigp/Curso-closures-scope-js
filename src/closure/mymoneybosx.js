/*function moneybox(coins){
    let saveCoins=0;
    saveCoins+=coins;
    console.log(`MoneyBox: ${saveCoins}`);
}

moneybox(5);
moneybox(5);
*/

function mymoneybox(){
    let saveCoins=0;
    function countcoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countcoins;
}

const moneybox=mymoneybox();
moneybox(5);
moneybox(5);
moneybox(15);
//al ser Let un tipo de variable que no se puede redeclarar, la funcion no vuelve a dar el valor de 0 en la segunda y tercera iteracion.

const moneyboAna=mymoneybox();
moneyboAna(10);
moneyboAna(20);
moneyboAna(5);