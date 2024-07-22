<?php
/**
 * Función de calcular la edad de 3 personas y imprimir si es mayor de edad y si el promedio se encuentra en la mayoria de edad
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function menorMayor($pfechaAct,$pfechaNa,$pfechaNa2,$pfechaNa3){
   $fechaAct= $pfechaAct;
   $fechaNa= $pfechaNa;
   $fechaNa2= $pfechaNa2;
   $fechaNa3= $pfechaNa3;
   $edad=$fechaAct-$fechaNa;
   $edad2=$fechaAct-$fechaNa2;
   $edad3=$fechaAct-$fechaNa3;
   $suma= $edad+$edad2+$edad3;
   $prom= $suma/3;
if($edad>=18){
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
if($prom>=18){
    var_dump("El promedio: ".$prom." es mayor de edad");
}else{
    var_dump("El promedio: ".$prom." es menor de edad");
}
return "";
}
?>