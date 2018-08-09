<?php
    session_start();
    $_SESSION["page"] = 1;
    $_SESSION["lname"] = $_POST['lname'];
    $_SESSION["address"] = $_POST['address'];
    $_SESSION["city"] = $_POST['city'];
    $_SESSION["st"] = $_POST['state'];
    $_SESSION["zip"] = $_POST['zip'];
    $_SESSION["owners"] = ['empty'];
    header('Location:/owners.php');
?>