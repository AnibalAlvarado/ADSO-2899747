function numUnoCinco(){
    let tabla= parseInt(document.getElementById('txtTabla').value);
    let limite= parseInt(document.getElementById('txtLimite').value);
    let contar= 0
    let resultado= "<strong>Numeros contados: </strong>" + "<br>"
    let par=0;
    let impar= 0;
    while(tabla<=limite){
        contar=1
        while(contar<=5){
            multi= tabla*contar
            if(multi % 2 == 0){
                resultado += tabla+" x "+contar+"= "+multi+" Buzz<br>";
                par= par+1
            }else{
                resultado += tabla+" x "+contar+"= "+multi+" Bass<br>";
                impar= impar+1
            }
            contar= contar+1
        }
        tabla= tabla+1
    }
    document.getElementById('contador').innerHTML= resultado+"<br>Total pares:"+par+"<br>Total impares"+impar;
    return false;
}