<?php
/**
 * Función de areas de  cuadrados y cual es mayor o si son iguales
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function cuaAreas($plado1,$plado2,$plado3){
$lado1= $plado1;
$lado2= $plado2;
$lado3= $plado3;
$cua=$lado1*$lado1;
$cua2=$lado2*$lado2;
$cua3=$lado3*$lado3;
if($cua==$cua2 && $cua==$cua3){
return "El area de los cadrados son iguales";
}else if($cua>$cua2 && $cua>$cua3){
    return "El area del primer cuadrado es el mayor";
}else if($cua2>$cua && $cua2>$cua3){
    return "El area del segundo cuadrado es el mayor";
}else{
    return "El area del tercer cuadrado es el mayor";
}
}
?>
