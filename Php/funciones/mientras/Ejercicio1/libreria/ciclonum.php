<?php
/**
 * Función de mostrar los numeros del 1 al 5 con ciclo while y for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function numUnoCinco($pnum){
$num= $pnum;
$contar= 0;
while($contar < $num){

    $contar=$contar+1;

    var_dump($contar);
    
}
return "1 Al 5";
}
?>