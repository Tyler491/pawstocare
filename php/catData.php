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
        $cat = [
            "id"=> (int)$row[0],
            "name"=>  $row[1],
            "breed"=>  $row[2],
            "sex"=>  $row[3],
            "shots"=>  (bool)$row[4],
            "age"=> date("m-d-Y", strtotime($row[7])),
            "declawed"=>  (bool)$row[5],
            "neutered"=>  (bool)$row[6],
            "owners"=> "Tyler Buchanan",
            "notes"=> "Notes boi!!!"
            
        ];
        array_push($cats, $cat);
     }
     $catsJson = json_encode($cats);
     echo $catsJson;
     
?>