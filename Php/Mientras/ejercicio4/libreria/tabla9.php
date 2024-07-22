<?php
$contar = 1;
$num=9;
$multi;
while($contar<=5){
    $multi=$num*$contar;
    if($multi % 2 == 0){ 
        var_dump($multi." Es par");
    }else{
        var_dump($multi." Es impar");
    }
    
    $contar= $contar+1;
}
?>