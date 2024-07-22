/**
 * Función de mostrar la tabla del 9 hasta el 5 ciclo for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla9(pnum){
    let num= pnum
    let multi
    for(contar=1;contar<=5;contar++){
        multi=num*contar
        if(multi % 2 == 0){ 
            console.log(multi+" Es par")
        }else{
            console.log(multi+" Es impar")
        }
    }
    return""
}

const tabla9Exp= function(pnum){
    let num= pnum
    let multi
    for(contar=1;contar<=5;contar++){
        multi=num*contar
        if(multi % 2 == 0){ 
            console.log(multi+" Es par")
        }else{
            console.log(multi+" Es impar")
        }
    }
    return"EXP"
}