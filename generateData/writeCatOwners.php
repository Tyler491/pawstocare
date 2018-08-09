<?php
    $catNotesJson = file_get_contents('php://input');
    $fp = fopen('json/catOwners.json', 'w');
    fwrite($fp, $catNotesJson);
    fclose($fp);
?>