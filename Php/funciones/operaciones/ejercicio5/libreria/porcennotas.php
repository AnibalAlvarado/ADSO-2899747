<?php
/**
 * Función de porcentaje de 3 notas y suma de porcentajes
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */


function prome($pnum,$pnum2,$pnum3,$pporcen,$pporcen2){
    $num=$pnum;
    $num2=$pnum2;
    $num3=$pnum3;
    $porcen=$pporcen;
    $porcen2=$pporcen;
    $porcen3=$pporcen2;

    $reNota=($porcen*$num)/100;
    $reNota2=($porcen2*$num2)/100;
    $reNota3=($porcen3*$num3)/100;
    $suma= $reNota+$reNota2+$reNota3;
    var_dump($reNota,$reNota2,$reNota3);
    return $suma;
}

?>