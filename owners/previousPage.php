<?php
    session_start();
    if($_SESSION['page'] > 1) $_SESSION['page'] -= 1;
    else $_SESSION['page'] = $_SESSION["pages"];
    header("location:/owners.php");
?>
