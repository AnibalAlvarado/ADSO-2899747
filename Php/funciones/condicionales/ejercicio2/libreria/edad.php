<?php
/**
 * Función de calcular la edad de una persona y decir si es menor o mayor de edad
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function mayorEdad($pfechaAct,$pfechaNa){
    $fechaAct=$pfechaAct;
    $fechaNa=$pfechaNa;
    $edad=$fechaAct-$fechaNa;
    if($edad>=18){
        return "Es mayor de edad";
    }else{
        return "Es menor de edad";
    }
}
?>