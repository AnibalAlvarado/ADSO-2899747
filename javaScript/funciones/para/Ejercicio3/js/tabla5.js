/**
 * Función de mostrar la tabla del 5 for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla5(pnum){
let num = pnum
let multi
for(contar=1;contar<=num;contar++){
    multi=num*contar
    console.log(num+"x"+contar+"="+multi)
}
        return""
}

const tabla5Exp= function(pnum){
    let num = pnum
    let multi
    for(contar=1;contar<=num;contar++){
        multi=num*contar
        console.log(num+"x"+contar+"="+multi)
    }
            return"EXP"
}