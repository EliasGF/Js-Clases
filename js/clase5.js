//como recorrer un Bucle-while-Do while-for

//Bucles es una estructura de control de datos que se repite mientras la condicion se cumpla.


//while:

/*
let contador = 1;

while(contador<=10){
console.log(contador);
contador++;
}
*/

/*
let contador = 1;
let tabla = 2;

while(contador <=10){

    console.log(`${contador}*${tabla}= ${tabla*contador}`);
    contador++;

}

console.log("tarea siguiente:")
*/


//DO While

/*
let contador2 = 1;

do{
    console.log(contador2);
    contador2++;

}while(contador2<=10);
*/


//Generar un script que me imprima en consola los numeros del 1 al 200 y que me diga cuales son los pares

/*
let contador2 = 1;

do {
    if (contador2 % 2 === 0) {
        console.log(`${contador2} impar`)
    } else {
        console.log(`${contador2}`)
    }

    contador2++;

} while (contador2 <= 200);
*/



//for

/*
let cantcanciones = +prompt("cuantas canciones desea agregar")


for (let contador = 1; contador <= cantcanciones; contador++) {

    let opcion = +prompt(` elija el numero de la canción
    1-Enanitos verdes-Mariposas
    2-Fito Paez- A rodar
    3-kid flex- si es que yo te cuento
    4-Issmaguss-Eclipse
    5-Indio solari- ji ji ji`);



    switch (opcion) {
        case 1:
            console.log("1 - Enanitos verdes-Mariposas");
            break;
        case 2:
            console.log("2 - Fito Paez- A rodar");
            break;
        case 3:
            console.log("3 - kid flex- si es que yo te cuento");
            break;
        case 4:
            console.log("4 - Issmaguss-Eclipse");
            break;
        case 5:
            console.log("5 - Indio solari- ji ji ji");
            break;
        default:
            console.log("que feos gustos :v");

    }

}
*/



/* ACTIVIDADES: - Imprima la suma de todos los números impares entre 1 y 100
- Imprime la tabla de multiplicar del 5
- Realiza un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 5 */


//resultado 1
//siempre el contador++ poner para que no se haga un bucle infinito
/*
let contador = 1;

do {
    if (contador % 2 === 0) {
        console.log(`${contador} `);
    } else {
        console.log(`${contador} (es impar)`);
    }
    contador++;

} while (contador <= 100);
*/



//resultado 2
 /*
let contador =1;1
let tabla = 5;

while(contador <= 10){
console.log(`${contador}*${tabla} = ${tabla*contador}  `);
contador++;
};
*/



//resultado 3

let contador = 1;

do {
    if (contador % 5 === 0) {
        console.log(`${contador} (multiplo de 5)`)
    } else {
        console.log(`${contador}`)
    }

    contador++;

} while (contador <= 500);

