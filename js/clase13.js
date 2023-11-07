// Introducción a POO - Objetos - JSON - Ejercicio practico

// Declarar un objeto literal 
let notebook = {
    color: "negro",
    modelo: "Nova-1200",
    año: 2020,
    puertos: ["USB", "VGA", "HDMI"],
    procesador: {
        nombre: "i5",
        marca: "nova",
        generacion: 9500
    },
    encender: function () {
        console.log(`el sistema se esta iniciando `)
    },
    reiniciar: function () {
        console.log(`el sistema se esta reiniciando`)
    },
    mostrarInfo: function () {
        console.log(
            `
        la notebook es modelo: ${this.modelo}
        de color: ${this.color}
        y del año: ${this.año}    
         `);

    }
}

// Modificar propiedad de un objeto
notebook.color = "blanco";
notebook["color"];

// Agregar una propiedad a un objeto
notebook.marca = "dell"
console.log(notebook);

// Eliminar una propiedad de un objeto
delete notebook.color;
console.log(notebook);

// Metodos
notebook.encender();
notebook.reiniciar();

// mostrar info
notebook.mostrarInfo();


// ejemplo:


let avenger = {
    nombre: "iroman",
    hp: 1000,
    mp: 1200,
    hablidiades: ["volar", "poderes", "energia"],
    opening: "AC/DC",
    ultimate: function () {
        console.log("BOOM")
    }
}

let avenger2 = {
    nombre: "Capitan America",
    hp: 1000,
    mp: 1200,
    hablidiades: ["fuerza", "salto"],
    opening: "himno",
    ultimate: function () {
        console.log("BOOM")
    }
}

// array de objetos: tengo mi array  let avengers = [] y mis dos objetos (avenger, avenger2)
let avengers = [

    {
        nombre: "iroman",
        hp: 1000,
        mp: 1200,
        hablidiades: ["volar", "poderes", "energia"],
        opening: "AC/DC",
        ultimate: function () {
            console.log("BOOM")
        }
    },
    {
        nombre: "Capitan America",
        hp: 1000,
        mp: 1200,
        hablidiades: ["fuerza", "salto"],
        opening: "himno",
        ultimate: function () {
            console.log("BOOM")
        }
    }

]

console.log(avengers);

// me salta error el JSON.parse buscarle solución

// JSON: JAVASCRIP OBJECT NOTATION
// JSON: Es una estructura de dator ya estarandizada, con la que los lenguajes pueden 
// intercambiar datos, basicamente sirve para enviar y resivir información.

/*Los JSON son cadenas - útiles cuando se quiere transmitir datos a través de una red. 
Debe ser convertido a un objeto nativo de JavaScript cuando se requiera acceder a sus datos. 
Ésto no es un problema, dado que JavaScript posee un objeto global JSON que tiene los métodos disponibles para convertir entre ellos*/

// objeto json
// let alumnos = `[
//     {
//         "id":1,
//         "nombre": "juan",
//         "apellido": "perez",
//         "edad": 20,
//         "destacado": true
//     },
//     {
//         "id":2,
//         "nombre": "Elias",
//         "apellido": "Fernandez",
//         "edad": 18,
//         "destacado": true
//     },
//     {
//         "id":3,'?
//         "nombre": "Lucas",
//         "apellido": "Brum",
//         "edad": 22,
//         "destacado": false
//     },
//     {
//         "id":4,
//         "nombre": "Ana",
//         "apellido": "Martinez",
//         "edad": 19,
//         "destacado": true
//     }

// ]`
// // aqui lo transformo 
// // Aqui iria JSON.parse pero salta error solucionar luego.
// let respuesta = JSON.parse(alumnos);

// console.log(alumnos);
// console.log(respuesta);


// // CRUD ABM

// /*
// Create
// read
// update
// delete

// alta
// baja
// modificaciòn
// */


// function addAlumno(id, nombre, apellido, edad, destacado) {
//     respuesta.push({ id, nombre, apellido, edad, destacado })
//     updateAlumno();
// }

// function deleteAlumno(id) {
//     respuesta = respuesta.filter(function (alumno) 
//     {
//         return alumno.id !== id
//     })
// }

// function editAlumno (id,nombre,apellido,edad,destacado){
//  let alumnoToEdit = respuesta.find(function(alumno){
//     return alumno.id === id});
//     if(nombre != ""){
//         alumnoToEdit.nombre = nombre;
//     }
 
//     alumnoToEdit.apellido= apellido;
//     alumnoToEdit.destacado = destacado;
//     alumnoToEdit.edad = edad;
//     updateAlumno();
// }

// function updateAlumno() {
//     alumnos = JSON.stringify(respuesta)
//     console.log(alumnos);
// }

// addAlumno(6, "Elias", "Fernandez", 35, false)
// deleteAlumno(2);

// editAlumno(5,"lucas","Rivas",20,false)