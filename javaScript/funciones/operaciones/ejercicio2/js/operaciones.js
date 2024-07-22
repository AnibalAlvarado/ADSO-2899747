/**
 * Función de operciones aritméticas
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function operaciones(operacion,pnum1,pnum2){
    let ope=operacion;
    let num1=pnum1;
    let num2=pnum2;
    if(ope=="suma"||ope=="+"){ 
        let suma;
        suma = num1 + num2;
        return suma 
    }else if(ope=="resta"||ope=="-"){
        let resta ;
        resta = num1 - num2
        return resta
    }else if(ope=="multiplicacion"||ope=="x"){
        let multi
        multi = num1 * num2
        return multi 
    }else if(ope=="division"||ope=="/"){
        let divi
        divi = num1 / num2
        return divi
    }else{
        return "No existe el operador"
    }
    }

const operacionesExp=function(operacion,pnum1,pnum2){
let ope=operacion;
let num1=pnum1;
let num2=pnum2;
if(ope=="suma"||ope=="+"){ 
    let suma;
    suma = num1 + num2;
    return suma + " Expresión";
}else if(ope=="resta"||ope=="-"){
    let resta ;
    resta = num1 - num2
    return resta+ " Expresión"
}else if(ope=="multiplicacion"||ope=="x"){
    let multi
    multi = num1 * num2
    return multi + " Expresión"
}else if(ope=="division"||ope=="/"){
    let divi
    divi = num1 / num2
    return divi + " Expresión"
}else{
    return "No existe el operador"
}
}

