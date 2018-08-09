<?php
    $dogsJson = file_get_contents('php://input');
    $fp = fopen('json/dogs.json', 'w');
    fwrite($fp, $dogsJson);
    fclose($fp);
?>