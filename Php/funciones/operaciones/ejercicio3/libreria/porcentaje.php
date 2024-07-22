<?php
/**
 * Función de porcentaje de un numero
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function porce($pnum,$pporcen){
    $num=$pnum;
    $porcen=$pporcen;

    $resul=($porcen*$num)/100;
    return $resul;
}
?>
