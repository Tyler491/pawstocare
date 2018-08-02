let cats;
let displayCats = [];

let nameSortDescend = false;
let nameSortAscend = false;
let breedSortDescend = false;
let breedSortAscend = false;
let sexSortDescend = false;
let sexSortAscend = false;
let shotsSortDescend = false;
let shotsSortAscend = false;
let ageSortDescend = false;
let ageSortAscend = false;
let licensedSortDescend = false;
let licensedSortAscend = false;
let neuteredSortDescend = false;
let neuteredSortAscend = false;
let declawedSortDescend = false;
let declawedSortAscend = false;

parseCatJson();

function parseCatJson(){
  let fields = [];
  var catsJson = new XMLHttpRequest();
  var url = "php/catData.php";
  catsJson.onload = function() {
    buildCatTable(JSON.parse(this.responseText));
};
catsJson.open("GET", url, true);
catsJson.send();
}

function buildCatTable(catsData){
  cats = catsData;
  displayCats = cats;
  fillTable(displayCats);
}



//Function to blanket false all boolean triangle variables and set triangles to hidden/not-displayed
function resetTable(){
  nameSortDescend = false;
  nameSortAscend = false;
  document.getElementById('nameAscend').classList.add('invisible');
  document.getElementById('nameDescend').classList.add('d-none');
  document.getElementById('nameAscend').classList.remove('d-none');
  document.getElementById('nameDescend').classList.remove('invisible');
  breedSortDescend = false;
  breedSortAscend = false;
  document.getElementById('breedAscend').classList.add('invisible');
  document.getElementById('breedDescend').classList.add('d-none');
  document.getElementById('breedAscend').classList.remove('d-none');
  document.getElementById('breedDescend').classList.remove('invisible');
  sexSortDescend = false;
  sexSortAscend = false;
  document.getElementById('sexAscend').classList.add('invisible');
  document.getElementById('sexDescend').classList.add('d-none');
  document.getElementById('sexAscend').classList.remove('d-none');
  document.getElementById('sexDescend').classList.remove('invisible');
  shotsSortDescend = false;
  shotsSortAscend = false;
  document.getElementById('shotsAscend').classList.add('invisible');
  document.getElementById('shotsDescend').classList.add('d-none');
  document.getElementById('shotsAscend').classList.remove('d-none');
  document.getElementById('shotsDescend').classList.remove('invisible');
  ageSortDescend = false;
  ageSortAscend = false;
  document.getElementById('ageAscend').classList.add('invisible');
  document.getElementById('ageDescend').classList.add('d-none');
  document.getElementById('ageAscend').classList.remove('d-none');
  document.getElementById('ageDescend').classList.remove('invisible');
  neuteredSortDescend = false;
  neuteredSortAscend = false;
  document.getElementById('neuteredAscend').classList.add('invisible');
  document.getElementById('neuteredDescend').classList.add('d-none');
  document.getElementById('neuteredAscend').classList.remove('d-none');
  document.getElementById('neuteredDescend').classList.remove('invisible');
  declawedSortDescend = false;
  declawedSortAscend = false;
  document.getElementById('declawedAscend').classList.add('invisible');
  document.getElementById('declawedDescend').classList.add('d-none');
  document.getElementById('declawedAscend').classList.remove('d-none');
  document.getElementById('declawedDescend').classList.remove('invisible');
}

function sortNames(){
  let descendTri = document.getElementById('nameDescend');
  let ascendTri = document.getElementById('nameAscend');

  if (nameSortDescend == true){
    displayCats.reverse();
    nameSortDescend = false;
    nameSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (nameSortAscend == true){
    displayCats.reverse();
    nameSortDescend = true;
    nameSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){return compareString(a.name.toLowerCase(), b.name.toLowerCase());})
    resetTable();
    ascendTri.classList.remove('invisible');
    nameSortAscend = true;
  }
  
  fillTable(displayCats);
}

function sortBreeds(){
  let descendTri = document.getElementById('breedDescend');
  let ascendTri = document.getElementById('breedAscend');

  if (breedSortDescend == true){
    displayCats.reverse();
    breedSortDescend = false;
    breedSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (breedSortAscend == true){
    displayCats.reverse();
    breedSortDescend = true;
    breedSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){return compareString(a.breed.toLowerCase(), b.breed.toLowerCase());})
    resetTable();
    breedSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayCats);
}
 
function sortSex(){
  let descendTri = document.getElementById('sexDescend');
  let ascendTri = document.getElementById('sexAscend');

  if (sexSortDescend == true){
    displayCats.reverse();
    sexSortDescend = false;
    sexSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (sexSortAscend == true){
    displayCats.reverse();
    sexSortDescend = true;
    sexSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){return compareString(a.sex.toLowerCase(), b.sex.toLowerCase());})
    resetTable();
    sexSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayCats);
}

function sortShots(){
  let descendTri = document.getElementById('shotsDescend');
  let ascendTri = document.getElementById('shotsAscend');

  if (shotsSortDescend == true){
    displayCats.reverse();
    shotsSortDescend = false;
    shotsSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (shotsSortAscend == true){
    displayCats.reverse();
    shotsSortDescend = true;
    shotsSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){return compareString(a.shots ? 1 : 2, b.shots ? 1 : 2);})
    resetTable();
    shotsSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayCats);
}

function sortAge(){
  let descendTri = document.getElementById('ageDescend');
  let ascendTri = document.getElementById('ageAscend');

  if (ageSortDescend == true){
    displayCats.reverse();
    ageSortDescend = false;
    ageSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (ageSortAscend == true){
    displayCats.reverse();
    ageSortDescend = true;
    ageSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){
      let ageA = calculateAge(a.age);
      let ageB = calculateAge(b.age);
      if (ageA[0] != ageB[0]) return compareNumber(ageA[0], ageB[0]);
      else return compareNumber(ageA[1], ageB[1]);
    });
    resetTable();
    ageSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayCats);
}

function sortSize(){
  let descendTri = document.getElementById('sizeDescend');
  let ascendTri = document.getElementById('sizeAscend');

  if (sizeSortDescend == true){
    displayCats.reverse();
    sizeSortDescend = false;
    sizeSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (sizeSortAscend == true){
    displayCats.reverse();
    sizeSortDescend = true;
    sizeSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){return compareNumber(a.size, b.size);});
    resetTable();
    sizeSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayCats);
}

function sortNeutered(){
  let descendTri = document.getElementById('neuteredDescend');
  let ascendTri = document.getElementById('neuteredAscend');

  if (neuteredSortDescend == true){
    displayCats.reverse();
    neuteredSortDescend = false;
    neuteredSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (neuteredSortAscend == true){
    displayCats.reverse();
    neuteredSortDescend = true;
    neuteredSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){return compareString(a.neutered ? 1 : 2, b.neutered ? 1 : 2);})
    resetTable();
    neuteredSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayCats);
}

function sortDeclawed(){
  let descendTri = document.getElementById('declawedDescend');
  let ascendTri = document.getElementById('declawedAscend');

  if (declawedSortDescend == true){
    displayCats.reverse();
    declawedSortDescend = false;
    declawedSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (declawedSortAscend == true){
    displayCats.reverse();
    declawedSortDescend = true;
    declawedSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayCats.sort(function(a,b){return compareString(a.declawed ? 1 : 2, b.declawed ? 1 : 2);})
    resetTable();
    declawedSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayCats);
}

function filterCats(){
  displayCats = [];
  let name = document.getElementById('nameFilter').value;
  let breed = document.getElementById('breedFilter').value;
  let male = document.getElementById('maleFilter').checked;
  let female = document.getElementById('femaleFilter').checked;
  let shots = document.getElementById('shotsFilter').checked;
  let declawed = document.getElementById('declawedFilter').checked;
  let neutered = document.getElementById('neuteredFilter').checked;
  
  for (let cat of cats){
    if (!cat['name'].toLowerCase().includes(name.toLowerCase())){continue;}
    if (!cat['breed'].toLowerCase().includes(breed.toLowerCase())){continue;}
    if (male){
      if(cat['sex'] != 'M'){continue;}
    }
    if (female){
      if(cat['sex'] != 'F'){continue;}
    }
    if (shots && !cat['shots']){continue;}
    if (declawed && !cat['declawed']){continue;}
    if (neutered && !cat['neutered']){continue;}
    displayCats.push(cat);
  }
  fillTable(displayCats);
}

function clearCats(){
  document.getElementById('nameFilter').value = "";
  document.getElementById('breedFilter').value = "";
  document.getElementById('maleFilter').checked = false;
  document.getElementById('femaleFilter').checked = false;
  document.getElementById('shotsFilter').checked = false;
  document.getElementById('declawedFilter').checked = false;
  document.getElementById('neuteredFilter').checked = false;
  displayCats = cats;
  fillTable(displayCats)
}