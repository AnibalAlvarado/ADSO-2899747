<?php
/**
 * Función de calcular el area de figuras geometricas
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function figuras($pfigura,$pbase,$paltura){
     $figura=$pfigura;
    if($figura=="cuadrado"){ 
         $lado=$pbase;
         $lado2=$paltura;
         $area= $lado* $lado2;
        return $area;
    }else if($figura=="rectangulo"){
         $base=$pbase;
         $altura= $paltura;
         $area= $base*$altura;
        return $area;
    }else if($figura=="triangulo"){
         $base=$pbase;
         $altura= $paltura;
         $area= ($base*$altura)/2;
        return $area;
    }else{
        return "No se puede operar";
    }
    }

?>
