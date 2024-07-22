<?php
function sueldo($pdiasTrabajados, $pvalorDia) {
    $salario = $pdiasTrabajados * $pvalorDia;
    return $salario;
}

function subTrans($pdiasTrabajados, $pvalorDia) {
    $salarioMin = 1600000;
    $salarioTrans = sueldo($pdiasTrabajados, $pvalorDia);
    if ($salarioTrans <= 2 * $salarioMin) {
        $subTransporte = 120000;
    } else {
        $subTransporte = 0;
    }
    return $subTransporte;
}

function salud($pdiasTrabajados, $pvalorDia) {
    $pagoSalud = sueldo($pdiasTrabajados, $pvalorDia) * 0.12;
    return $pagoSalud;
}

function pension($pdiasTrabajados, $pvalorDia) {
    $pagoPension = sueldo($pdiasTrabajados, $pvalorDia) * 0.16;
    return $pagoPension;
}

function arl($pdiasTrabajados, $pvalorDia) {
    $pagoArl = sueldo($pdiasTrabajados, $pvalorDia) * 0.052;
    return $pagoArl;
}

function retencion($pdiasTrabajados, $pvalorDia) {
    $salarioMin = 1600000;
    $salarioReten = sueldo($pdiasTrabajados, $pvalorDia);
    if ($salarioReten > 6 * $salarioMin && $salarioReten < 8 * $salarioMin) {
        $retencion = ($salarioReten * 0.02) / 100;
    } elseif ($salarioReten > 8 * $salarioMin && $salarioReten < 12 * $salarioMin) {
        $retencion = ($salarioReten * 0.04) / 100;
    } elseif ($salarioReten > 12 * $salarioMin) {
        $retencion = ($salarioReten * 0.08) / 100;
    } else {
        $retencion = 0;
    }
    return $retencion;
}

function deducible($pdiasTrabajados, $pvalorDia) {
    $pagoDeducible = pension($pdiasTrabajados, $pvalorDia) + salud($pdiasTrabajados, $pvalorDia) + 
    arl($pdiasTrabajados, $pvalorDia) + retencion($pdiasTrabajados, $pvalorDia);
    return $pagoDeducible;
}

function pagoTotal($pdiasTrabajados, $pvalorDia) {
    $pagoSueldo = sueldo($pdiasTrabajados, $pvalorDia) 
    + subTrans($pdiasTrabajados, $pvalorDia) 
    - deducible($pdiasTrabajados, $pvalorDia);
    return $pagoSueldo;
}

$trabajadores = array(
    array('id' => 1, 'nombres' => 'Anibal', 'apellidos' => 'Alvarado', 'cargo' => 'Gerente', 'valorDia' => 300000, 'diasTrabajados' => 25),
    array('id' => 2, 'nombres' => 'Viego', 'apellidos' => 'Cuellar', 'cargo' => 'Sub Gerente', 'valorDia' => 250000, 'diasTrabajados' => 28),
    array('id' => 3, 'nombres' => 'Emilio', 'apellidos' => 'Suaza', 'cargo' => 'Aseador', 'valorDia' => 50000, 'diasTrabajados' => 30),
    array('id' => 4, 'nombres' => 'Brayan', 'apellidos' => 'Carvajal', 'cargo' => 'Programador', 'valorDia' => 90000, 'diasTrabajados' => 26),
    array('id' => 5, 'nombres' => 'Alexander', 'apellidos' => 'Diaz', 'cargo' => 'Prostituta', 'valorDia' => 80000, 'diasTrabajados' => 26),
    array('id' => 6, 'nombres' => 'Andres', 'apellidos' => 'Moreno', 'cargo' => 'Programador', 'valorDia' => 90000, 'diasTrabajados' => 22),
    array('id' => 7, 'nombres' => 'Valentina', 'apellidos' => 'Bautista', 'cargo' => 'Programador', 'valorDia' => 900000, 'diasTrabajados' => 25),
    array('id' => 8, 'nombres' => 'Nicole', 'apellidos' => 'Marentes', 'cargo' => 'Programador', 'valorDia' => 900000, 'diasTrabajados' => 28),
    array('id' => 9, 'nombres' => 'Osquitar', 'apellidos' => 'Muñoz', 'cargo' => 'Programador', 'valorDia' => 100000, 'diasTrabajados' => 26),
    array('id' => 10, 'nombres' => 'Daniell', 'apellidos' => 'Serna', 'cargo' => 'Programador', 'valorDia' => 110000, 'diasTrabajados' => 24)
);
echo "<h2>Tabla trabajadores</h2>";
foreach ($trabajadores as $trabajador) {
    echo "ID: " . $trabajador['id'] . "<br>";
    echo "Nombres: " . $trabajador['nombres'] . "<br>";
    echo "Apellidos: " . $trabajador['apellidos'] . "<br>";
    echo "Cargo: " . $trabajador['cargo'] . "<br>";
    echo "Valor por día: " . $trabajador['valorDia'] . "<br>";
    echo "Días trabajados: " . $trabajador['diasTrabajados'] . "<br>";
    echo "<br>";
}

$nomina = array();

foreach ($trabajadores as $trabajador) {
    $datos = array(
        'id' => $trabajador['id'],
        'nombres' => $trabajador['nombres'],
        'apellidos' => $trabajador['apellidos'],
        'cargo' => $trabajador['cargo'],
        'salario' => sueldo($trabajador['diasTrabajados'], $trabajador['valorDia']),
        'subsidioTransporte' => subTrans($trabajador['diasTrabajados'], $trabajador['valorDia']),
        'salud' => salud($trabajador['diasTrabajados'], $trabajador['valorDia']),
        'pension' => pension($trabajador['diasTrabajados'], $trabajador['valorDia']),
        'arl' => arl($trabajador['diasTrabajados'], $trabajador['valorDia']),
        'retencion' => retencion($trabajador['diasTrabajados'], $trabajador['valorDia']),
        'totalPagar' => pagoTotal($trabajador['diasTrabajados'], $trabajador['valorDia'])
    );
    $nomina[] = $datos;
}
$saludd = 0;
$pensionn = 0;
$arll = 0;
$retencionn = 0;
$totalPagarr = 0;

$numRegistros = count($nomina);
for ($iteracion = 0; $iteracion < $numRegistros; $iteracion++) {
    $saludd += $nomina[$iteracion]['salud'];
    $pensionn += $nomina[$iteracion]['pension'];
    $arll += $nomina[$iteracion]['arl'];
    $retencionn += $nomina[$iteracion]['retencion'];
    $totalPagarr += $nomina[$iteracion]['totalPagar'];
}

$pagarTotal = array(
    'salud' => $saludd,
    'pension' => $pensionn,
    'arl' => $arll,
    'retencion' => $retencionn,
    'totalPagar' => $totalPagarr
);
echo"<h2>Tabla Nomina</h2>";
foreach ($nomina as $empleado) {
    echo "ID: " . $empleado['id'] . "<br>";
    echo "Nombres: " . $empleado['nombres'] . "<br>";
    echo "Apellidos: " . $empleado['apellidos'] . "<br>";
    echo "Cargo: " . $empleado['cargo'] . "<br>";
    echo "Salario: " . $empleado['salario'] . "<br>";
    echo "Subsidio Transporte: " . $empleado['subsidioTransporte'] . "<br>";
    echo "Salud: " . $empleado['salud'] . "<br>";
    echo "Pensión: " . $empleado['pension'] . "<br>";
    echo "Arl: " . $empleado['arl'] . "<br>";
    echo "Retención: " . $empleado['retencion'] . "<br>";
    echo "Total a Pagar: " . $empleado['totalPagar'] . "<br>";
    echo "<br>";
}
echo"<h2>Tabla Total Pagar</h2>";
foreach ($pagarTotal as $key => $value) {
    echo $key . ": " . $value . "<br>";
}