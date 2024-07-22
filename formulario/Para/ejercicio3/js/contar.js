function numUnoCinco(){
    let tabla= parseInt(document.getElementById('txtTabla').value);
    let limite= parseInt(document.getElementById('txtLimite').value);
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    
    for(contar=1;contar<=limite; contar++){
        multi=tabla*contar
        resultado += tabla+" x "+contar+": "+multi+" <br>";
    }
    document.getElementById('contador').innerHTML= resultado;
    return false;
}