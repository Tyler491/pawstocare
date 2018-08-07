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
    $sql = "SELECT cats.id, cats.name, cats.breed, cats.sex, cats.shots, cats.birthdate, cats.declawed, cats.neutered FROM owners JOIN catsOwners ON owners.id=catsOwners.ownersFk JOIN cats on catsOwners.catsFk=cats.id WHERE owners.id=".$_SESSION['id'].";";
    $result = $pawsToCare->query($sql);
    if (!$result) {
        die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $sql");
    }

    $cats = array();
    while ($row = $result->fetch_row()) {
        //Get information on animal
        $cat = [
            "id"=> (int)$row[0],
            "name"=>  $row[1],
            "breed"=>  $row[2],
            "sex"=>  $row[3],
            "shots"=>  (bool)$row[4],
            "age"=> date("m-d-Y", strtotime($row[7])),
            "size"=> "N/A",
            "declawed"=>  (bool)$row[5],
            "neutered"=>  (bool)$row[6]
            
        ];
        array_push($cats, $cat);
    }
    $catsJson = json_encode($cats);
    echo $catsJson;
?>