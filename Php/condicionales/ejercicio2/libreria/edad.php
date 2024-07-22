<?php
$edad;
$fechaAct=2024; $fechaNa=2000;

$edad= $fechaAct - $fechaNa;

var_dump("Su edad es: ".$edad."\n");

if($edad > 17){
var_dump("Usted es mayor de edad");
}else{
var_dump("Usted es menor de edad");
}
?>