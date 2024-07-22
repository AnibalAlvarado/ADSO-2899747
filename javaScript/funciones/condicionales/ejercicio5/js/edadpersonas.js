/**
 * Función de calcular la edad de 3 personas y imprimir si es mayor de edad y si el promedio se encuentra en la mayoria de edad
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function menorMayor(pfechaAct,pfechaNa,pfechaNa2,pfechaNa3){
   let fechaAct= pfechaAct
   let fechaNa= pfechaNa
   let fechaNa2= pfechaNa2
   let fechaNa3= pfechaNa3
   let edad=fechaAct-fechaNa
   let edad2=fechaAct-fechaNa2
   let edad3=fechaAct-fechaNa3
   let suma= edad+edad2+edad3
   let prom= suma/3
if(edad>=18){
    console.log("el primero es mayor de edad");
}else{
    console.log("el primero es menor de edad");
}if(edad2>=18){
    console.log("el segundo es mayor de edad");
}else{
    console.log("el segundo es menor de edad");
}if(edad3>=18){
    console.log("el tercer es mayor de edad");
}else{
    console.log("el tercer es menor de edad");
}
if(prom>=18){
    console.log("El promedio: "+prom+" es mayor de edad");
}else{
    console.log("El promedio: "+prom+" es menor de edad");
}
return ""
}

const menorMayorExp=function(pfechaAct,pfechaNa,pfechaNa2,pfechaNa3){
    let fechaAct= pfechaAct
    let fechaNa= pfechaNa
    let fechaNa2= pfechaNa2
    let fechaNa3= pfechaNa3
    let edad=fechaAct-fechaNa
    let edad2=fechaAct-fechaNa2
    let edad3=fechaAct-fechaNa3
    let suma= edad+edad2+edad3
    let prom= suma/3
 if(edad>=18){
     console.log("el primero es mayor de edad-Expresión");
 }else{
     console.log("el primero es menor de edad-Expresión");
 }if(edad2>=18){
     console.log("el segundo es mayor de edad-Expresión");
 }else{
     console.log("el segundo es menor de edad-Expresión");
 }if(edad3>=18){
     console.log("el tercer es mayor de edad-Expresión");
 }else{
     console.log("el tercer es menor de edad-Expresión");
 }
 if(prom>=18){
     console.log("El promedio: "+prom+" es mayor de edad-Expresión");
 }else{
     console.log("El promedio: "+prom+" es menor de edad-Expresión");
 }
 return ""
 }