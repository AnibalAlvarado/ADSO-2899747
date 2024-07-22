<?php
include('libreria/promnotas.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedio 3 notas</title>
    <script src="js/promnotas.js"></script>
</head>
<body>
    <?php
        $nota= 5;
        $nota2= 4;
        $nota3= 3;

        var_dump(prome($nota,$nota2,$nota3));
    ?>
</body>
</html>