/**
 * Función de mostrar los numeros del 1 al 5 y si son pares o impares con el ciclo while y for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function paresImpares(pnum){
    let num= pnum
    let contar= 0
    while(contar<num){
        contar=contar+1
        if(contar%2==0){

            console.log(contar+" es Par\n");
        }
        else{

            console.log(contar+" es impar\n");
        }
        
    }
    return""
}
const paresImparesExp=function(pnum){
    let num= pnum
    let contar= 0
    while(contar<num){
        contar=contar+1
        if(contar%2==0){

            console.log(contar+" es Par\n-Exp");
        }
        else{

            console.log(contar+" es impar\n-Exp");
        }
        
    }
    return""
}