<?php
/**
 * Función de mostrar la tabla del 9 hasta el 5
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla9($pnum){
    $num=$pnum;
    $contar=1;
    while($contar<=5){
        $multi=$num*$contar;
        if($multi % 2 == 0){ 
            var_dump($multi." Es par");
        }else{
            var_dump($multi." Es impar");
        }
        
        $contar= $contar+1;
    }
    return"";
}
