<?php
/**
 * Función de mostrar la tabla del 5
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla5($pnum){
$num = $pnum;
$contar= 0;
        while($contar<$num){
            $contar= $contar+1;
            $multi=$num*$contar;
            var_dump($num."x".$contar."=".$multi);
        }
        return"";
}
