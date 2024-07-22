<?php
$cua1; $cua2; $cua3;
$lado1=8; $lado2=6; $lado3=5;

$cua1=$lado1*$lado1;
$cua2=$lado2*$lado2;
$cua3=$lado3*$lado3;

if($cua1 == $cua2 && $cua2== $cua3){
    var_dump("El area de los triangulos son iguales");
}else{
    if($cua1 > $cua2 && $cua1 > $cua3){
        var_dump("El area del primer cuadrado es mayor");
    }
    else{
        if($cua2 > $cua1 && $cua2 > $cua3){
        var_dump("El area del segundo cuadrado es mayor");
    }else{
        var_dump("El area del tercer cuadrado es mayor");
    }
    
}
}
?>