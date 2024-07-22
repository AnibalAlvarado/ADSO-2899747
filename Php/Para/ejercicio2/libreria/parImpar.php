<?php
$num = 5;
for($contar = 1; $contar <= $num; $contar++){

    if($contar%2==0){

        var_dump($contar." es Par\n");
    }
    else{

        var_dump($contar." es impar\n");
    }
}
?>