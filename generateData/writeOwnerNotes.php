<?php
    $ownerNotesJson = file_get_contents('php://input');
    $fp = fopen('json/ownerNotes.json', 'w');
    fwrite($fp, $ownerNotesJson);
    fclose($fp);
?>