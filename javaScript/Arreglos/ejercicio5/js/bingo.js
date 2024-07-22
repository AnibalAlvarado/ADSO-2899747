let bingo=[]
let cont3=0
let numx=[];
function bingoo(){
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
        if(i==1 && j==0){ 
            let ramdomm= Math.floor(Math.random()*15)+1
            bingo[i][j] = ramdomm;
        }
        if(i==1 && j==1){
            let ramdomm= Math.floor(Math.random()*(30-15)+1)+15
            bingo[i][j] = ramdomm;
        }
        if(i==1 && j==2){
            let ramdomm= Math.floor(Math.random()*(45-30)+1)+30
            bingo[i][j] = ramdomm;
        }
        if(i==1 && j==3){
            let ramdomm= Math.floor(Math.random()*(60-45)+1)+45
            bingo[i][j] = ramdomm;
        }
        if(i==1 && j==4){
            let ramdomm= Math.floor(Math.random()*(75-60)+1)+60
            bingo[i][j] = ramdomm;
        }
        if(i==2 && j==0){ 
            let ramdomm= Math.floor(Math.random()*15)+1
            bingo[i][j] = ramdomm;
        }
        if(i==2 && j==1){
            let ramdomm= Math.floor(Math.random()*(30-15)+1)+15
            bingo[i][j] = ramdomm;
        }
        if(i==2 && j==2){
            let ramdomm= Math.floor(Math.random()*(45-30)+1)+30
            bingo[i][j] = ramdomm;
        }
        if(i==2 && j==3){
            let ramdomm= Math.floor(Math.random()*(60-45)+1)+45
            bingo[i][j] = ramdomm;
        }
        if(i==2 && j==4){
            let ramdomm= Math.floor(Math.random()*(75-60)+1)+60
            bingo[i][j] = ramdomm;
        }
        if(i==3 && j==0){ 
            let ramdomm= Math.floor(Math.random()*15)+1
            bingo[i][j] = ramdomm;
        }
        if(i==3 && j==1){
            let ramdomm= Math.floor(Math.random()*(30-15)+1)+15
            bingo[i][j] = ramdomm;
        }
        if(i==3 && j==2){
            let ramdomm= Math.floor(Math.random()*(45-30)+1)+30
            bingo[i][j] = ramdomm;
        }
        if(i==3 && j==3){
            let ramdomm= Math.floor(Math.random()*(60-45)+1)+45
            bingo[i][j] = ramdomm;
        }
        if(i==3 && j==4){
            let ramdomm= Math.floor(Math.random()*(75-60)+1)+60
            bingo[i][j] = ramdomm;
        }
        if(i==4 && j==0){ 
            let ramdomm= Math.floor(Math.random()*15)+1
            bingo[i][j] = ramdomm;
        }
        if(i==4 && j==1){
            let ramdomm= Math.floor(Math.random()*(30-15)+1)+15
            bingo[i][j] = ramdomm;
        }
        if(i==4 && j==2){
            let ramdomm= Math.floor(Math.random()*(45-30)+1)+30
            bingo[i][j] = ramdomm;
        }
        if(i==4 && j==3){
            let ramdomm= Math.floor(Math.random()*(60-45)+1)+45
            bingo[i][j] = ramdomm;
        }
        if(i==4 && j==4){
            let ramdomm= Math.floor(Math.random()*(75-60)+1)+60
            bingo[i][j] = ramdomm;
        }
        if(i==5 && j==0){ 
            let ramdomm= Math.floor(Math.random()*15)+1
            bingo[i][j] = ramdomm;
        }
        if(i==5 && j==1){
            let ramdomm= Math.floor(Math.random()*(30-15)+1)+15
            bingo[i][j] = ramdomm;
        }
        if(i==5 && j==2){
            let ramdomm= Math.floor(Math.random()*(45-30)+1)+30
            bingo[i][j] = ramdomm;
        }
        if(i==5 && j==3){
            let ramdomm= Math.floor(Math.random()*(60-45)+1)+45
            bingo[i][j] = ramdomm;
        }
        if(i==5 && j==4){
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

  for(i=0;i<bingo.length;i++){
    for(j=0;j<bingo[i].length;j++){
        if((i === 1 && j === 0) || (i === 1 && j === 4) || (i === 2 && j === 1) || (i === 2 && j === 3) || (i === 3 && j === 2)|| (i === 4 && j === 1)|| (i === 4 && j === 3)|| (i === 5 && j === 0)|| (i === 5 && j === 4)){
            numx[cont3]=bingo[i][j];
            cont3++
        }
    }
}
console.log(numx)
console.log("")
let numx1=[]
let numx2=[]
let numx3=[]
cont3=0
for(i=0;i<bingo.length;i++){
    for(j=0;j<bingo[i].length;j++){
        if((i === 1 && j === 0) || (i === 1 && j === 2) || (i === 2 && j === 1) || (i === 3 && j === 0) || (i === 3 && j === 2)){
            numx1[cont3]=bingo[i][j];
            cont3++
        }
    }
}
console.log(numx1)
console.log(" ")
cont3=0
for(i=0;i<bingo.length;i++){
    for(j=0;j<bingo[i].length;j++){
        if((i === 3 && j === 0) || (i === 3 && j === 2) || (i === 4 && j === 1) || (i === 5 && j === 0) || (i === 5 && j === 2)){
            numx2[cont3]=bingo[i][j];
            cont3++
        }
    }
}
console.log(numx2)
console.log(" ")

cont3=0
for(i=0;i<bingo.length;i++){
    for(j=0;j<bingo[i].length;j++){
        if((i === 3 && j === 2) || (i === 3 && j === 4) || (i === 4 && j === 3) || (i === 5 && j === 2) || (i === 5 && j === 4)){
            numx3[cont3]=bingo[i][j];
            cont3++
        }
    }
}
console.log(numx3)
console.log(" ")
}

