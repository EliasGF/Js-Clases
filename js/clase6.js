//array: introducciòn array- metodos- operaciones.
//Arrays-> martices unidimensionales -> Vectores unidimensionales -> Complejos.

//-> longitud : lenght -> 3 elementos
//-> indice o index => el indice mas alto del array es  => n - 1 
//   Siendo n la longitud del array 

let listaDeNombres = ["Elias", "Tomas", "Jose", "Javier", "lucas", "Nico", "Juana", "Juan", "Toni"];
//0       //1     //2
//siempre se empieza contando desde 0 en los arrays.



//manipulación de arrays
//Agregar - Modificar - Eliminar - leer
//ABM => Alta (Agregar o add), baja(Eliminar o Delete), Modificación (Update,Modificar)
//R -> Lectura

// para leer un elemento de un array necesitamos indicar cual es el indice al que queremos 
//acceder. ej:[2]

/*console.log(listaDeNombres[1]);*/


//Modificar uin valor:

/*listaDeNombres[2] = "julio"
console.log (listaDeNombres)*/


//Agregar un elemento más:
//Utilizando la propiedad .lenght del array podemos agregar elementos al mismo.
//la forma mas linda es utilizando la propiedad push

/*listaDeNombres[listaDeNombres.length] = "Eduardo" ;
listaDeNombres.push = "Eduardo";
console.log (listaDeNombres);*/

//Eliminar un elemento:

/*let arrayIndex = listaDeNombres.length -1;
delete listaDeNombres[arrayIndex];
console.log (listaDeNombres);*/


//imprimir en consola solamente los nombres cuya letra comience Con J
//si un string es = a un array, yo puedo acceder a sus caracteres utilizando su indice

for (let index = 0; index < listaDeNombres.length; index++) {
    const elemento = listaDeNombres[index];
    let letraInicial = elemento.substring(0, 1);
    if (letraInicial === "J") {
        console.log(listaDeNombres[index]);
    }
};

for (let index = 0; index < listaDeNombres.length; index++) {
    const element = listaDeNombres[index];
    if(element[0] === "T") {
console.log(element);
    }
}

//otro metodo de hacerlo con for
/*
for (let jdex = 0; jdex < listaDeNombres.length; jdex++) {
    if (listaDeNombres[index][jdex] === "J") {
        console.log(listaDeNombres[index]);
    }
} */





//si queres hacerlo del while
/*
let contador = 0;
console.log(`ingresando desde el while`);
console.log(`----------------------`);

while(contador < listaDeNombres.length){
    console.log(listaDeNombres [contador])
    contador++
}; */



let continua = true;
let arrayUsuario = [];

while(continua){
    let numero = +prompt("Ingrese un número");
    arrayUsuario[arrayUsuario.length] = numero;

    let respuesta = prompt("desea continuar? si, no");

    if(respuesta === "no" || respuesta === null){
   if(arrayUsuario.length < 5){
    alert("es necesario agregar 2 numeros minimo");
   }else{
    continua = false;
   }
    }
}

alert("los valores ingresados por el usuario son: " + arrayUsuario);