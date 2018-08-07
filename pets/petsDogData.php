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
    $sql = "SELECT dogs.id, dogs.name, dogs.breed, dogs.sex, dogs.shots, dogs.birthdate, dogs.licensed, dogs.neutered, dogs.weight FROM owners JOIN dogsOwners ON owners.id=dogsOwners.ownersFk JOIN dogs on dogsOwners.dogsFk=dogs.id WHERE owners.id=".$_SESSION['id'].";";
    $result = $pawsToCare->query($sql);
    if (!$result) {
        die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $sql");
    }
    
    $dogs = array();
    while ($row = $result->fetch_row()) {
        //Get information on animal
        $dog = [
            "id"=> (int)$row[0],
            "name"=>  $row[1],
            "breed"=>  $row[2],
            "sex"=>  $row[3],
            "shots"=>  (bool)$row[4],
            "age"=> date("m-d-Y", strtotime($row[7])),
            "weight"=> (int)$row[8], 
            "licensed"=>  (bool)$row[5],
            "neutered"=>  (bool)$row[6]
   
        ];
        array_push($dogs, $dog);
    }
    $dogsJson = json_encode($dogs);
    echo $dogsJson;
?>