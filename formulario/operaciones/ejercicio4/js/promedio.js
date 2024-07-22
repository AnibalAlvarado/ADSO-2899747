function prome(){
    let numeroUno= parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos= parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres= parseInt(document.getElementById('txtNumeroTres').value);
    let prom;

    prom= (numeroUno+numeroDos+numeroTres)/3;

    document.getElementById('promedio').innerHTML="<strong>El Promedio es: "+prom+"</strong>";
    return false;
}



