// Clases - Instancias - Herencia - Ejercicio practico objetos,clases y DOM


/*
let alumno = `[
  {
    "id": 1,
    "Nombre": "Elias",
    "apellido": "Fernandez",
    "edad": 20
  },
  {
    "id": 2,
    "Nombre": "Perez",
    "apellido": "Brum",
    "edad": 19
  },
  {
    "id": 3,
    "Nombre": "Joaquin",
    "apellido": "Gonzales",
    "edad": 22
  }
]`

// transorma el objeto json a un objeto de js con el que podemos trabajar. 

let alumnoRespuesta = JSON.parse(alumno);
console.log(alumno);
console.log(alumnoRespuesta);
*/



// las clases nos ayuda a la reducir el codigo y nos favorece a reutilización de codigo
/*
class Alumno {
    constructor(nombre, apellido, comision) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.comision = comision;
    }
    mostrarInfo() {
        console.log(`El alumno ${this.nombre} ${this.apellido} Pertenece a la comisiòn ${this.comision}`)
    }
}

let newAlumno = new Alumno("Elias", "Fernandez", "67i");
let newAlumno2 = new Alumno("Lucas", "Rivas", "67i");
console.log(newAlumno);
console.log(newAlumno2);

newAlumno2.mostrarInfo();
*/

class User {
    constructor(id, nombre, apellido) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
    }
    // metodo
    saludar() {
        console.log("hola")
    }
}

/*
Alumno -> agregar cosas ejmplo: comisión

colaborador -> agreagar ejemplo:
*/

class Alumno extends User {
    constructor(id, nombre, apellido, comision) {
        super(id, nombre, apellido)
        this.comision = comision
    }
    // pisar el saludar
    saludar() {
        console.log("chau")
    }
}

let newAlumno = new Alumno(1, "Nico", "Torrez", "67i");
let newAlumno2 = new Alumno(2, "Mati", "Lezcano", "67i");
let newAlumno3 = new User(3, "Elias", "Fernandez", "67i")

class Preceptor extends User {
    constructor(id, nombre, apellido, legajo, cursos) {
        super(id, nombre, apellido)
        this.legajo = legajo;
        this.cursos = cursos;
    }
}
 
console.log(newAlumno);
console.log(newAlumno2);
console.log(newAlumno3);
newAlumno.saludar();
newAlumno2.saludar();
newAlumno3.saludar();

// preventDefault()es para que no se actualize la pagina con el btn