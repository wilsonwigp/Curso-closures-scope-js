 //var
 var firstName; //declarando la variable como Undefined
 firstName="Oscar";
 console.log(firstName); //imprime la variable firstname

 var lastName="David";//declarando y asignando
 lastName="Ana";//reasignando 
 console.log(lastName);//imprimie la variable lastname como ana 

 var secondName="David";//asignando y declarando
 var secondName="Ana"; //reasignacion y redeclaracion
 console.log(secondName);//imprime ana como second name

 //let
 let fruit="apple";
 fruit="kiwi"//reasignando

 let fruit="banana";
 console.log("fruit");
  //con let se puede reasignar pero no redeclarar
  //no podra ejecutarse el programa debido a eso 

  //const 
  const animal="dog";//declarar y asignar
  animal="cat"//reasignando
  console.log(animal);
  //no dejara ejecutar const no deja reasignar porque es tipo constante 

  const animal ="snake";
  console.log(animal);
  //no se puede reasignar y redeclarar

  const vehicles=[];
  vehicles.push("car");
  vehicles.pop("car");
  console.log(vehicles);
  //en el caso de const la mutabilidad se aplica a arreglos sin importar que sea const aplicando los metodos.