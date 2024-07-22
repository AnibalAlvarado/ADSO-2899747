function sueldo(pdiasTrabajados,pvalorDia){
    let diasTrabajados=pdiasTrabajados;
    let valorDia=pvalorDia;
    salario=diasTrabajados*valorDia;
    return salario
}
function subTrans(pdiasTrabajados,pvalorDia){
    let salarioMin=1600000;
    let salarioTrans=sueldo(pdiasTrabajados,pvalorDia);
    let subTransporte;
    if(salarioTrans<=2*salarioMin){
        subTransporte= 120000;
    }else{
        subTransporte=0;
    }
    return subTransporte;
}
function salud(pdiasTrabajados,pvalorDia){
    let pagoSalud;
    pagoSalud= sueldo(pdiasTrabajados,pvalorDia)*0.12;
    return pagoSalud;
}
function pension(pdiasTrabajados,pvalorDia){
    let pagoPension;
    pagoPension= sueldo(pdiasTrabajados,pvalorDia)*0.16;
    return pagoPension;
}
function arl(pdiasTrabajados,pvalorDia){
    let pagoArl;
    pagoArl= sueldo(pdiasTrabajados,pvalorDia)*0.052;
    return pagoArl;
}
function retencion(pdiasTrabajados,pvalorDia){
    let salarioMin=1600000;
    let salarioReten=sueldo(pdiasTrabajados,pvalorDia);
    let retencion;
    if(salarioReten>6*salarioMin && salarioReten<8*salarioMin){
        retencion= (salarioReten*0.02)/100;
    }else if(salarioReten>8*salarioMin && salarioReten<12*salarioMin){
        retencion=(salarioReten*0.04)/100;
    }else if(salarioReten>12*salarioMin){
        retencion=(salarioReten*0.08)/100;
    }else{
        retencion= 0;
    }
    return retencion;
}

function deducible(pdiasTrabajados,pvalorDia){
    let pagoDeducible;
    pagoDeducible= pension(pdiasTrabajados,pvalorDia) 
    + salud(pdiasTrabajados,pvalorDia)+arl(pdiasTrabajados,pvalorDia)
    +retencion(pdiasTrabajados,pvalorDia);
    return pagoDeducible;
}
function pagoTotal(pdiasTrabajados,pvalorDia){
    let pagoSueldo;
    pagoSueldo= sueldo(pdiasTrabajados,pvalorDia)+subTrans(pdiasTrabajados,pvalorDia)-deducible(pdiasTrabajados,pvalorDia);
    return pagoSueldo;
}
let trabajadores=[
    {id:1, nombres:"Anibal",apellidos:"Alvarado",cargo:"Gerente",valorDia:300000,diasTrabajados:25},
    {id:2, nombres:"Viego",apellidos:"Cuellar",cargo:"Sub Gerente",valorDia:250000,diasTrabajados:28},
    {id:3, nombres:"Emilio",apellidos:"Suaza",cargo:"Aseador",valorDia:50000,diasTrabajados:30},
    {id:4, nombres:"Brayan",apellidos:"Carvajal",cargo:"Programador",valorDia:90000,diasTrabajados:26},
    {id:5, nombres:"Alexander",apellidos:"Diaz",cargo:"Prostituta",valorDia:80000,diasTrabajados:26},
    {id:6, nombres:"Andres",apellidos:"Moreno",cargo:"Programador",valorDia:90000,diasTrabajados:22},
    {id:7, nombres:"Valentina",apellidos:"Bautista",cargo:"Programador",valorDia:900000,diasTrabajados:25},
    {id:8, nombres:"Nicole",apellidos:"Marentes",cargo:"Programador",valorDia:900000,diasTrabajados:28},
    {id:9, nombres:"Osquitar",apellidos:"Muñoz",cargo:"Programador",valorDia:100000,diasTrabajados:26},
    {id:10, nombres:"Daniell",apellidos:"Serna",cargo:"Programador",valorDia:110000,diasTrabajados:24},
]

trabajadores.forEach(element => {
    console.log(element)
});
let iteracion=0;
let numRegistros= trabajadores.length
let nomina
let pagarTotal
nomina=[]
pagarTotal=[]
for (let iteracion = 0; iteracion < numRegistros; iteracion++) {
    for (let iteracion2 = 0; iteracion2 < 1; iteracion2++) {
      nomina.push({
         id: trabajadores[iteracion].id,
         nombres:trabajadores[iteracion].nombres,
         apellidos:trabajadores[iteracion].apellidos,
         cargo:trabajadores[iteracion].cargo,
         salario: sueldo(trabajadores[iteracion].valorDia,trabajadores[iteracion].diasTrabajados),
         subsidioTrasporte:subTrans(trabajadores[iteracion].valorDia,trabajadores[iteracion].diasTrabajados),
         salud: salud(trabajadores[iteracion].valorDia,trabajadores[iteracion].diasTrabajados),
         pension: pension(trabajadores[iteracion].valorDia,trabajadores[iteracion].diasTrabajados),
         arl: arl(trabajadores[iteracion].valorDia,trabajadores[iteracion].diasTrabajados),
         retencion: retencion(trabajadores[iteracion].valorDia,trabajadores[iteracion].diasTrabajados),
         totalPagar: pagoTotal(trabajadores[iteracion].valorDia,trabajadores[iteracion].diasTrabajados),
        })
    }
  }
  let saludd=0
  let pensionn=0
  let arll=0
  let retencionn=0
  let totalPagarr=0
  for (let iteracion = 0; iteracion < numRegistros; iteracion++) {
    for (let iteracion2 = 0; iteracion2 < 1; iteracion2++) {
    
         saludd+=nomina[iteracion].salud 
        pensionn+=nomina[iteracion].pension
         arll+= nomina[iteracion].arl
         retencionn+= nomina[iteracion].retencion
         totalPagarr+= nomina[iteracion].totalPagar
    }
  }
  pagarTotal.push({
    salud: saludd,
    pension: pensionn,
    arl: arll,
    retencion: retencionn,
    totalPagar: totalPagarr
  })
console.log(nomina)
console.log(pagarTotal)