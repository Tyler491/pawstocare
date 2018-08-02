<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Paws to Care</title>
</head>
<body>

    <?php include 'navbar.html'; ?>

    <!--Paws to Care Page Header-->
    <h2 class="text-center my-4">Exotics</h2>

    <div class="container" id="tableDiv">
        <table id="table" class="table table-striped table-bordered table-light">
            <thead class="thead-light">
                <tr>
                    <button type="button" class="btn float-right" onclick="clearExotics()" style="background-color: #C7C7C7; color: #525050;">Clear</button>
                    <button type="button" class="btn float-right" onclick="filterExotics()" style="background-color: #C7C7C7; color: #525050;">Filter</button>
                    <th>
                        <input type="text" class="form-control" id="nameFilter" placeholder="filter">
                    </th>
                    <th>
                        <input type="text" class="form-control" id="speciesFilter" placeholder="filter">
                    </th>
                    <th>
                        <div class="form-check text-left">
                            <label class="form-check-label mx-lg-3">
                                <input type="checkbox" class="form-check-input" id="maleFilter" onclick="switchMaleSex()">Male
                            </label>
                            <label class="form-check-label mx-lg-3">
                                <input type="checkbox" class="form-check-input" id="femaleFilter" onclick="switchFemaleSex()">Female
                            </label>
                        </div>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr id="headerRow">
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Name of the animal" onclick="sortNames()">Name</span>
                        <span id="nameAscend" class="invisible">▲</span>
                        <span id="nameDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Species of the animal" onclick="sortSpecies()">Species</span>
                        <span id="speciesAscend" class="invisible">▲</span>
                        <span id="speciesDescend" class="d-none">▼</span>
                    </th> 
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Sex of the animal" onclick="sortSex()">Sex</span>
                        <span id="sexAscend" class="invisible">▲</span>
                        <span id="sexDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Age of the animal" onclick="sortAge()">Age</span>
                        <span id="ageAscend" class="invisible">▲</span>
                        <span id="ageDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-2"><span class="font-weight-bold" title="Owners of the animal">Owners</span>
                    </th>
                    <th scope="col" class="text-nowrap py-2"><span class="font-weight-bold" title="Notes on the animal">Notes</span>
                    </th>
                </tr>
            </thead>
            <tbody id="tableBody">
            </tbody>
        </table>
    </div>
   


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <link href="/css/style.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="/javascript/tables.js"></script>
    <script type="text/javascript" src="/javascript/exotics.js"></script>
</body>
</html>