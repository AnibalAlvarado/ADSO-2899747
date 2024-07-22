/**
 * Función de decir cual es el numero mayor o si son iguales
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function mayorMenor(pnum,pnum2){
let num= pnum;
let num2=pnum2;
if(num==num2){
    return "Los numeros son iguales"
}else if(num>num2){
    return "El primer numero es el mayor"
}else{
    return "El segundo numero es el mayor"
}
}

const mayorMenorExp=function(pnum,pnum2){
    let num= pnum;
    let num2=pnum2;
    if(num==num2){
        return "Los numeros son iguales-Expresión"
    }else if(num>num2){
        return "El primer numero es el mayor-Expresión"
    }else{
        return "El segundo numero es el mayor-Expresión"
    }
    }