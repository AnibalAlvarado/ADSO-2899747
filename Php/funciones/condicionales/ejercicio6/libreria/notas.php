<?php
/**
 * Función de Sumar 3 notas y decir si es superior, buena, media o mala
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function notasSuma($pnota1,$pnota2,$pnota3){
$nota1=$pnota1;
$nota2=$pnota2;
$nota3=$pnota3;

$reNota1=($nota1*20)/100;
$reNota2=($nota2*35)/100;
$reNota3=($nota3*45)/100;
$suma=$reNota1+$reNota2+$reNota3;
if($suma > 4.5){
    var_dump("La nota es superior");
}else if ($suma <= 4.5 && $suma > 3.5){
    var_dump("La nota es buena");   
}else if($suma <= 3.5 && $suma >=3){
    var_dump("La nota es media");
}else{
    var_dump("La nota es mala");
}
return $suma;
}
?>