let tienda=[]
let numRegistros;
let iteracion
let listaBusqueda=[]
 tienda=[
    {
        producto: "Arroz",
        tipoProducto: "Granos",
        tipoUnidad: "Gramos",
        cantidad: 1000,
        precio: 4500
    },
    {
        producto: "Papa",
        tipoProducto: "Fruver",
        tipoUnidad: "Gramos",
        cantidad: 500,
        precio: 1000
    },
    {
        producto: "Mora",
        tipoProducto: "Fruver",
        tipoUnidad: "Gramos",
        cantidad: 500,
        precio: 1500
    },
    {
        producto: "Trucha",
        tipoProducto: "Carnes",
        tipoUnidad: "Gramos",
        cantidad: 1000,
        precio: 9000
    },
    {
        producto: "Pollo Entero",
        tipoProducto: "Carnes",
        tipoUnidad: "Gramos",
        cantidad: 500,
        precio: 4500
    }
]
let nuevoProducto={
    producto: "res",
    tipoProducto: "Carnes",
    tipoUnidad: "Gramos",
    cantidad: 1000,
    precio: 4000
}

tienda.push(nuevoProducto)
numRegistros= tienda.length;

for(iteracion=0;iteracion<numRegistros;iteracion++){
    //console.log(tienda[iteracion])
    
    if(tienda[iteracion].producto=="Papa"){
        tienda[iteracion].precio=5000
    }else{
        console.log("");
    }
    if(tienda[iteracion].tipoProducto=="Fruver"){
        listaBusqueda.push(tienda[iteracion]);
    }else{
        console.log("");
    }
}


console.log(listaBusqueda)