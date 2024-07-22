<?php
include('libreria/porcennotas.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedio porcentaje de 3 notas</title>
    <script src="js/porcennotas.js"></script>
</head>
<body>
    <?php
        $nota=5;
        $nota2=4;
        $nota3=3;
        $porce=30;
        $porce2=40;
        var_dump(prome($nota,$nota2,$nota3,$porce,$porce2));
    ?>
</body>
</html>