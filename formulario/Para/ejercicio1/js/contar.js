function numUnoCinco(){
    let limite= parseInt(document.getElementById('txtLimite').value);
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    for(contar=1 ;contar <= limite; contar++){
        resultado += contar+" ";
    }
    document.getElementById('contador').innerHTML= resultado;
    return false;
}