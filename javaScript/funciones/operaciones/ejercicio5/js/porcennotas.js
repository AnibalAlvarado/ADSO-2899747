/**
 * Función de porcentaje de 3 notas y suma de porcentajes
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */


function prome(pnum,pnum2,pnum3,pporcen,pporcen2){
    let num=pnum;
    let num2=pnum2;
    let num3=pnum3;
    let porcen=pporcen;
    let porcen2=pporcen;
    let porcen3=pporcen2;
    let suma;

    reNota=(porcen*num)/100;
    reNota2=(porcen2*num2)/100;
    reNota3=(porcen3*num3)/100;
    suma= reNota+reNota2+reNota3;
    console.log(reNota,reNota2,reNota3);
    return suma;
}



const promeExp= function(pnum,pnum2,pnum3,pporcen,pporcen2){
    let num=pnum;
    let num2=pnum2;
    let num3=pnum3;
    let porcen=pporcen;
    let porcen2=pporcen;
    let porcen3=pporcen2;
    let suma;
    reNota=(porcen*num)/100;
    reNota2=(porcen2*num2)/100;
    reNota3=(porcen3*num3)/100;
    console.log(reNota,reNota2,reNota3);
    suma= reNota+reNota2+reNota3;
    return suma +" Expresión";
}