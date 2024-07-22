/**
 * respuesta de saludo "Hola Mundo"
 * Autor: Anibal Alvarado Andrade
 * fecha: 11 de junio de 2024
 */

function saludo(){
    let saludar;
    
    saludar=document.getElementById('txtSaludo').value;
    document.getElementById('saludo').innerHTML = '<strong>'+saludar+'</strong>';

    return false
}