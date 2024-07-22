<?php
include('libreria/saludo.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
</head>
<body>
    <?php
    $saludar="Hola Mundo JS";
    var_dump(saludo($saludar));
    ?>
</body>
</html>