let bingo=[]
let cont3=0
let numx=[];

document.addEventListener('DOMContentLoaded', function () {
for (let i = 0; i < 6; i++) {
    bingo[i] = [];
    for (let j = 0; j < 6; j++) {
        if(i==0 && j==0){
            bingo[i][j] = "B";
        }
        if(i==0 && j==1){
            bingo[i][j] = "I";
        }
        if(i==0 && j==2){
            bingo[i][j] = "N";
        }
        if(i==0 && j==3){
            bingo[i][j] = "G";
        }
        if(i==0 && j==4){
            bingo[i][j] = "O";
        }
        if(j==0 && i>0){
            let ramdomm= Math.floor(Math.random()*15)+1
            bingo[i][j] = ramdomm;
        }else if(j==1 && i>0){
            let ramdomm= Math.floor(Math.random()*(30-15)+1)+15
            bingo[i][j] = ramdomm;
        }else if(j==2 && i>0){
            let ramdomm= Math.floor(Math.random()*(45-30)+1)+30
            bingo[i][j] = ramdomm;
        }else if(j==3 && i>0){
            let ramdomm= Math.floor(Math.random()*(60-45)+1)+45
            bingo[i][j] = ramdomm;
        }else if(j==4 && i>0){
            let ramdomm= Math.floor(Math.random()*(75-60)+1)+60
            bingo[i][j] = ramdomm;
        }
    }
  }
  for (let i = 0; i < 6; i++) {
    let fila = "";
    for (let j = 0; j < 5; j++) {
      fila += bingo[i][j] + "\t";
    }
    console.log(fila);
  }
  let card2=""
  let card=""
  let card3=""
  let card4=""
  let card5=""
  let card6=""
  let card7=""
  let card8=""

  
//tablero bingo normal
card += "<thead><tr>";
for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
  card += "<th>" + bingo[0][i] + "</th>";
}
card += "</tr></thead>";

card += "<tbody>";
for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
  card += "<tr>";
  for (let j = 0; j < 5; j++) {
    card += "<td>" + bingo[i][j] + "</td>";
  }
  card += "</tr>"; // cierra '<tr>'
}
card += "</tbody>";
//fin tablero bingo normal


// primera X
card2 += "<thead><tr>";
for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
    card2 += "<th>" + bingo[0][i] + "</th>";
  }
  card2 += "</tr></thead>";
  
  card2 += "<tbody>";
  for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
    card2 += "<tr>";
    for (let j = 0; j < 5; j++) {
        if((i === 1 && j === 0) || (i === 1 && j === 4) || (i === 2 && j === 1) || (i === 2 && j === 3) || (i === 3 && j === 2)|| (i === 4 && j === 1)|| (i === 4 && j === 3)|| (i === 5 && j === 0)|| (i === 5 && j === 4)){
            card2 += "<td class='violet'>" + bingo[i][j] + "</td>";
        }else{
            card2 += "<td>" + bingo[i][j] + "</td>";
        }
      
    }
    card2 += "</tr>"; // cierra '<tr>'
  }
  card2 += "</tbody>";
  //fin primera X


  //tres X
  card3 += "<thead><tr>";
for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
    card3 += "<th>" + bingo[0][i] + "</th>";
  }
  card3 += "</tr></thead>";
  
  card3 += "<tbody>";
  for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
    card3 += "<tr>";
    for (let j = 0; j < 5; j++) {
        if((i === 1 && j === 0) || (i === 1 && j === 2) || (i === 2 && j === 1) || (i === 3 && j === 0) || (i === 3 && j === 2)||(i === 3 && j === 0) || (i === 3 && j === 2) || (i === 4 && j === 1) || (i === 5 && j === 0) || (i === 5 && j === 2) || (i===1 && j===4)|| (i===2 && j===3)|| (i===3 && j===4)){
            card3 += "<td class='green'>" + bingo[i][j] + "</td>";
        }else{
            card3 += "<td>" + bingo[i][j] + "</td>";
        }
      
    }
    card3 += "</tr>"; // cierra '<tr>'
  }
  card3 += "</tbody>";
  //fin tres equis


  //bingo solo color B
  card4 += "<thead><tr>";
for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
    if(i === 0 ){
        card4 += "<th class='red'>" + bingo[0][i] + "</th>";
    }else{
        card4 += "<th>" + bingo[0][i] + "</th>";
    }
  }
  card4 += "</tr></thead>";
  
  card4 += "<tbody>";
  for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
    card4 += "<tr>";
    for (let j = 0; j < 5; j++) {
        if(j === 0 ){
            card4 += "<td class='red'>" + bingo[i][j] + "</td>";
        }else{
            card4 += "<td>" + bingo[i][j] + "</td>";
        }
      
    }
    card4 += "</tr>"; // cierra '<tr>'
  }
  card4 += "</tbody>";
  //fin bingo b


  //bingo I
  card5 += "<thead><tr>";
for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
    if(i === 1 ){
        card5 += "<th class='yellow'>" + bingo[0][i] + "</th>";
    }else{
        card5 += "<th>" + bingo[0][i] + "</th>";
    }
  }
  card5 += "</tr></thead>";
  
  card5 += "<tbody>";
  for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
    card5 += "<tr>";
    for (let j = 0; j < 5; j++) {
        if(j === 1 ){
            card5 += "<td class='yellow'>" + bingo[i][j] + "</td>";
        }else{
            card5 += "<td>" + bingo[i][j] + "</td>";
        }
      
    }
    card5 += "</tr>"; // cierra '<tr>'
  }
  card5 += "</tbody>";
  //fin bingo I


  //inicio N
  card6 += "<thead><tr>";
  for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
      if(i === 2 ){
          card6 += "<th class='green'>" + bingo[0][i] + "</th>";
      }else{
          card6 += "<th>" + bingo[0][i] + "</th>";
      }
    }
    card6 += "</tr></thead>";
    
    card6 += "<tbody>";
    for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
      card6 += "<tr>";
      for (let j = 0; j < 5; j++) {
          if(j === 2 ){
              card6 += "<td class='green'>" + bingo[i][j] + "</td>";
          }else{
              card6 += "<td>" + bingo[i][j] + "</td>";
          }
        
      }
      card6 += "</tr>"; // cierra '<tr>'
    }
    card6 += "</tbody>";
  //fin N


  //Inicio G
  card7 += "<thead><tr>";
  for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
      if(i === 3 ){
          card7 += "<th class='blue'>" + bingo[0][i] + "</th>";
      }else{
          card7 += "<th>" + bingo[0][i] + "</th>";
      }
    }
    card7 += "</tr></thead>";
    
    card7 += "<tbody>";
    for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
      card7 += "<tr>";
      for (let j = 0; j < 5; j++) {
          if(j === 3 ){
              card7 += "<td class='blue'>" + bingo[i][j] + "</td>";
          }else{
              card7 += "<td>" + bingo[i][j] + "</td>";
          }
        
      }
      card7 += "</tr>"; //cierra '<tr>'
    }
    card7 += "</tbody>";
  //Fin G


  //Inicio O
  card8 += "<thead><tr>";
  for (let i = 0; i < 5; i++) { // solo itera las 5 columnas del header
      if(i === 4 ){
          card8 += "<th class='violet'>" + bingo[0][i] + "</th>";
      }else{
          card8 += "<th>" + bingo[0][i] + "</th>";
      }
    }
    card8 += "</tr></thead>";
    
    card8 += "<tbody>";
    for (let i = 1; i < 6; i++) { // Inicia en la fila 1 (la segunda fila)
      card8 += "<tr>";
      for (let j = 0; j < 5; j++) {
          if(j === 4 ){
              card8 += "<td class='violet'>" + bingo[i][j] + "</td>";
          }else{
              card8 += "<td>" + bingo[i][j] + "</td>";
          }
        
      }
      card8 += "</tr>"; // cierra '<tr>'
    }
    card8 += "</tbody>";
  //Fin O


  document.getElementById('bingou').innerHTML = card;
  document.getElementById('bingou2').innerHTML = card2;
  document.getElementById('bingou3').innerHTML = card3;
  document.getElementById('bingou4').innerHTML = card4;
  document.getElementById('bingou5').innerHTML = card5;
  document.getElementById('bingou6').innerHTML = card6;
  document.getElementById('bingou7').innerHTML = card7;
  document.getElementById('bingou8').innerHTML = card8;
  
})

