/**
 * Función de mostrar la tabla del 5
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla5(pnum){
let num = pnum
contar= 0
let multi
        while(contar<num){
            contar= contar+1
            multi=num*contar
            console.log(num+"x"+contar+"="+multi)
        }
        return""
}

const tabla5Exp= function(pnum){
    let num = pnum
    contar= 0
    let multi
            while(contar<num){
                contar= contar+1
                multi=num*contar
                console.log(num+"x"+contar+"="+multi+"Exp")
            }
            return""
}