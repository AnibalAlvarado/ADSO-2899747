<?php
/**
 * Función de mostrar la tabla del 1 2 3 4 5 hasta el 5 y mostrar si son pares buzz y si son impares bazz y también cuantos pares y impares hay
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */


function contadorTabla($pnum){
        $num=$pnum;
        $contar=0; $pares=0; $impares=0;

        while($num < 5){

            $num=$num+1;

            $contar=1;

            while($contar <=5){
            
            $multi=$num*$contar;

            if($multi%2==0){

                var_dump($num."*".$contar."= ".$multi." es buzz\n");
                $pares=$pares+1;
                
            }
            else{

                var_dump($num."*".$contar."= ".$multi." es bass\n");
                $impares=$impares+1;

            
            }
            $contar=$contar+1;
          }
       
        }
        return("Los numeros pares son: ".$pares."\n"."Los numeros pares son: ".$impares."\n");
}
