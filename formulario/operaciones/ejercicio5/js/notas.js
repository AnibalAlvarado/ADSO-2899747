function prome(){
    let notaUno= parseInt(document.getElementById('txtNotaUno').value);
    let notaDos= parseInt(document.getElementById('txtNotaDos').value);
    let notaTres= parseInt(document.getElementById('txtNotaTres').value);
    let reNota1,reNota2,reNota3;
        reNota1=(notaUno*30)/100;
        reNota2=(notaDos*30)/100;
        reNota3=(notaTres*40)/100;
    let prom;

    prom= (reNota1+reNota2+reNota3)/3;

    document.getElementById('promedio').innerHTML="<strong> Porcentaje de la primera nota: "+reNota1+"<br>Porcentaje de la segunda nota: "+reNota2+"<br>Porcentaje de la tercera nota: "+reNota3+"<br>El Promedio es: "+prom+"</strong>";
    return false;
}



