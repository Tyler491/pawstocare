<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Paws to Care</title>
</head>
<body class="cats">
           
    <?php include 'php/navbar.php'; ?>

    <!--Paws to Care Page Header-->
    <h2 class="text-center my-4">Cats</h2>

    <div class="container tableDiv" id="tableDiv">
        <table id="table" class="table table-striped table-bordered table-light">
            <thead class="thead-light">
                <tr>
                    <th>
                        <input type="text" class="form-control" id="nameFilter" placeholder="filter">
                    </th>
                    <th>
                        <input type="text" class="form-control" id="breedFilter" placeholder="filter">
                    </th>
                    <th>
                        <div class="form-check text-left">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="maleFilter" onclick="switchMaleSex()">Male
                            </label>
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="femaleFilter" onclick="switchFemaleSex()">Female
                            </label>
                        </div>
                    </th>
                    <th>
                        <div class="form-check text-center">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="shotsFilter">&nbsp;
                            </label>
                        </div>
                    </th>
                    <th></th>
                    <th>
                        <div class="form-check text-center">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="declawedFilter">&nbsp;
                            </label>
                        </div>
                    </th>
                    <th>
                        <div class="form-check text-center">
                            <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" id="neuteredFilter">&nbsp;
                            </label>
                        </div>
                    </th>
                    <th><button type="button" class="btn float-right" onclick="filterCats()" style="background-color: #C7C7C7; color: #525050;">Filter</button></th>
                    <th><button type="button" class="btn float-right" onclick="clearCats()" style="background-color: #C7C7C7; color: #525050;">Clear</button></th>
                </tr>
                <tr id="headerRow">
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Name of the cat" onclick="sortNames()">Name</span>
                        <span id="nameAscend" class="invisible">▲</span>
                        <span id="nameDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Breed of the cat" onclick="sortBreeds()">Breed</span>
                        <span id="breedAscend" class="invisible">▲</span>
                        <span id="breedDescend" class="d-none">▼</span>
                    </th> 
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Sex of the cat" onclick="sortSex()">Sex</span>
                        <span id="sexAscend" class="invisible">▲</span>
                        <span id="sexDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat recived shots" onclick="sortShots()">Shots</span>
                        <span id="shotsAscend" class="invisible">▲</span>
                        <span id="shotsDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Age of the cat" onclick="sortAge()">Age</span>
                        <span id="ageAscend" class="invisible">▲</span>
                        <span id="ageDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat been declawed" onclick="sortDeclawed()">Declawed</span>
                        <span id="declawedAscend" class="invisible">▲</span>
                        <span id="declawedDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat been neutered" onclick="sortNeutered()">Neutered</span>
                        <span id="neuteredAscend" class="invisible">▲</span>
                        <span id="neuteredDescend" class="d-none">▼</span>
                    </th>
                    <th scope="col" class="text-nowrap py-2"><span class="font-weight-bold" title="Owners of the cat">Owners</span>
                    </th>
                    <th scope="col" class="text-nowrap py-2"><span class="font-weight-bold" title="Notes on the cat">Notes</span>
                    </th>
                </tr>
            </thead>
            <tbody id="tableBody"></tbody>
        </table>
    </div>

    <div class="container">
        <div class="row justify-content-center">
            <ul id="ulPaginate" class="pagination"></ul>
            <div></div>
            <select id="selectPage" class="form-control col-1" onchange="selectPage()"></select>
        </div>
    </div>

   


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <link href="/css/style.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="/javascript/tables.js"></script>
    <script type="text/javascript" src="/javascript/cats.js"></script>-
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.css"/>

</body>
</html>