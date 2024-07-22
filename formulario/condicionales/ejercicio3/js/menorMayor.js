function mayorMenor(){
    let num1= parseInt(document.getElementById('txtNumeroUno').value);
    let num2= parseInt(document.getElementById('txtNumeroDos').value);
        
        if(num1 == num2){
            document.getElementById('mayomeno').innerHTML="<strong> Los numeros son iguales </strong>";
            return false;
        }
        else{
            if(num1 > num2){
                document.getElementById('mayomeno').innerHTML="<strong> El numero uno es mayor</strong>";
                return false;
            }else{
                document.getElementById('mayomeno').innerHTML="<strong> El numero dos es mayor</strong>";
                return false;
            }
        }

}