/**
 * Función de mostrar los numeros del 1 al 5 con ciclo while y for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function numUnoCinco(pnum){
let num= pnum
let contar= 0
while(contar < num){

    contar=contar+1;

    console.log(contar);
    
}
return "1 Al 5"
}

const numUnoCincoExp=function(pnum){
    let num= pnum
    let contar= 0
    while(contar < num){
    
        contar=contar+1;
    
        console.log(contar+"-Exp");
    }
    return "1 Al 5 EXP"
    }