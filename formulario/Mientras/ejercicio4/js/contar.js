function numUnoCinco(){
    let tabla= parseInt(document.getElementById('txtTabla').value);
    let limite= parseInt(document.getElementById('txtLimite').value);
    let contar= 0
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    
    while(contar<limite){
        contar=contar+1
        multi=tabla*contar
        if(multi % 2 == 0){ 
            resultado +=tabla+" x "+contar+"= "+ multi+" es par <br>";
        }else{
            resultado += tabla+" x "+contar+"= "+ multi+" es impar <br>";
        }
        
    }
    document.getElementById('contador').innerHTML= resultado;
    return false;
}