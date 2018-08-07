<?php
    session_start();
    DEFINE('DB_USER', "tyler");
    DEFINE('DB_PSWD', "4321");
    DEFINE('DB_HOST', "localhost");
    DEFINE('DB_NAME', "pawsToCare");

    $pawsToCare = new mysqli(DB_HOST, DB_USER, DB_PSWD, DB_NAME);
    if ($pawsToCare->connect_errno) {
        die("Failed to connect ot MySQL: ($pawsToCare->connect_errno)
        $pawsToCare->connect_error");
    }

    $query = "SELECT password, salt, admin, id FROM owners WHERE uname=\"".$_POST["username"]."\";";
    $result = $pawsToCare->query($query);
    if (!$result) {
        die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $query");
    }

    $ownerInfo = $result->fetch_row();
    $password = md5($_POST["password"].$ownerInfo[1]);

    if ($ownerInfo[0] == $password) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['id'] = $ownerInfo[3];
        if($ownerInfo[2] == 1) $_SESSION['admin'] = true;
        header('Location:/index.php'); //to redirect back to "index.php" after logging out
    }
    else{
        header('Location:/invalid.php');
    }
    exit();
?>