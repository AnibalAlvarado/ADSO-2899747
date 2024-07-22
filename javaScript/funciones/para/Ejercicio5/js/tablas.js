/**
 * Función de mostrar la tabla del 1 2 3 4 5 hasta el 5 y mostrar si son pares buzz y si son impares bazz y también cuantos pares y impares hay
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function esPar(numero) {
    return numero % 2 === 0;
}

function contadorTabla(num){
    
        let contar=0, pares=0, impares=0;
        let multi;

        for(num = 1; num <= 5; num++){

            contar=contar+1;

            for(contar = 1; contar <= 5; contar++){

                multi=num*contar;

             if(esPar(contar)){

                console.log(num+"*"+contar+"= "+multi+" es buzz\n");
                pares=pares+1;
            }
            else{

                console.log(num+"*"+contar+"= "+multi+" es bass\n");
                impares=impares+1;
            }
            }
        }return("Los numeros pares son: "+pares+"\n"+"Los numeros pares son: "+impares+"\n");
        
}

//EXPRESION//

const esParExp = function(numero) {
    return numero % 2 === 0;
}

const contadorTablaExp = function(num){
    
    let contar=0, pares=0, impares=0;
    let multi;

    for(num = 1; num <= 5; num++){

        contar=contar+1;

        for(contar = 1; contar <= 5; contar++){

            multi=num*contar;

         if(esParExp(contar)){

            console.log(num+"*"+contar+"= "+multi+" es buzz\n");
            pares=pares+1;
        }
        else{

            console.log(num+"*"+contar+"= "+multi+" es bass\n");
            impares=impares+1;
        }
        }
    }return("Los numeros pares son: "+pares+"\n"+"Los numeros pares son: "+impares+"\n");
}
