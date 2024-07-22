function edadd(){
    let edad= parseInt(document.getElementById('txtEdad').value);
        if(edad>=18){
            
            document.getElementById('eda').innerHTML="<strong> Es mayor de edad </strong>";
             return false;
        }else{
            document.getElementById('eda').innerHTML="<strong> Es menor de edad </strong>";
            return false;
        }

}