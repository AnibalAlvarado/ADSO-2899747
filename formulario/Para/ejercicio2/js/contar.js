function numUnoCinco(){
    let limite= parseInt(document.getElementById('txtLimite').value);
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    for(contar=1;contar<=limite;contar++){
        if(contar%2==0){
            resultado += contar+" es Par <br>";
        }
        else{
            resultado += contar+" es Impar <br>";
        }
    }
    document.getElementById('contador').innerHTML= resultado;
    return false;
}