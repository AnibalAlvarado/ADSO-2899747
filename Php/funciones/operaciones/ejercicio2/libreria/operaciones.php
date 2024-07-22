<?php
/**
 * Función de operciones aritméticas
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function operaciones($operacion,$pnum1,$pnum2){
    $ope=$operacion;
    $num1=$pnum1;
    $num2=$pnum2;
    if($ope=="suma"||$ope=="+"){ 
    
        $suma = $num1 + $num2;
        return $suma ;
    }else if($ope=="resta"||$ope=="-"){
         
        $resta = $num1 - $num2;
        return $resta;
    }else if($ope=="multiplicacion"||$ope=="x"){
        
        $multi = $num1 * $num2;
        return $multi ;
    }else if($ope=="division"||$ope=="/"){
    
        $divi = $num1 / $num2;
        return $divi;
    }else{
        return "No existe el operador";
    }
    }
?>

