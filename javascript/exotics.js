
let exotics = [];
let displayExotics = [];

let nameSortDescend = false;
let nameSortAscend = false;
let speciesSortDescend = false;
let speciesSortAscend = false;
let sexSortDescend = false;
let sexSortAscend = false;
let ageSortDescend = false;
let ageSortAscend = false;

parseExoticJson();

function parseExoticJson(){
  let fields = [];
  var exoticsJson = new XMLHttpRequest();
  var url = "/database/exotics.json";
  exoticsJson.onload = function() {
    buildExoticTable(JSON.parse(this.responseText));
};
exoticsJson.open("GET", url, true);
exoticsJson.send();
}

function buildExoticTable(exoticsData){
  exotics = exoticsData;
  displayExotics = exotics
  fillTable(exotics);
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
  document.getElementById('speciesAscend').classList.add('invisible');
  document.getElementById('speciesDescend').classList.add('d-none');
  document.getElementById('speciesAscend').classList.remove('d-none');
  document.getElementById('speciesDescend').classList.remove('invisible');
  sexSortDescend = false;
  sexSortAscend = false;
  document.getElementById('sexAscend').classList.add('invisible');
  document.getElementById('sexDescend').classList.add('d-none');
  document.getElementById('sexAscend').classList.remove('d-none');
  document.getElementById('sexDescend').classList.remove('invisible');
  ageSortDescend = false;
  ageSortAscend = false;
  document.getElementById('ageAscend').classList.add('invisible');
  document.getElementById('ageDescend').classList.add('d-none');
  document.getElementById('ageAscend').classList.remove('d-none');
  document.getElementById('ageDescend').classList.remove('invisible');
}

function sortNames(){
  let descendTri = document.getElementById('nameDescend');
  let ascendTri = document.getElementById('nameAscend');

  if (nameSortDescend == true){
    displayExotics.reverse();
    nameSortDescend = false;
    nameSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (nameSortAscend == true){
    displayExotics.reverse();
    nameSortDescend = true;
    nameSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayExotics.sort(function(a,b){return compareString(a.name.toLowerCase(), b.name.toLowerCase());})
    resetTable();
    ascendTri.classList.remove('invisible');
    nameSortAscend = true;
  }
  fillTable(displayExotics);
}

function sortSpecies(){
  let descendTri = document.getElementById('speciesDescend');
  let ascendTri = document.getElementById('speciesAscend');

  if (speciesSortDescend == true){
    displayExotics.reverse();
    speciesSortDescend = false;
    speciesSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (speciesSortAscend == true){
    displayExotics.reverse();
    speciesSortDescend = true;
    speciesSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayExotics.sort(function(a,b){return compareString(a.species.toLowerCase(), b.species.toLowerCase());})
    resetTable();
    speciesSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayExotics);
}
 
function sortSex(){
  let descendTri = document.getElementById('sexDescend');
  let ascendTri = document.getElementById('sexAscend');

  if (sexSortDescend == true){
    displayExotics.reverse();
    sexSortDescend = false;
    sexSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (sexSortAscend == true){
    displayExotics.reverse();
    sexSortDescend = true;
    sexSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayExotics.sort(function(a,b){return compareString(a.sex.toLowerCase(), b.sex.toLowerCase());})
    resetTable();
    sexSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayExotics);
}

function sortAge(){
  let descendTri = document.getElementById('ageDescend');
  let ascendTri = document.getElementById('ageAscend');

  if (ageSortDescend == true){
    displayExotics.reverse();
    ageSortDescend = false;
    ageSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (ageSortAscend == true){
    displayExotics.reverse();
    ageSortDescend = true;
    ageSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayExotics.sort(function(a,b){
      let ageA = calculateAge(a.age);
      let ageB = calculateAge(b.age);
      if (ageA[0] != ageB[0]) return compareNumber(ageA[0], ageB[0]);
      else return compareNumber(ageA[1], ageB[1]);
    });
    resetTable();
    ageSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayExotics);
}

function filterExotics(){
  displayExotics = [];
  let name = document.getElementById('nameFilter').value;
  let species = document.getElementById('speciesFilter').value;
  let male = document.getElementById('maleFilter').checked;
  let female = document.getElementById('femaleFilter').checked;
  
  for (let exotic of exotics){
    if (!exotic['name'].toLowerCase().includes(name.toLowerCase())){continue;}
    if (!exotic['species'].toLowerCase().includes(species.toLowerCase())){continue;}
    if (male){
      if(exotic['sex'] != 'M'){continue;}
    }
    if (female){
      if(exotic['sex'] != 'F'){continue;}
    }
    displayExotics.push(exotic);
  }
  fillTable(displayExotics);
}

function clearExotics(){
  document.getElementById('nameFilter').value = "";
  document.getElementById('speciesFilter').value = "";
  document.getElementById('maleFilter').checked = false;
  document.getElementById('femaleFilter').checked = false;
  displayExotics = exotics;
  fillTable(displayExotics)
}