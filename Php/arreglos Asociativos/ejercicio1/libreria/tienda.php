<?php
$tienda = [];
$tienda[] = [
  "producto" => "Arroz",
  "tipoProducto" => "Granos",
  "tipoUnidad" => "Gramos",
  "cantidad" => 1000,
  "precio" => 4500
];
$tienda[] = [
  "producto" => "Papa",
  "tipoProducto" => "Fruver",
  "tipoUnidad" => "Gramos",
  "cantidad" => 500,
  "precio" => 1000
];
$tienda[] = [
  "producto" => "Mora",
  "tipoProducto" => "Fruver",
  "tipoUnidad" => "Gramos",
  "cantidad" => 500,
  "precio" => 1500
];
$tienda[] = [
  "producto" => "Trucha",
  "tipoProducto" => "Carnes",
  "tipoUnidad" => "Gramos",
  "cantidad" => 1000,
  "precio" => 9000
];
$tienda[] = [
  "producto" => "Pollo Entero",
  "tipoProducto" => "Carnes",
  "tipoUnidad" => "Gramos",
  "cantidad" => 500,
  "precio" => 4500
];

$nuevoProducto = [
  "producto" => "Res",
  "tipoProducto" => "Carnes",
  "tipoUnidad" => "Gramos",
  "cantidad" => 1000,
  "precio" => 4000
];

$tienda[] = $nuevoProducto;
$numRegistros = count($tienda);
for ($iteracion = 0; $iteracion < $numRegistros; $iteracion++) {
  
  if ($tienda[$iteracion]["producto"] === "Papa") {
    $tienda[$iteracion]["precio"] = 5000;
  }

  
  if ($tienda[$iteracion]["tipoProducto"] === "Fruver") {
    $listaBusqueda[] = $tienda[$iteracion];
  }
}
print_r($listaBusqueda);
echo"<br>";
echo"<br>";
foreach ($tienda as $producto) {
  echo "Producto: " . $producto["producto"] . "<br>";
  echo "Tipo de Producto: " . $producto["tipoProducto"] . "<br>";
  echo "Tipo de Unidad: " . $producto["tipoUnidad"] . "<br>";
  echo "Cantidad: " . $producto["cantidad"] . " " . $producto["tipoUnidad"] . "<br>";
  echo "Precio: $" . $producto["precio"] . "<br>";
  echo"<br>";
}

