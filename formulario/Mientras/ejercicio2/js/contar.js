function numUnoCinco(){
    let limite= parseInt(document.getElementById('txtLimite').value);
    let contar= 0
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    
    while(contar<limite){
        contar=contar+1
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