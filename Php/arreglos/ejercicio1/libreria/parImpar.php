<?php
function parImpa(){ 
$par = [];
$impar = [];
$arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreach ($arreglo as $elemento) {

    if ($elemento % 2 == 0) {
        $par[] = $elemento;
    } else {
        $impar[] = $elemento;
    }
}
echo "Números pares: " . implode(', ', $par) . "\n";
echo "Números impares: " . implode(', ', $impar) . "\n";
return"";
}




