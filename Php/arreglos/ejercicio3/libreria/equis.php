<?php
function tabla5() {
    $tablaMultiplicacion = [];
    $par = 0;
    $impar = 0;
    $multiplicador = 1;
  

    for ($i = 0; $i < 5; $i++) {
      for ($j = 0; $j < 5; $j++) {
        $tablaMultiplicacion[$i][$j] = 5 * $multiplicador;
        if ($tablaMultiplicacion[$i][$j] % 2 == 0) {
          $par += $tablaMultiplicacion[$i][$j];
        } else {
          $impar += $tablaMultiplicacion[$i][$j];
        }
        $multiplicador++;
      }
    }
  
    echo "Tabla del 5:<br>";
    for ($i = 0; $i < 5; $i++) {
      for ($j = 0; $j < 5; $j++) {
        echo $tablaMultiplicacion[$i][$j] . "\t";
      }
      echo "<br>";
    }

  
  $elementosDiagonales = [];
  for ($i = 0; $i < 5; $i++) {
    $elementosDiagonales[] = $tablaMultiplicacion[$i][$i]; 
    $elementosDiagonales[] = $tablaMultiplicacion[$i][4-$i]; 
  }


  echo "X: \n";
  foreach ($elementosDiagonales as $elemento) {
    echo $elemento . ", ";
  }
  echo "\n";

  return "";
}
  