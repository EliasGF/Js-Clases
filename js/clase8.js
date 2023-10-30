// Array- que son?- Indice de los array- Metodos de los array

// invocar funcion -> Usar nombre y pasar los parametros necesarios para que la función 
// se ejecute correctamente


// ejemplo del trabajo practico (A)
SolicitarValores()

function SolicitarValores() {
    let resultado = 0;
    for (let index = 0; index < 5; index++) {
        let valor = +prompt("ingrese el numero");
        resultado += valor;
    }

    prompt(`el resultado es ${resultado}`);
}

function suma() {
    return valor + resultado;
}



// Una funcion sirve para que el codigo quede mas limpio, mas ordenado, puedas reutilizar codigo.
// ejemplos: 

// Mi sistema me pide si puedo vender alcohol"
if(VerificasSiEsMayorDeEdad(18) === true){
    console.log("se puede vender bebidas.");
}

// Verificar si puede ingresar al boliche
if(VerificasSiEsMayorDeEdad(15)){
    console.log();
}else{
    console.log("No puede ingresar");
}

// //Verificar si puede votar
if(VerificasSiEsMayorDeEdad(22)){
    console.log("si puede votar");
}



function VerificasSiEsMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;

    } else {
        false;
    }
}




