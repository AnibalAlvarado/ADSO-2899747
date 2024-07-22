<?php
/**
 * Función de mostrar la tabla del 9 hasta el 5 ciclo for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla9($pnum){
    $num= $pnum;
    for($contar=1;$contar<=5;$contar++){
        $multi=$num*$contar;
        if($multi % 2 == 0){ 
            var_dump($multi." Es par");
        }else{
            var_dump($multi." Es impar");
        }
    }
    return"";
}

