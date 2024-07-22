<?php
/**
 * Función de calcular el sueldo
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function sueldo($pdiasTrabajados,$pvalorDia){
    $diasTrabajados=$pdiasTrabajados;
    $valorDia=$pvalorDia;
    $salario=$diasTrabajados*$valorDia;
    return $salario;
}
function subTrans($pdiasTrabajados,$pvalorDia){
    $salarioMin=1600000;
    $salarioTrans= sueldo($pdiasTrabajados,$pvalorDia);
  
    if($salarioTrans<=2*$salarioMin){
        $subTransporte= 114000;
    }else{
        $subTransporte=0;
    }
    return $subTransporte;
}
function salud($pdiasTrabajados,$pvalorDia){

    $pagoSalud= sueldo($pdiasTrabajados,$pvalorDia)*0.12;
    return $pagoSalud;
}
function pension($pdiasTrabajados,$pvalorDia){
    $pagoPension= sueldo($pdiasTrabajados,$pvalorDia)*0.16;
    return $pagoPension;
}
function arl($pdiasTrabajados,$pvalorDia){
    $pagoArl= sueldo($pdiasTrabajados,$pvalorDia)*0.052;
    return $pagoArl;
}
function deducible($pdiasTrabajados,$pvalorDia){
    $pagoDeducible= pension($pdiasTrabajados,$pvalorDia) + salud($pdiasTrabajados,$pvalorDia)+arl($pdiasTrabajados,$pvalorDia);
    return $pagoDeducible;
}
function pagoTotal($pdiasTrabajados,$pvalorDia){
    $pagoSueldo= sueldo($pdiasTrabajados,$pvalorDia)+subTrans($pdiasTrabajados,$pvalorDia)-deducible($pdiasTrabajados,$pvalorDia);
    return $pagoSueldo;
}
?>