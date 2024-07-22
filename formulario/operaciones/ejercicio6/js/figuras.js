
function cua(){
    let lado= parseInt(document.getElementById('txtLado').value);
    let areaCua= lado*lado

    let icono = "<div class='row'><i class='bi bi-square figuraa'></i><div class='area'><span ><strong>Area= "+areaCua+"</strong></span></div></div>";
    let ladoo = '<span class="lado"><strong>' + lado + '</strong></span>';
  
   
    // Combinar el HTML del icono y el texto
    let contenido = icono + ladoo 
   
    // Actualizar el contenido del div rectangulo
    document.getElementById('cuadrado').innerHTML = contenido;
    return false;
}

function tri(){
    let baseTri= parseInt(document.getElementById('txtBaseTri').value);
    let alturaTri= parseInt(document.getElementById('txtAlturaTri').value);
    let areaTri= (baseTri*alturaTri)/2

    let icono = "<div class='row'><i class='bi bi-triangle figuraa'></i><div class='base'><span ><strong>"+baseTri+"</strong></span></div><div class='area'><span ><strong>Area= "+areaTri+"</strong></span></div></div>";
    let altura = '<span class="altura"><strong>' + alturaTri + '</strong></span>';
  
   
    // Combinar el HTML del icono y el texto
    let contenido = icono + altura 
   
    // Actualizar el contenido del div rectangulo
    document.getElementById('triangulo').innerHTML = contenido;
    return false;
}

function rect(){
      let baseRectan= parseInt(document.getElementById('txtBaseRectan').value);
      let alturaRectan= parseInt(document.getElementById('txtAlturaRectan').value);
      let areaRectan= baseRectan*alturaRectan;
     
      // Crear el elemento HTML para el icono y el texto
      let icono = "<div class='row'><i class='bi bi-aspect-ratio figuraa'></i><div class='base'><span ><strong>"+baseRectan+"</strong></span></div><div class='area'><span ><strong>Area= "+areaRectan+"</strong></span></div></div>";
      let altura = '<span class="altura"><strong>' + alturaRectan + '</strong></span>';
    
     
      // Combinar el HTML del icono y el texto
      let contenido = icono + altura 
     
      // Actualizar el contenido del div rectangulo
      
      document.getElementById('rectangulo').innerHTML = contenido;
      
     
      return false;
    }



