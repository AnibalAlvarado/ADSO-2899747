<?php

$bingo = [];
function bingoo() {
  for ($i = 0; $i < 6; $i++) {
    $bingo[$i] = [];
    for ($j = 0; $j < 6; $j++) {
      if ($i == 0 && $j == 0) {
        $bingo[$i][$j] = "B";
      }
      if ($i == 0 && $j == 1) {
        $bingo[$i][$j] = "I";
      }
      if ($i == 0 && $j == 2) {
        $bingo[$i][$j] = "N";
      }
      if ($i == 0 && $j == 3) {
        $bingo[$i][$j] = "G";
      }
      if ($i == 0 && $j == 4) {
        $bingo[$i][$j] = "O";
      }
      if ($i > 0 && $j == 0) {
        $ramdomm = floor(mt_rand(1, 15));
        $bingo[$i][$j] = $ramdomm;
      }
      if ($i > 0 && $j == 1) {
        $ramdomm = floor(mt_rand(16, 30));
        $bingo[$i][$j] = $ramdomm;
      }
      if ($i > 0 && $j == 2) {
        $ramdomm = floor(mt_rand(31, 45));
        $bingo[$i][$j] = $ramdomm;
      }
      if ($i > 0 && $j == 3) {
        $ramdomm = floor(mt_rand(46, 60));
        $bingo[$i][$j] = $ramdomm;
      }
      if ($i > 0 && $j == 4) {
        $ramdomm = floor(mt_rand(61, 75));
        $bingo[$i][$j] = $ramdomm;
      }
    }
  }

  for ($i = 0; $i < 6; $i++) {
    $fila = "";
    for ($j = 0; $j < 5; $j++) {
      $fila .= $bingo[$i][$j] . "\t";
    }
    echo $fila . "<br>";
  }
}