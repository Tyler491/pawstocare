<?php
    session_start();
    if($_POST['selectPage'] == 01) $_SESSION['page'] = 1;
    else{
        for($i = 1; $i <= intdiv($_SESSION["pages"], 10); $i++){
            if($_POST['selectPage'] == ($i*10)) $_SESSION['page'] = $i*10;
        }
    }
    header("location:/owners.php");
?>