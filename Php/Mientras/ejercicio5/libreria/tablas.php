<?php
$contar;$multi;$par;$impar;$tabla;
$tabla=0;
$impar=0;
$par=0;
while($tabla<5){
    $tabla= $tabla+1;
    $contar=1;
    while($contar<=5){
        $multi= $tabla*$contar;
        if($multi % 2 == 0){
            var_dump($tabla."*".$contar."=".$multi."buzz");
            $par= $par+1;
        }else{
            var_dump($tabla."*".$contar."=".$multi."bass");
            $impar= $impar+1;
        }
        $contar= $contar+1;
    }
}
var_dump("La cantidad de pares es: ".$par);
var_dump("La cantidad de impares es: ".$impar);
?>