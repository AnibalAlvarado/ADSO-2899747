/**
 * Función de Sumar 3 notas y decir si es superior, buena, media o mala
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function notasSuma(pnota1,pnota2,pnota3){
let nota1=pnota1
let nota2=pnota2
let nota3=pnota3
let suma
let reNota1=(nota1*20)/100;
let reNota2=(nota2*35)/100;
let reNota3=(nota3*45)/100;
suma=parseFloat(reNota1+reNota2+reNota3);
if(suma > 4.5){
    console.log("La nota es superior");
}else if (suma <= 4.5 && suma > 3.5){
    console.log("La nota es buena");   
}else if(suma <= 3.5 && suma >=3){
    console.log("La nota es media");
}else{
    console.log("La nota es mala");
}
return suma;
}
const notasSumaExp= function(pnota1,pnota2,pnota3){
    let nota1=pnota1
    let nota2=pnota2
    let nota3=pnota3
    let suma
    let reNota1=(nota1*20)/100;
    let reNota2=(nota2*35)/100;
    let reNota3=(nota3*45)/100;
    suma=parseFloat(reNota1+reNota2+reNota3);
    if(suma > 4.5){
        console.log("La nota es superior-EXP");
    }else if (suma <= 4.5 && suma > 3.5){
        console.log("La nota es buena-EXP");   
    }else if(suma <= 3.5 && suma >=3){
        console.log("La nota es media-EXP");
    }else{
        console.log("La nota es mala-EXP");
    }
    return suma+"-EXP";
    }