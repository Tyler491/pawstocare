<?php
    session_start();
    $_SESSION["sortName"] = 0;
    $_SESSION["sortAddress"] = 0;
    $_SESSION["sortCity"] = 0;
    $_SESSION["sortState"] = 0;
    
    if($_SESSION['sortZip'] == 0) $_SESSION['sortZip'] = 1;
    else if($_SESSION['sortZip'] == 1) $_SESSION['sortZip'] = 2;
    else if($_SESSION['sortZip'] == 2) $_SESSION['sortZip'] = 1;
    $_SESSION['owners'] = ['empty'];
    $_SESSION['page'] = 1;
    header('Location:/owners.php');
?>