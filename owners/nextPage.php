<?php
    session_start();
    if($_SESSION['page'] < $_SESSION["pages"]) $_SESSION['page'] += 1;
    else $_SESSION['page'] = 1;
    header("location:/owners.php");
?>
