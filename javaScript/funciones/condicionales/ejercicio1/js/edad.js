/**
 * Función de decir si es menor o mayor de edad
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function mayorEdad(pedad){
    let edad=pedad;
    if(edad>=18){
        return "Es mayor de edad";
    }else{
        return "Es menor de edad";
    }
}

const mayorEdadExp=function(pedad){
    let edad=pedad;
    if(edad>=18){
        return "Es mayor de edad - Expresión";
    }else{
        return "Es menor de edad - Expresión";
    }
}