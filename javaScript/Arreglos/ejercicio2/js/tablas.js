let cont3=1
let par=0
let impar=0
const tabla5= function(){
let tablaMultiplicacion = [];
for (let i = 0; i < 5; i++) {
  tablaMultiplicacion[i] = [];
  for (let j = 0; j < 5; j++) {
    tablaMultiplicacion[i][j] = 5*cont3;
    if(tablaMultiplicacion[i][j]%2==0){
        par+=tablaMultiplicacion[i][j]
    }else{
        impar+=tablaMultiplicacion[i][j]
    }
    cont3++;
  }
}


for (let i = 0; i < 5; i++) {
  let fila = "";
  for (let j = 0; j < 5; j++) {
    fila += tablaMultiplicacion[i][j] + "\t";
  }
  console.log(fila);
}
console.log("suma pares: "+par)
console.log("suma impares: "+impar)
return""
}
 let cont4=1
 let par2=0
 let impar2=0
const tabla9= function(){
    let tablaMultiplicacion2 = [];
    for (let a = 0; a < 5; a++) {
      tablaMultiplicacion2[a] = [];
      for (let b = 0; b < 5; b++) {
        tablaMultiplicacion2[a][b] = 9*cont4;
        if(tablaMultiplicacion2[a][b]%2==0){
            par2+=tablaMultiplicacion2[a][b]
        }else{
            impar2+=tablaMultiplicacion2[a][b]
        }
        cont4++;
      }
    }
    
    
    for (let a = 0; a < 5; a++) {
      let fila2 = "";
      for (let b = 0; b < 5; b++) {
        fila2 += tablaMultiplicacion2[a][b] + "\t";
      }
      console.log(fila2);
    }
    console.log("suma pares: "+par2)
    console.log("suma impares: "+impar2)
    return""
    }
