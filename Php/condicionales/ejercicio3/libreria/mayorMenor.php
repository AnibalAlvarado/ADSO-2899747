<?php
$num1 = 3;
$num2 = 5;

var_dump("numero Uno: ".$num1);
echo"<br>";
var_dump("numero Dos: ".$num2);
echo"<br>";
if($num1 == $num2){
    var_dump("son iguales");
}
else{
    if($num1 > $num2){
        var_dump("numero uno es mayor");
    }else{
        var_dump("numero dos es mayor");
    }
}
?>