<?php
    session_start();
    $_SESSION["lname"] = "";
    $_SESSION["address"] = "";
    $_SESSION["city"] = "";
    $_SESSION["st"] = "";
    $_SESSION["zip"] = "";
    $_SESSION["owners"] = [];
    $_SESSION["sortName"] = 0;
    $_SESSION["sortAddress"] = 0;
    $_SESSION["sortCity"] = 0;
    $_SESSION["sortState"] = 0;
    $_SESSION["sortZip"] = 0;
    header('Location:/owners.php');
?>