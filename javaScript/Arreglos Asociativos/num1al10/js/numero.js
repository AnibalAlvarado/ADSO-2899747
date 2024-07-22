let arregloNumeros=[];
let iteracion;
let numero;
let resultadoPrint='';
arregloNumeros=[1,2,3,4,5,6,7,9,10];

for(iteracion=0; iteracion<arregloNumeros.length; iteracion++){
    resultadoPrint += '<li class="list-group-item">'+arregloNumeros[iteracion]+'</li>'
}
console.log(resultadoPrint);
document.getElementById('lista-numero').innerHTML= resultadoPrint

/**lista Dos */
arregloNumeros=[];
resultadoPrint='';
for(iteracion=0;iteracion<10;iteracion++){
    numero= iteracion+1;
    arregloNumeros.push(numero);
}
for(iteracion=0; iteracion<arregloNumeros.length; iteracion++){
    resultadoPrint += '<li class="list-group-item">'+arregloNumeros[iteracion]+'</li>'
}
document.getElementById('lista-numeroDos').innerHTML= resultadoPrint

//Lista Tres
