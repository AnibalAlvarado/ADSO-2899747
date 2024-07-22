<?php
include('libreria/sueldo.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sueldo</title>
    <script src="js/sueldo.js"></script>
</head>
<body>
    <?php
        $diasTrabajados= 20;
        $valorDia= 20;

        $salarioPersona=sueldo($diasTrabajados,$valorDia);
        $pago=pagoTotal($diasTrabajados,$valorDia);
        var_dump("El pago total es: ". $pago);
    ?>
</body>
</html>