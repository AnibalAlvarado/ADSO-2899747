const nums=function(){
let par=[];
let impar=[]
let arreglo=[1,2,3,4,5,6,7,8,9,10];
arreglo.forEach((elemento)=>{
    if(elemento % 2 == 0){
        par.push(elemento)
    }else{
        impar.push(elemento)
    }
})
console.log("Numeros pares: "+ par)

console.log("Numeros impares: "+ impar)

return"";
}
