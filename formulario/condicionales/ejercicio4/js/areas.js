function areaCua(){
    let cua1, cua2, cua3;
    let lado1= parseInt(document.getElementById('txtNumeroUno').value);
    let lado2= parseInt(document.getElementById('txtNumeroDos').value);
    let lado3= parseInt(document.getElementById('txtNumeroTres').value);
    cua1=lado1*lado1;
    cua2=lado2*lado2;
    cua3=lado3*lado3;
       
        if(cua1 == cua2 && cua2== cua3){
            document.getElementById('cuadrados').innerHTML="<strong> El area de los tres cuadrados es igual </strong>";
            return false;
        }else{
            if(cua1 > cua2 && cua1 > cua3){
                document.getElementById('cuadrados').innerHTML="<strong> El area del primer cuadrado es el mayor </strong>";
                return false;
            }
            else{
                if(cua2 > cua1 && cua2 > cua3){
                    document.getElementById('cuadrados').innerHTML="<strong> El area del segundo cuadrado es el mayor </strong>";
                    return false;
            }else{
                document.getElementById('cuadrados').innerHTML="<strong> El area del tercer cuadrado es el mayor </strong>";
                return false;
            }
            
        }
        }

}