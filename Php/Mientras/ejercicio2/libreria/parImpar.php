<?php
$contar=0;
$num = 5;

while($contar < $num){

    $contar=$contar+1;

    if($contar%2==0){

        var_dump($contar." es Par\n");
    }
    else{

        var_dump($contar." es impar\n");
    }
}
?>