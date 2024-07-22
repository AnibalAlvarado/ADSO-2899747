function numUnoCinco(){
    let limite= parseInt(document.getElementById('txtLimite').value);
    let contar= 0
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    while(contar < limite){
        contar=contar+1;
        resultado += contar+" ";
    }
    document.getElementById('contador').innerHTML= resultado;
    return false;
}