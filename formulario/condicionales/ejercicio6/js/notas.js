function prome(){
    let notaUno= parseInt(document.getElementById('txtNotaUno').value);
    let notaDos= parseInt(document.getElementById('txtNotaDos').value);
    let notaTres= parseInt(document.getElementById('txtNotaTres').value);
    let reNota1,reNota2,reNota3;
        reNota1=(notaUno*20)/100;
        reNota2=(notaDos*35)/100;
        reNota3=(notaTres*45)/100;
    let prom;

    suma=parseFloat(reNota1+reNota2+reNota3);

        if(suma > 4.5){
            document.getElementById('promedio').innerHTML="<strong> La nota es superior: "+suma+" </strong>";
            return false;
        }else if (suma <= 4.5 && suma > 3.5){
            document.getElementById('promedio').innerHTML="<strong> La nota es buena: "+suma+" </strong>";
            return false; 
        }else if(suma <= 3.5 && suma >=3){
            document.getElementById('promedio').innerHTML="<strong> La nota es media: "+suma+" </strong>";
            return false;
        }else{
            document.getElementById('promedio').innerHTML="<strong> La nota es mala: "+suma+" </strong>";
            return false;
        }
}



