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

function salario(){
    let valorDia= parseInt(document.getElementById('txtValorDia').value);
    let diasTrabajados= parseInt(document.getElementById('txtDiasTrabajados').value);
    let sueldoo, subtranss, saludd,pensionn,arll,deduciblee,pagototall
    sueldoo=sueldo(diasTrabajados,valorDia);
    subtranss=subTrans(diasTrabajados,valorDia);
    saludd=salud(diasTrabajados,valorDia);
    pensionn=pension(diasTrabajados,valorDia);
    arll=arl(diasTrabajados,valorDia);
    deduciblee=deducible(diasTrabajados,valorDia);
    pagototall=pagoTotal(diasTrabajados,valorDia);
    
    document.getElementById('salarioo').innerHTML="<strong> <br>Sueldo: "+sueldoo+"<br>Subsidio de Tranporte: "+subtranss+"<br>Salud: "+saludd+"<br>Pension: "+pensionn+"<br>Arl: "+arll+"<br> El pago total es: "+pagototall+"</strong>";
    return false;
}



