
let exotics = [];
let displayExotics = [];
let currentPageExotics = 1;

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
  var exoticsJson = new XMLHttpRequest();
  var url = "php/exoticData.php";
  exoticsJson.onload = function() {
    buildExoticTable(JSON.parse(this.responseText));
};
exoticsJson.open("GET", url, true);
exoticsJson.send();
}

function buildExoticTable(exoticsData){
  exotics = exoticsData;
  displayExotics = exotics
  newPage(1);
  fillTable(exotics.slice(0,9));
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
  fillTable(displayExotics.slice(0,9));
  newPage(1);
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
  fillTable(displayExotics.slice(0,9));
  newPage(1);
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
  fillTable(displayExotics.slice(0,9));
  newPage(1);
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
  fillTable(displayExotics.slice(0,9));
  newPage(1);
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
  fillTable(displayExotics.slice(0,9));
  newPage(1);
}

function clearExotics(){
  document.getElementById('nameFilter').value = "";
  document.getElementById('speciesFilter').value = "";
  document.getElementById('maleFilter').checked = false;
  document.getElementById('femaleFilter').checked = false;
  displayExotics = exotics;
  fillTable(displayExotics.slice(0,9));
  newPage(1);
}

function paginate(){
  let liString = `<li class="page-item nav-li"><button class="page-link" onclick="newPage((${currentPageExotics-1}))">Previous</button></li>`;
  let ul = document.getElementById('ulPaginate');
  $(ul).empty();
  let pages = Math.floor(displayExotics.length/10);
  if (displayExotics.length%10 != 0) pages+=1;

  if(pages >= 5){
    if(currentPageExotics < 3){
      for(let i = 0; i < 5; i++){
        if(i+1 == currentPageExotics) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageExotics}</button></li>`;
        else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${i+1})">${i+1}</button></li>`;
      }
    }
    else if(currentPageExotics > (pages - 2)){
      for(let i = pages - 4; i < pages + 1; i++){
        if(i == currentPageExotics) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageExotics}</button></li>`;
        else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${i})">${i}</button></li>`;
      }
    }
    else{
      let pageIndex = -2;
      for(let i = 0; i < 5; i++){
        if(i+1 == 3) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageExotics + pageIndex++}</button></li>`;
        else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${currentPageExotics + pageIndex})">${currentPageExotics + pageIndex++}</button></li>`;
      }
    }
  }
  else{
    for(let i = 0; i < pages; i++){
      if(i+1 == currentPageExotics) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageExotics}</button></li>`;
      else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${i+1})">${i+1}</button></li>`;
    }
  }

  liString = `${liString}<li class="page-item nav-li"><button class="page-link" onclick="newPage(${currentPageExotics+1})">Next</button></li>`;
  ul.innerHTML = liString;
}

function addSelect(){
  let selectPage = document.getElementById('selectPage');
  let selectString = '<option class="page-link">01</option>';
  let pages = Math.floor(displayExotics.length/10);
  if (displayExotics.length%10 != 0) pages+=1;
  let selectPages = Math.floor(pages/10);
  
  for(let i = 0; i < selectPages; i++){
    selectString = `${selectString}<option class="page-link">${(i+1)*10}</option>`;
  }
  selectPage.innerHTML = selectString;

}

function selectPage(){
  let selectPage = document.getElementById('selectPage');
  let index = selectPage.selectedIndex;
  if(index == 0) newPage(1);
  else newPage(index*10);
  selectPage.selectedIndex = index;
}

function newPage(pageNumber){
  let pages = Math.floor(displayExotics.length/10);
  if (displayExotics.length%10 != 0) pages+=1;

  if (pageNumber > 0 && pageNumber < pages+1){
    currentPageExotics = pageNumber;
    let startExotic = (currentPageExotics-1)*10;
    fillTable(displayExotics.slice(startExotic,startExotic+9));
    addSelect();
    paginate();
  }

}
