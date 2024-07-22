function porcen(){
    let porcent= parseInt(document.getElementById('txtPorcen').value);
    let numero= parseInt(document.getElementById('txtNumero').value);
    let resul;

    resul= (numero*porcent)/100;

    document.getElementById('porcentaje').innerHTML="<strong>El "+porcent+"% de "+numero+" es: "+resul+"</strong>";
    return false;
}



