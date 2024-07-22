let cont5=1
let cont3=0
let par=0
let impar=0
const tabla5= function(){
let tablaMultiplicacion = [];
for (let i = 0; i < 5; i++) {
  tablaMultiplicacion[i] = [];
  for (let j = 0; j < 5; j++) {
    tablaMultiplicacion[i][j] = 5*cont5;
    if(tablaMultiplicacion[i][j]%2==0){
        par+=tablaMultiplicacion[i][j]
    }else{
        impar+=tablaMultiplicacion[i][j]
    }
    cont5++;
  }
}


for (let i = 0; i < 5; i++) {
  let fila = "";
  for (let j = 0; j < 5; j++) {
    fila += tablaMultiplicacion[i][j] + "\t";
  }
  console.log(fila);
}
numx=[]
for(i=0;i<tablaMultiplicacion.length;i++){
    for(j=0;j<tablaMultiplicacion[i].length;j++){
        if(i === j || i+j===tablaMultiplicacion[i].length-1){
            numx[cont3]=tablaMultiplicacion[i][j];
            cont3++
        }
    }
}
console.log(numx)
}