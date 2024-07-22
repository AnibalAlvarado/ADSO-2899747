
function calcularEdad(){
    let fechaNac= new Date(document.getElementById('txtFecha').value);
    let fechaNac2= new Date(document.getElementById('txtFecha2').value);
    let fechaNac3= new Date(document.getElementById('txtFecha3').value);
    let fechaAct= new Date();
    let edad= fechaAct.getFullYear()- fechaNac.getFullYear() ;
    let edad2= fechaAct.getFullYear()- fechaNac2.getFullYear() ;
    let edad3= fechaAct.getFullYear()- fechaNac3.getFullYear() ;
    let suma=edad+edad2+edad3;
    let promedio=parseInt(suma/3);
    let mensaje, mensaje2, mensaje3;
    if(edad>=18){
        mensaje="La primera persona es mayor";
    }else{
        mensaje="La primera persona es menor";
    }
    if(edad2>=18){
            mensaje2="La segunda persona es mayor";
    }else{
            mensaje2="La segunda persona es menor";
    }
    if(edad3>=18){
            mensaje3="La tercera persona es mayor";
    }else{
            mensaje3="La tercera persona es menor";
    }
    if(promedio>=18){
        document.getElementById('edad').innerHTML="<strong>"+mensaje+"<br>"+mensaje2+"<br>"+mensaje3+"<br>El promedio: "+promedio+" es mayor de edad</strong>";

    }else{
        document.getElementById('edad').innerHTML="<strong>"+mensaje+"<br>"+mensaje2+"<br>"+mensaje3+"<br>El promedio: "+promedio+" es menor de edad</strong>";
    }
    
    return false;
}