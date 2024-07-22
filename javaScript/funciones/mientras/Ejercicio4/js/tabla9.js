/**
 * Función de mostrar la tabla del 9 hasta el 5
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla9(pnum){
    let num= pnum
    let contar=1
    let multi
    while(contar<=5){
        multi=num*contar
        if(multi % 2 == 0){ 
            console.log(multi+" Es par")
        }else{
            console.log(multi+" Es impar")
        }
        
        contar= contar+1
    }
    return""
}

const tabla9Exp= function(pnum){
    let num= pnum
    let contar=1
    let multi
    while(contar<=5){
        multi=num*contar
        if(multi % 2 == 0){ 
            console.log(multi+" Es par-Exp")
        }else{
            console.log(multi+" Es impar-Exp")
        }
        
        contar= contar+1
    }
    return""
}