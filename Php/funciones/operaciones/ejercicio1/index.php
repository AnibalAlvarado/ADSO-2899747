<?php
include('libreria/suma.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>imprimir la suma de los 2 numeros</title>
    <script src="js/suma.js"></script>
</head>
<body>
    <?php
         $num1= 7;
         $num2= 7;
        var_dump(sumar($num1,$num2));
    ?>
</body>
</html>