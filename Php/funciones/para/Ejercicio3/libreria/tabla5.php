<?php
/**
 * Función de mostrar la tabla del 5 for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function tabla5($pnum){
$num = $pnum;
for($contar=1;$contar<=$num;$contar++){
    $multi=$num*$contar;
    var_dump($num."x".$contar."=".$multi);
}
        return"";
}

