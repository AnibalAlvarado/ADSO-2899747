<?php
include('libreria/figuras.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Figuras geometricas</title>
    <script src="js/figuras.js"></script>
</head>
<body>
    <?php
        var_dump(figuras("cuadrado",5,5));
        var_dump(figuras("rectangulo",5,5));
        var_dump(figuras("triangulo",5,5));
    ?>
</body>
</html>