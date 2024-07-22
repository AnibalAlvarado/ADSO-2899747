<?php
$Salario; $diasTrabajados=3; $valorDia=2000;
$salud; $pension; $arl; $descuento; $pagoTotal;

$Salario=$diasTrabajados*$valorDia;
$salud=$Salario*0.12;
$pension=$Salario*0.16;
$arl=$Salario*0.052;
$descuento=$salud+$pension+$arl;
$pagoTotal= $Salario-$descuento;

var_dump("el salario base es:". $Salario);
var_dump("El descuento de salud es: ".$salud."\n");
var_dump("El descuento de la pension es: ".$pension."\n");
var_dump("El descuento de arl es: ".$arl."\n");
var_dump("El pago total es: ".$pagoTotal."\n");
?>