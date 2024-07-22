<?php
include('libreria/porcentaje.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porcentaje de un numero</title>
    <script src="js/porcentaje.js"></script>
</head>
<body>
    <?php
         $num= 15;
         $porcen= 50;

        var_dump(porce($num,$porcen));
    ?>
</body>
</html>