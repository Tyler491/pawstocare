
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Paws to Care</title>
</head>
<body>
           
    <?php
        include 'php/navbar.php';
        if($_SESSION['loggedin'] == false) header('Location:/index.php');;
        
        if(!isset($_SESSION["lname"]))$_SESSION["lname"] = "";

        if(!isset($_SESSION["address"])) $_SESSION["address"] = "";
        if(!isset($_SESSION["city"])) $_SESSION["city"] = "";
        if(!isset($_SESSION["st"])) $_SESSION["st"] = "";
        if(!isset($_SESSION["zip"])) $_SESSION["zip"] = "";
        if(!isset($_SESSION["page"])) $_SESSION["page"] = 1;
        if(!isset($_SESSION["owners"])) $_SESSION["owners"] = ['empty'];
        if(isset($_POST['selectPage'])) echo $_POST['selectPage']."<br>";

        if(!isset($_SESSION["sortName"])) $_SESSION["sortName"] = 0;
        if(!isset($_SESSION["sortAddress"])) $_SESSION["sortAddress"] = 0;
        if(!isset($_SESSION["sortCity"])) $_SESSION["sortCity"] = 0;
        if(!isset($_SESSION["sortState"])) $_SESSION["sortState"] = 0;
        if(!isset($_SESSION["sortZip"])) $_SESSION["sortZip"] = 0;
        
        DEFINE('DB_USER', "tyler");
        DEFINE('DB_PSWD', "4321");
        DEFINE('DB_HOST', "localhost");
        DEFINE('DB_NAME', "pawsToCare");

        $pawsToCare = new mysqli(DB_HOST, DB_USER, DB_PSWD, DB_NAME);
        if ($pawsToCare->connect_errno) {
            die("Failed to connect ot MySQL: ($pawsToCare->connect_errno)
            $pawsToCare->connect_error");
        }

        if($_SESSION['owners'] == ['empty']){
        //Get all owners (with or without filters)
        $_SESSION['owners'] = [];
        $query = "SELECT id, fname, lname, add1, add2, city, st, zip FROM owners ";
        $query = $query.'WHERE (lname LIKE "'.$_SESSION["lname"].'%" OR fname LIKE "'.$_SESSION["lname"].'") AND add1 LIKE "'.$_SESSION["address"].'%" AND city LIKE "'.$_SESSION["city"].'%"AND st LIKE "'.$_SESSION["st"].'%" AND zip LIKE "'.$_SESSION["zip"].'%"';
        
        if($_SESSION['sortName'] == 1) $query = $query." ORDER BY lname ASC, fname ASC;";
        else if($_SESSION['sortName'] == 2) $query = $query." ORDER BY lname DESC, fname DESC;";

        else if($_SESSION['sortAddress'] == 1) $query = $query." ORDER BY add1 ASC;";
        else if($_SESSION['sortAddress'] == 2) $query = $query." ORDER BY add1 DESC";

        else if($_SESSION['sortCity'] == 1) $query = $query." ORDER BY city ASC;";
        else if($_SESSION['sortCity'] == 2) $query = $query." ORDER BY city DESC";

        else if($_SESSION['sortState'] == 1) $query = $query." ORDER BY st ASC;";
        else if($_SESSION['sortState'] == 2) $query = $query." ORDER BY st DESC";

        else if($_SESSION['sortZip'] == 1) $query = $query." ORDER BY zip ASC;";
        else if($_SESSION['sortZip'] == 2) $query = $query." ORDER BY zip DESC";

        else $query = $query.";";

        $result = $pawsToCare->query($query);
        if (!$result) {
            die("<br><br>Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $query");
        }
        while ($row = $result->fetch_row()){

            $queryDogs = "SELECT name, breed FROM owners JOIN dogsOwners on owners.id=dogsOwners.ownersFk JOIN dogs ON dogsOwners.dogsFk=dogs.id WHERE owners.id=".$row[0].";";
            $resultDogs = $pawsToCare->query($queryDogs);
            if (!$resultDogs) {
                die("<br><br>Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $queryDogs");
            }
            $dogs = [];
            while ($rowDogs = $resultDogs->fetch_row()){
                $dog = $rowDogs[0]." - ".$rowDogs[1];
                array_push($dogs, $dog);
            }
            array_push($row, $dogs);

            $queryCats = "SELECT name, breed FROM owners JOIN catsOwners on owners.id=catsOwners.ownersFk JOIN cats ON catsOwners.catsFk=cats.id WHERE owners.id=".$row[0].";";
            $resultCats = $pawsToCare->query($queryCats);
            if (!$resultCats) {
                die("<br><br>Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $queryCats");
            }
            $cats = [];
            while ($rowCats = $resultCats->fetch_row()){
                $cat = $rowCats[0]." - ".$rowCats[1];
                array_push($cats, $cat);
            }
            array_push($row, $cats);
            
            $queryExotics = "SELECT name, species FROM owners JOIN exoticsOwners on owners.id=exoticsOwners.ownersFk JOIN exotics ON exoticsOwners.exoticsFk=exotics.id WHERE owners.id=".$row[0].";";
            $resultExotics = $pawsToCare->query($queryExotics);
            if (!$resultExotics) {
                die("<br><br>Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $queryExotics");
            }
            $exotics = [];
            while ($rowExotics = $resultExotics->fetch_row()){
                $exotic = $rowExotics[0]." - ".$rowExotics[1];
                array_push($exotics, $exotic);
            }
            array_push($row, $exotics);

            $queryNotes= "SELECT date, vetName, note FROM owners JOIN ownerNotes ON owners.id=ownerNotes.ownersFk WHERE owners.id=".$row[0].";";
            $resultNotes = $pawsToCare->query($queryNotes);
            if (!$resultNotes) {
            die("<br><br>Error executing query: ($pawsToCare->errno) $pawsToCare->error<br>SQL = $queryNotes");
            }
            $notes = [];
            $i = 1;
            while ($rowNotes = $resultNotes->fetch_row()){
                $note = "Note ".$i++.": ".date_format(date_create($rowNotes[0]), "F j, Y")." | ".$rowNotes[1]."<br>";
                $note = $note."<i>".$rowNotes[2]."</i><br><br>";
                array_push($notes, $note);
            }
            array_push($row, $notes);

            array_push($_SESSION['owners'], $row);
        }
        
        $_SESSION["ownersNumber"] = count($_SESSION['owners']);
        $_SESSION["pages"] = intdiv($_SESSION["ownersNumber"], 10);
        if($_SESSION["ownersNumber"] % 10 != 0) $_SESSION["pages"] += 1;
        }
    ?>
    <!--Paws to Care Page Header-->
    <h2 class="text-center my-4">Owners</h2>

    <div class="container" id="tableDiv">
        <table id="table" class="table table-striped table-bordered table-light">
            <thead class="thead-light">
                <form action="/owners/filterOwners.php" method="post">
                    <tr>
                        <th>
                            <input type="text" class="form-control" placeholder="filter" name="lname" value="<?php echo $_SESSION['lname'];?>">
                        </th>
                        <th>
                            <input type="text" class="form-control" placeholder="filter" name="address" value="<?php echo $_SESSION['address'];?>">
                        </th>
                        <th>
                            <input type="text" class="form-control" placeholder="filter" name="city" value="<?php echo $_SESSION['city'];?>">
                        </th>
                        <th>
                            <input type="text" class="form-control"placeholder="filter" name="state" value="<?php echo $_SESSION['st'];?>">
                        </th>
                        <th>
                            <input type="text" class="form-control" placeholder="filter" name="zip" value="<?php echo $_SESSION['zip'];?>">
                        </th>
                        <th>
                            <button type="button" class="btn float-right" style="background-color: #C7C7C7; color: #525050;" onclick="this.form.submit()">Filter</button>
                        </th>
                    </form>
                        <th>
                            <a href="/owners/clearOwners.php"><button type="button" class="btn float-right" style="background-color: #C7C7C7; color: #525050;">Clear</button></a>
                        </th>
                </tr>
                <tr id="headerRow">
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Name of the owner" onclick="window.location.href='/owners/sortName.php'">Name</span>
                        <?php
                            if($_SESSION['sortName'] == 1) echo '<span>▲</span>';
                            if($_SESSION['sortName'] == 2) echo '<span>▼</span>';
                            else echo '<span class="invisible">▲</span>';
                        ?>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Address of the owner" onclick="window.location.href='/owners/sortAddress.php'">Address</span>
                        <?php
                            if($_SESSION['sortAddress'] == 1) echo '<span>▲</span>';
                            if($_SESSION['sortAddress'] == 2) echo '<span>▼</span>';
                            else echo '<span class="invisible">▲</span>';
                        ?>
                    </th> 
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="City of the owner" onclick="window.location.href='/owners/sortCity.php'">City</span>
                        <?php
                            if($_SESSION['sortCity'] == 1) echo '<span>▲</span>';
                            if($_SESSION['sortCity'] == 2) echo '<span>▼</span>';
                            else echo '<span class="invisible">▲</span>';
                        ?>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="State dog recived owner" onclick="window.location.href='/owners/sortState.php'">State</span>
                        <?php
                            if($_SESSION['sortState'] == 1) echo '<span>▲</span>';
                            if($_SESSION['sortState'] == 2) echo '<span>▼</span>';
                            else echo '<span class="invisible">▲</span>';
                        ?>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Zip of the owner" onclick="window.location.href='/owners/sortZip.php'">Zip</span>
                        <?php
                            if($_SESSION['sortZip'] == 1) echo '<span>▲</span>';
                            if($_SESSION['sortZip'] == 2) echo '<span>▼</span>';
                            else echo '<span class="invisible">▲</span>';
                        ?>
                    </th>
                    <th scope="col" class="text-nowrap py-2">
                        <span class="font-weight-bold" title="Animals of the owner">Animals</span>
                    </th>
                    <th scope="col" class="text-nowrap py-2">
                        <span class="font-weight-bold" title="Notes on the owner">Notes</span>
                    </th>
                </tr>
            </thead>
            <tbody id="tableBody">
                <?php
                    session_start();
                    $minIndex = (($_SESSION['page']-1)*10);
                    $maxIndex = (($_SESSION['page']-1)*10)+9;
                    if($maxIndex > $_SESSION['ownersNumber']) $maxIndex = $_SESSION['ownersNumber'];
                    
                    $i = 0;
                    while($minIndex < $maxIndex){
                        echo "<tr><td>".($_SESSION['owners'][$minIndex][2]).", ".$_SESSION['owners'][$minIndex][1]."</td><td>";
                        echo $_SESSION['owners'][$minIndex][3]." ".str_replace("null", "", $_SESSION['owners'][$minIndex][4])."</td><td>".$_SESSION['owners'][$minIndex][5];
                        echo "</td><td>".$_SESSION['owners'][$minIndex][6]."</td><td>".$_SESSION['owners'][$minIndex][7]."</td><td>";
                        
                        echo '<div class="modal" id="petsModal'.$i.'" tabindex="-1" role="dialog" aria-hidden="true">';
                        echo <<<EOT
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                        <h6 class="modal-title">Animals</h6>
                        <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button></div>
                        <div class="modal-body text-left">
EOT;
                        for($a = 0; $a < count($_SESSION['owners'][$minIndex][8]); $a++){
                            if($a == 0) echo "<b>Dogs:</b><br>";
                            echo "&emsp;".$_SESSION['owners'][$minIndex][8][$a].'<br>';
                        }
                        for($a = 0; $a < count($_SESSION['owners'][$minIndex][9]); $a++){
                            if($a == 0) echo "<b>Cats:</b><br>";
                            echo "&emsp;".$_SESSION['owners'][$minIndex][9][$a].'<br>';
                        }
                        for($a = 0; $a < count($_SESSION['owners'][$minIndex][10]); $a++){
                            if($a == 0) echo "<b>Exotics:</b><br>";
                            echo "&emsp;".$_SESSION['owners'][$minIndex][10][$a].'<br>';
                        }
                        echo '</div></div></div></div><span class="btn" data-toggle="modal" data-target="#petsModal'.$i.'">Show</span></td><td>';
                        
                        echo '<div class="modal" id="notesModal'.$i.'" tabindex="-1" role="dialog" aria-hidden="true">';
                        echo <<<EOT
                        <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                          <h6 class="modal-title">Notes</h6>
                          <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button></div>
                        <div class="modal-body text-left">
EOT;
                        if(count($_SESSION['owners'][$minIndex][11]) == 0) echo "No Notes";
                        for($a = 0; $a < count($_SESSION['owners'][$minIndex][11]); $a++){
                            echo $_SESSION['owners'][$minIndex][11][$a];
                        }
                        echo '</div></div></div></div><span class="btn" data-toggle="modal" data-target="#notesModal'.$i++.'">Show</span></td></tr>';
                        $minIndex++;
                    }
                ?>
            </tbody>
        </table>
    </div>
    
        <div style="display: flex; justify-content: center;">
            <ul id="ulPaginate" class="pagination">
                <li class="page-item nav-li"><a href="owners/previousPage.php"><button class="page-link" style="width: 90px">Previous</button></a></li>
                <li class="page-item"><a href="owners/nextPage.php"><button class="page-link" style="width: 90px">Next</button></a></li>
                <li>
                    <form action="owners/selectPage.php" method="POST" style="display: inline;">
                        <select id="ownersSelect" class="form-control col-1" onchange="this.form.submit()" name="selectPage">
                            <?php
                                echo '<option class="page-link">-</option>';
                                echo '<option class="page-link" value="01">01</option>';
                                for($i = 0; $i < intdiv($_SESSION["pages"], 10); $i++){
                                    echo '<option class="page-link" value="'.(($i+1)*10).'">'.(($i+1)*10).'</option>';
                                } 
                            ?>
                        </select>
                    </form>
                </li>
            </ul>
        </div>

        


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <link href="/css/style.css" type="text/css" rel="stylesheet">
</body>
</html>
