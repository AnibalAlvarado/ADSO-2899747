<?php
$nota1=3.0; $nota2=5.0; $nota3=2.0;
$porcen1= 30;
$porcen2=40;
$reNota1;$reNota2;$reNota3;
$suma;

$reNota1=($nota1*$porcen1)/100;
$reNota2=($nota2*$porcen1)/100;
$reNota3=($nota3*$porcen2)/100;

$suma=$reNota1+$reNota2+$reNota3;

var_dump("El porcentaje de la primera nota es: ".$reNota1."\n");
var_dump("El porcentaje de la segunda nota es: ".$reNota2."\n");
var_dump("El porcentaje de la tercera nota es: ".$reNota3."\n");
var_dump("La suma de los promedios es: ".$suma);
?>