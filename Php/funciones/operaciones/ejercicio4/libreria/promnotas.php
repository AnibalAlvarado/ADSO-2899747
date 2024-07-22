<?php
/**
 * Función de calcular el promedio de 3 notas
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */



function prome($pnota,$pnota2,$pnota3){
$nota= $pnota;
$nota2= $pnota2;
$nota3= $pnota3;
$suma= $nota+$nota2+$nota3;
$prom= $suma/3;
return $prom;
}
?>