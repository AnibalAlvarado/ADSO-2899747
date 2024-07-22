<?php


function tabla5() {
  $tablaMultiplicacion = [];
  $par = 0;
  $impar = 0;
  $cont3 = 1;


  for ($i = 0; $i < 5; $i++) {
    $tablaMultiplicacion[$i] = [];
    for ($j = 0; $j < 5; $j++) {
      $tablaMultiplicacion[$i][$j] = 5 * $cont3;
      if ($tablaMultiplicacion[$i][$j] % 2 == 0) {
        $par += $tablaMultiplicacion[$i][$j];
      } else {
        $impar += $tablaMultiplicacion[$i][$j];
      }
      $cont3++;
    }
  }


  for ($i = 0; $i < 5; $i++) {
    $fila = "";
    for ($j = 0; $j < 5; $j++) {
      $fila .= $tablaMultiplicacion[$i][$j] . "\t";
    }
    echo $fila . "<br>";
  }

  echo "Suma pares: " . $par . "<br>";
  echo "Suma impares: " . $impar . "<br>";

  return ""; 

}


function tabla9() {
  $tablaMultiplicacion2 = [];
  $par2 = 0;
  $impar2 = 0;
  $cont4 = 1;

  for ($a = 0; $a < 5; $a++) {
    $tablaMultiplicacion2[$a] = [];
    for ($b = 0; $b < 5; $b++) {
      $tablaMultiplicacion2[$a][$b] = 9 * $cont4;
      if ($tablaMultiplicacion2[$a][$b] % 2 == 0) {
        $par2 += $tablaMultiplicacion2[$a][$b];
      } else {
        $impar2 += $tablaMultiplicacion2[$a][$b];
      }
      $cont4++;
    }
  }

  for ($a = 0; $a < 5; $a++) {
    $fila2 = "";
    for ($b = 0; $b < 5; $b++) {
      $fila2 .= $tablaMultiplicacion2[$a][$b] . "\t";
    }
    echo $fila2 . "<br>";
  }

  echo "Suma pares: " . $par2 . "<br>";
  echo "Suma impares: " . $impar2 . "\n";

  return "";
}