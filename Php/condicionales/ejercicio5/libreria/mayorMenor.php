<?php
$edad1;$edad2;$edad3; $suma; $promedio;
$fechaAct=2024; $fechaNa1=2000;$fechaNa2=1999;$fechaNa3=2009;
$edad1= $fechaAct - $fechaNa1;
$edad2= $fechaAct - $fechaNa2;
$edad3= $fechaAct - $fechaNa3;
$suma=$edad1+$edad2+$edad3;
$promedio=$suma/3;
if($edad1>=18){
    var_dump("el primero es mayor de edad");
}else{
    var_dump("el primero es menor de edad");
}if($edad2>=18){
    var_dump("el segundo es mayor de edad");
}else{
    var_dump("el segundo es menor de edad");
}if($edad3>=18){
    var_dump("el tercer es mayor de edad");
}else{
    var_dump("el tercer es menor de edad");
}
if($promedio>=18){
    var_dump("El promedio: ".$promedio." es mayor de edad");
}else{
    var_dump("El promedio: ".$promedio." es menor de edad");
}
?>