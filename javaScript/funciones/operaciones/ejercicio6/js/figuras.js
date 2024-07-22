/**
 * Función de calcular el area de figuras geometricas
 * Autor: Anibal Alvarado Andrade
 * Martes 02 de abril de 2024
 */

function figuras(pfigura,pbase,paltura){
    let figura=pfigura
    if(figura=="cuadrado"){ 
        let lado=pbase;
        let lado2=paltura
        let area= lado* lado2;
        return area;
    }else if(figura=="rectangulo"){
        let base=pbase;
        let altura= paltura;
        let area= base*altura;
        return area;
    }else if(figura=="triangulo"){
        let base=pbase;
        let altura= paltura;
        let area= (base*altura)/2;
        return area;
    }else{
        return "No se puede operar"
    }
    }

const figurasExp=function(pfigura,pbase,paltura){
    let figura=pfigura
    if(figura=="cuadrado"){ 
        let lado=pbase;
        let lado2=paltura
        let area= lado* lado2;
        return area+" expresión";
    }else if(figura=="rectangulo"){
        let base=pbase;
        let altura= paltura;
        let area= base*altura;
        return area+" expresión";
    }else if(figura=="triangulo"){
        let base=pbase;
        let altura= paltura;
        let area= (base*altura)/2;
        return area+" expresión";
    }else{
        return "No se puede operar"
    }
    }
