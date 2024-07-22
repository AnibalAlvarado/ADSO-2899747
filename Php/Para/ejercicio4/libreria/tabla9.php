<?php
$num=9;
$multi;
for($contar=1;$contar<=5;$contar++){
    $multi=$num*$contar;
    if($multi % 2 == 0){ 
        var_dump($multi." Es par");
    }else{
        var_dump($multi." Es impar");
    }
    
   
}
?>