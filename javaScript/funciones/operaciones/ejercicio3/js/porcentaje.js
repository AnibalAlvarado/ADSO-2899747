/**
 * Función de porcentaje de un numero
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function porce(pnum,pporcen){
    let num=pnum;
    let porcen=pporcen
    let resul

    resul=(porcen*num)/100
    return resul
}

const porceExp= function(pnum,pporcen){
    let num=pnum;
    let porcen=pporcen
    let resul

    resul=(porcen*num)/100
    return resul+" Expresión"
}