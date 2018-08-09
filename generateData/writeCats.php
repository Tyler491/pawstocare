<?php
    $catsJson = file_get_contents('php://input');
    $fp = fopen('json/cats.json', 'w');
    fwrite($fp, $catsJson);
    fclose($fp);
?>