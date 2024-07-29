let bingo=[]
let cont3=0
let numx=[];
let ramdomm;
let numExisten=[]
const xPatrones = [
    // Patrón para una X
    [
        {filass: 1, columnass: 0}, {filass: 1, columnass: 4},
        {filass: 2, columnass: 1}, {filass: 2, columnass: 3},
        {filass: 3, columnass: 2},
        {filass: 4, columnass: 1}, {filass: 4, columnass: 3},
        {filass: 5, columnass: 0}, {filass: 5, columnass: 4}
    ],
    // Patrones para tres X
    [
        {filass: 1, columnass: 0}, {filass: 1, columnass: 2}, {filass: 1, columnass: 4},
        {filass: 2, columnass: 1}, {filass: 2, columnass: 3},
        {filass: 3, columnass: 0}, {filass: 3, columnass: 2}, {filass: 3, columnass: 4},
        {filass: 4, columnass: 1},
        {filass: 5, columnass: 0}, {filass: 5, columnass: 2}
    ]
];
document.addEventListener('DOMContentLoaded', function () {
for (let filass = 0; filass < 6; filass++) {
    bingo[filass] = [];
    for (let columnass = 0; columnass < 6; columnass++) {
        if(filass==0 && columnass==0){
            bingo[filass][columnass] = "B";
        }
        if(filass==0 && columnass==1){
            bingo[filass][columnass] = "I";
        }
        if(filass==0 && columnass==2){
            bingo[filass][columnass] = "N";
        }
        if(filass==0 && columnass==3){
            bingo[filass][columnass] = "G";
        }
        if(filass==0 && columnass==4){
            bingo[filass][columnass] = "O";
        }
        if(columnass==0 && filass>0){
            do {
                ramdomm = Math.floor(Math.random() * 15) + 1;
              } while (numExisten.includes(ramdomm));
              bingo[filass][columnass] = ramdomm;
              numExisten.push(ramdomm);
            
        }else if(columnass==1 && filass>0){
             do {
                ramdomm= Math.floor(Math.random()*(30-15)+1)+15
              } while (numExisten.includes(ramdomm));
              bingo[filass][columnass] = ramdomm;
              numExisten.push(ramdomm);
        }else if(columnass==2 && filass>0){
             
             do {
                ramdomm= Math.floor(Math.random()*(45-30)+1)+30
              } while (numExisten.includes(ramdomm));
              bingo[filass][columnass] = ramdomm;
              numExisten.push(ramdomm);
        }else if(columnass==3 && filass>0){
             
             do {
                ramdomm= Math.floor(Math.random()*(60-45)+1)+45
              } while (numExisten.includes(ramdomm));
              bingo[filass][columnass] = ramdomm;
              numExisten.push(ramdomm);
        }else if(columnass==4 && filass>0){
             
             do {
                ramdomm= Math.floor(Math.random()*(75-60)+1)+60
              } while (numExisten.includes(ramdomm));
              bingo[filass][columnass] = ramdomm;
              numExisten.push(ramdomm);
        }
    }
  }
  
  let card=""
//tablero bingo normal
card += "<thead><tr>";
for (let filass = 0; filass < 5; filass++) { // solo itera las 5 columnas del header
  card += "<th>" + bingo[0][filass] + "</th>";
}
card += "</tr></thead>";

card += "<tbody>";
for (let filass = 1; filass < 6; filass++) { // Inicia en la fila 1 (la segunda fila)
  card += "<tr>";
  for (let columnass = 0; columnass < 5; columnass++) {
    card += "<td>" + bingo[filass][columnass] + "</td>";
  }
  card += "</tr>"; // cierra '<tr>'
}
card += "</tbody>";
//fin tablero bingo normal

// bingo con X
function aplicarPatron(patron, color) {
    let card = "<thead><tr>";
    for (let filass = 0; filass < 5; filass++) {
        card += "<th>" + bingo[0][filass] + "</th>";
    }
    card += "</tr></thead><tbody>";

    for (let filass = 1; filass < 6; filass++) {
        card += "<tr>";
        for (let columnass = 0; columnass < 5; columnass++) {
            //some() es un método de JavaScript que itera sobre los elementos de un arreglo.
            //el método some() es para verificar si la celda actual está en el patrón.
            if (patron.some(celda => celda.filass === filass && celda.columnass === columnass)) { 
                card += `<td class='${color}'>${bingo[filass][columnass]}</td>`;
            } else {
                card += `<td>${bingo[filass][columnass]}</td>`;
            }
        }
        card += "</tr>";
    }
    card += "</tbody>";
    return card;
}
// fin bingo X

// Inicio Bingo B I N G O
function bingoLetras(fila, color) {
    let card4 = "<thead><tr>";
    for (let filass = 0; filass < 5; filass++) {
        if(filass === fila ){
        card4 += `<th class='${color}'>${bingo[0][filass]}</th>`;
    }else{
        card4 += `<th>${bingo[0][filass]}</th>`;
    }
    }
    card4 += "</tr></thead><tbody>";

    for (let filass = 1; filass < 6; filass++) {
        card4 += "<tr>";
        for (let columnass = 0; columnass < 5; columnass++) {
            if (columnass=== fila) {
                card4 += `<td class='${color}'>${bingo[filass][columnass]}</td>`;
            } else {
                card4 += `<td>${bingo[filass][columnass]}</td>`;
            }
        }
        card4 += "</tr>";
    }
    card4 += "</tbody>";
    return card4;
}


  document.getElementById('bingou').innerHTML = card;
// Cartón con una X
document.getElementById('bingou2').innerHTML = aplicarPatron(xPatrones[0], 'violet');
// Cartón con tres X
document.getElementById('bingou3').innerHTML = aplicarPatron(xPatrones[1], 'green');
  document.getElementById('bingou4').innerHTML = bingoLetras(0,'red');
  document.getElementById('bingou5').innerHTML = bingoLetras(1,'yellow');
  document.getElementById('bingou6').innerHTML = bingoLetras(2,'green');
  document.getElementById('bingou7').innerHTML = bingoLetras(3,'blue');
  document.getElementById('bingou8').innerHTML = bingoLetras(4,'violet');
  
})

let intervaloParpadeo;
let estaParpadeando = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'f' || event.key === 'F') {
        if (!estaParpadeando) {
            iniciarParpadeo();
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'f' || event.key === 'F') {
        pararParpadeo();
    }
});

function iniciarParpadeo() {
    estaParpadeando = true;
    intervaloParpadeo = setInterval(alternarColor, 300); // Parpadea cada 300ms
}

function pararParpadeo() {
    estaParpadeando = false;
    clearInterval(intervaloParpadeo);
    resetearColor();
}

function alternarColor() {
    const xElementos = document.querySelectorAll('.violet, .green, .red, .blue, .yellow'); // Selecciona todas las celdas X
    xElementos.forEach(elementos => {
        elementos.style.backgroundColor = elementos.style.backgroundColor === 'lawngreen' ? '' : 'lawngreen';
    });
}

function resetearColor() {
    const xElementos = document.querySelectorAll('.violet, .green, .red, .blue, .yellow');
    xElementos.forEach(elementos => {
        elementos.style.backgroundColor = '';
    });
}
/*
patron:  una matriz o arreglo de objetos, donde cada objeto representa una celda con propiedades i y j (coordenadas).
celda: Un objeto dentro del arreglo patron.
*/
