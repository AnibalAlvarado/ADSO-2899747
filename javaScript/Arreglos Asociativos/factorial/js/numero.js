/**
 * Numero del 1 al 10
 * Autor: Anibal Alvarado Andrade
 * Fecha: 8/07/2024
 */

    let listaNum = [1, 2, 3, 4, 5];
    let factorial;
    let resultadoPrint='';
    for (let iteracion = 0; iteracion <= listaNum.length - 1; iteracion++) {
      if (iteracion === 0) {
        factorial = 1; 
      } else {
        factorial = listaNum[iteracion] * (factorial || 1); 
      }
      console.log(listaNum[iteracion] + "! = " + factorial); 
      resultadoPrint += '<li class="list-group-item">'+listaNum[iteracion] + '! = ' + factorial+'</li>';
      
    }
    document.getElementById('lista-numero').innerHTML= resultadoPrint

    /*
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let iteracion = 2; iteracion <= num; iteracion++) {
      resultado *= iteracion;
    }
    return resultado;
  }
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
     */
    