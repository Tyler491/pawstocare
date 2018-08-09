<?php
    $exoticsJson = file_get_contents('php://input');
    $fp = fopen('json/owners.json', 'w');
    fwrite($fp, $exoticsJson);
    fclose($fp);
?>