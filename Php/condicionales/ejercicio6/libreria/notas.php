<?php
$nota1=3.0; $nota2=2.0; $nota3=3.0;
$reNota1; $reNota2; $reNota3;
$suma;

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
var_dump($suma);
?>