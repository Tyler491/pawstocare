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
    $sql = "SELECT exotics.id, exotics.name, exotics.species, exotics.sex, exotics.birthdate, exotics.neutered FROM owners JOIN exoticsOwners ON owners.id=exoticsOwners.ownersFk JOIN exotics on exoticsOwners.exoticsFk=exotics.id WHERE owners.id=".$_SESSION['id'].";";
    $result = $pawsToCare->query($sql);
    if (!$result) {
        die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $sql");
    }

    $exotics = array();
    while ($row = $result->fetch_row()) {
        //Get information on animal
        $exotic = [
            "id"=> (int)$row[0],
            "name"=>  $row[1],
            "species"=>  $row[2],
            "sex"=>  $row[3],
            "shots"=>  "N/A",
            "age"=> date("m-d-Y", strtotime($row[4])),
            "size"=> "N/A",
            "licensed"=>  "N/A",
            "neutered"=>  (bool)$row[5]
            
        ];
        array_push($exotics, $exotic);
    }
    $exoticsJson = json_encode($exotics);
    echo $exoticsJson;
?>