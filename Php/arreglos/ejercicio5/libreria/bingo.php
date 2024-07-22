<?php
$interno=[];
$i;
$j;
$aumento=1;

for ($i = 0; $i < 5; $i++) {
    $interno[$i] = [];
    for ($j = 0; $j < 5; $j++) {
        $interno[$i][$j] = 2 * $aumento;
        $aumento++;
    }  
}
echo "Bingo:<br>";
foreach ($interno as $row) {
  foreach ($row as $value) {
    echo $value . "\t";
  }
  echo "<br>";
}



//MOSTRAR LA TRIPLE XXX
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        if ($i === $j || $i + $j === 2) {
            echo"<br>";
            echo"x1: ".$interno[$i][$j];
            echo"<br>";
        }
    }
}
echo"<br>";

for ($i = 2; $i < 5; $i++) {
    for ($j = 0; $j < 3; $j++) {
        if ($i + $j  == ($j + 1)*2 || $i + $j === 4) {
            echo"x2: ". $interno[$i][$j];
            echo"<br>";
        }
    }
}
echo"<br>";
    
for ($i = 0; $i < 3; $i++) {
    for ($j = 2; $j < 5; $j++) {
        if ($i + $j  === ($j - 1)*2 || $i + $j === 4) {
            echo "x3: ".$interno[$i][$j];
            echo"<br>";

        }
    }
}
echo "<br>";

//MOSTRAR LAS LETRAS DEL BINGO

//Letra B
echo"LETRA B <br>";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][0]." ";
}
echo"<br>";
//Letra I
echo"LETRA I <br>";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][1]." ";
} 
echo"<br>";
//Letra N
echo"LETRA N <br>";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][2]." ";
}
echo"<br>";
//Letra G
echo"LETRA G <br>";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][3]." ";
}
echo"<br>";
//Letra O
echo"LETRA O <br>";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][4]." ";
}