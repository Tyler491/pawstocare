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
    $sql = "SELECT * FROM cats;";
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
            "declawed"=>  (bool)$row[5],
            "neutered"=>  (bool)$row[6],
            "owners"=> [],
            "notes"=> []
            
        ];

        //Get all owners for animal
        $ownersSQL = "SELECT fname, lname FROM cats JOIN catsOwners ON cats.id=catsOwners.catsFk JOIN owners ON catsOwners.ownersFk=owners.id WHERE cats.id = ".$row[0].";";
        $ownerResult = $pawsToCare->query($ownersSQL);
        if (!$ownerResult) {
            die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $ownersSQL");
        }
        while ($owner = $ownerResult->fetch_row()) {
            $ownersString = "".$owner[0].' '.$owner[1]."</br></br>";
            array_push($cat["owners"], $ownersString);
        }

        //Get all notes for animal
        $notesSQL = "SELECT note, vetName, date FROM cats JOIN catNotes ON cats.id=catNotes.catsFk WHERE cats.id = ".$row[0].";";
        $noteResult = $pawsToCare->query($notesSQL);
        if (!$noteResult) {
            die("Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $notesSQL");
        }
        $i = 1;
        while ($note = $noteResult->fetch_row()) {
            $date = strtotime($note[2]);
            $date = date("F j, Y | ", $date);
            $noteString = "Note ".$i++.": ".$date.$note[1]."</br><i>".$note[0]."</i></br></br>";
            array_push($cat["notes"], $noteString);
        }


        array_push($cats, $cat);
     }
     $catsJson = json_encode($cats);
     echo $catsJson;
     
?>