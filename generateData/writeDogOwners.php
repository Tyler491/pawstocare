<?php
    $catNotesJson = file_get_contents('php://input');
    $fp = fopen('json/dogOwners.json', 'w');
    fwrite($fp, $catNotesJson);
    fclose($fp);
?>