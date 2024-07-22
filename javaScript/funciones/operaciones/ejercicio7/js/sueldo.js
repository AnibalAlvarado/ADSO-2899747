/**
 * Función de calcular el sueldo
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */



function sueldo(pdiasTrabajados,pvalorDia){
    let diasTrabajados=pdiasTrabajados;
    let valorDia=pvalorDia;
    salario=diasTrabajados*valorDia;
    return salario
}
function subTrans(pdiasTrabajados,pvalorDia){
    let salarioMin=1600000;
    let salarioTrans=sueldo(pdiasTrabajados,pvalorDia);
    let subTransporte;
    if(salarioTrans<=2*salarioMin){
        subTransporte= 114000;
    }else{
        subTransporte=0;
    }
    return subTransporte;
}
function salud(pdiasTrabajados,pvalorDia){
    let pagoSalud;
    pagoSalud= sueldo(pdiasTrabajados,pvalorDia)*0.12;
    return pagoSalud;
}
function pension(pdiasTrabajados,pvalorDia){
    let pagoPension;
    pagoPension= sueldo(pdiasTrabajados,pvalorDia)*0.16;
    return pagoPension;
}
function arl(pdiasTrabajados,pvalorDia){
    let pagoArl;
    pagoArl= sueldo(pdiasTrabajados,pvalorDia)*0.052;
    return pagoArl;
}
function deducible(pdiasTrabajados,pvalorDia){
    let pagoDeducible;
    pagoDeducible= pension(pdiasTrabajados,pvalorDia) + salud(pdiasTrabajados,pvalorDia)+arl(pdiasTrabajados,pvalorDia);
    return pagoDeducible;
}
function pagoTotal(pdiasTrabajados,pvalorDia){
    let pagoSueldo;
    pagoSueldo= sueldo(pdiasTrabajados,pvalorDia)+subTrans(pdiasTrabajados,pvalorDia)-deducible(pdiasTrabajados,pvalorDia);
    return pagoSueldo;
}

const sueldoExp=function(pdiasTrabajados,pvalorDia){
    let diasTrabajados=pdiasTrabajados;
    let valorDia=pvalorDia;
    salario=diasTrabajados*valorDia;
    return salario
}
const subTransExp= function(pdiasTrabajados,pvalorDia){
    let salarioMin=1600000;
    let salarioTrans=sueldoExp(pdiasTrabajados,pvalorDia);
    let subTransporte;
    if(salarioTrans<=2*salarioMin){
        subTransporte= 114000;
    }else{
        subTransporte=0;
    }
    return subTransporte;
}
const saludExp= function(pdiasTrabajados,pvalorDia){
    let pagoSalud;
    pagoSalud= sueldoExp(pdiasTrabajados,pvalorDia)*0.12;
    return pagoSalud;
}
const pensionExp= function(pdiasTrabajados,pvalorDia){
    let pagoPension;
    pagoPension= sueldoExp(pdiasTrabajados,pvalorDia)*0.16;
    return pagoPension;
}
const arlExp =function(pdiasTrabajados,pvalorDia){
    let pagoArl;
    pagoArl= sueldoExp(pdiasTrabajados,pvalorDia)*0.052;
    return pagoArl;
}
const deducibleExp= function(pdiasTrabajados,pvalorDia){
    let pagoDeducible;
    pagoDeducible= pensionExp(pdiasTrabajados,pvalorDia) + saludExp(pdiasTrabajados,pvalorDia)+ arlExp(pdiasTrabajados,pvalorDia);
    return pagoDeducible;
}
const pagoTotalExp= function(pdiasTrabajados,pvalorDia){
    let pagoSueldo;
    pagoSueldo= sueldoExp(pdiasTrabajados,pvalorDia)+subTransExp(pdiasTrabajados,pvalorDia)-deducibleExp(pdiasTrabajados,pvalorDia);
    return pagoSueldo;
}
