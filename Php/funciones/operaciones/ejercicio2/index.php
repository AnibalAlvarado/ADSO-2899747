<?php
include('libreria/operaciones.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operaciones</title>
    <script src="js/operaciones.js"></script>
</head>
<body>
    <?php
        
        $num1=3;
        $num2=7;
        var_dump(operaciones("resta",$num1,$num2));
        var_dump(operaciones("multiplicacion",$num1,$num2));
        var_dump(operaciones("division",$num1,$num2));


    ?>
</body>
</html>