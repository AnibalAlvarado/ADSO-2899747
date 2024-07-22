
function calcularEdad(){
    let fechaNac= new Date(document.getElementById('txtFecha').value);
    let fechaAct= new Date();
    let edad= fechaAct.getFullYear()- fechaNac.getFullYear() ;
    if(edad>=18){
        document.getElementById('edad').innerHTML="<strong>"+edad+"años -> Es mayor de edad</strong>";
    }else{
        document.getElementById('edad').innerHTML="<strong>"+edad+"años -> Es menor de edad</strong>";
    }
    
    return false;
}