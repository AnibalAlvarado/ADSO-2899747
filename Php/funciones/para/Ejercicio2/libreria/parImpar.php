<?php
/**
 * Función de mostrar los numeros del 1 al 5 y si son pares o impares con el ciclo while y for
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function paresImpares($pnum){
    $num= $pnum;
    for($contar = 1; $contar <= $num; $contar++){
        if($contar%2==0){

           var_dump($contar." es Par\n");
       }
       else{

           var_dump($contar." es impar\n");
       }
   }
    return"";
}
