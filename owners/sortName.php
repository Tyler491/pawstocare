<?php
    session_start();
    $_SESSION["sortAddress"] = 0;
    $_SESSION["sortCity"] = 0;
    $_SESSION["sortState"] = 0;
    $_SESSION["sortZip"] = 0;
    if($_SESSION['sortName'] == 0) $_SESSION['sortName'] = 1;
    else if($_SESSION['sortName'] == 1) $_SESSION['sortName'] = 2;
    else if($_SESSION['sortName'] == 2) $_SESSION['sortName'] = 1;
    $_SESSION['page'] = 1;
    header('Location:/owners.php');
?>