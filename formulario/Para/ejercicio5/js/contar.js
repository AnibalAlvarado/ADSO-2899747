function numUnoCinco(){
    let tabla= parseInt(document.getElementById('txtTabla').value);
    let limite= parseInt(document.getElementById('txtLimite').value);
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    let par=0;
    let impar= 0;
    for(tabla=tabla;tabla<=limite; tabla++){
        contar=1
        for(contar=1;contar<=5;contar++){
            multi= tabla*contar
            if(multi % 2 == 0){
                resultado += tabla+" x "+contar+"= "+multi+" Buzz<br>";
                par= par+1
            }else{
                resultado += tabla+" x "+contar+"= "+multi+" Bass<br>";
                impar= impar+1
            }
        }
    }
    document.getElementById('contador').innerHTML= resultado+"<br>Total pares:"+par+"<br>Total impares"+impar;
    return false;
}