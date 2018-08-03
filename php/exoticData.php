<?php
    DEFINE('DB_USER', "tyler");
    DEFINE('DB_PSWD', "4321");
    DEFINE('DB_HOST', "localhost");
    DEFINE('DB_NAME', "pawsToCare");

    $pawsToCare = new mysqli(DB_HOST, DB_USER, DB_PSWD, DB_NAME);
    if ($pawsToCare->connect_errno) {
        die("Failed to connect ot MySQL: ($pawsToCare->connect_errno)
        $pawsToCare->connect_error");
    }
    $sql = "SELECT * FROM exotics;";
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
            //"neutered"=>  (bool)$row[4],
            "age"=> date("m-d-Y", strtotime($row[5])),
            "owners"=> [],
            "notes"=> []
            
        ];

        //Get all owners for animal
        $ownersSQL = "SELECT fname, lname FROM exotics JOIN exoticsOwners ON exotics.id=exoticsOwners.exoticsFk JOIN owners ON exoticsOwners.ownersFk=owners.id WHERE exotics.id = ".$row[0].";";
        $ownerResult = $pawsToCare->query($ownersSQL);
        if (!$ownerResult) {
            die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $ownersSQL");
        }
        while ($owner = $ownerResult->fetch_row()) {
            $ownersString = "".$owner[0].' '.$owner[1]."</br></br>";
            array_push($exotic["owners"], $ownersString);
        }

        //Get all notes for animal
        $notesSQL = "SELECT note, vetName, date FROM exotics JOIN exoticNotes ON exotics.id=exoticNotes.exoticsFk WHERE exotics.id = ".$row[0].";";
        $noteResult = $pawsToCare->query($notesSQL);
        if (!$noteResult) {
            die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $notesSQL");
        }
        $i = 1;
        while ($note = $noteResult->fetch_row()) {
            $date = strtotime($note[2]);
            $date = date("F j, Y | ", $date);
            $noteString = "Note ".$i++.": ".$date.$note[1]."</br><i>".$note[0]."</i></br></br>";
            array_push($exotic["notes"], $noteString);
        }


        array_push($exotics, $exotic);
     }
     $exoticsJson = json_encode($exotics);
     echo $exoticsJson;
     
?>