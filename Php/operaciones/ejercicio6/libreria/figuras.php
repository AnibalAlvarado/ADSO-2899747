<?php
$cua; $tria; $rec;
 $lado=5; $lado2=5; $tBase=6; $tAltura=9; $base=7; $altura=9;

$cua=$lado*$lado2;
$tria=$tBase*$tBase;
$rec=$base*$altura;

var_dump("El area del Retangulo es: ".$rec."\n");
var_dump("El area del cuadrado es: ".$cua."\n");
var_dump("El area del Triangulo es: ".$tria."\n");
?>