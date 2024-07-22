<?php
 $contar = 0;
 $num=5;
 $multi;
 while($contar<$num){
     $contar= $contar+1;
     $multi=$num*$contar;
     var_dump($num."x".$contar."=".$multi);
 }
?>