//Array vaiables for master dog list and dogs being displayed
let dogs = [];
let displayDogs = [];
let currentPageDogs = 1;

//Boolean variables based on if a feild is sorted
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
let sizeSortDescend = false;
let sizeSortAscend = false;
let licensedSortDescend = false;
let licensedSortAscend = false;
let neuteredSortDescend = false;
let neuteredSortAscend = false;

//Boolean variables for male and femal checkboxes (used so only one will be checked at a time)
let maleChecked = false;
let femaleChecked = false;

//Function for ajax call to dogs json file
parseDogJson();

function parseDogJson(){
  var dogsJson = new XMLHttpRequest();
  var url = "php/dogData.php";
  dogsJson.onload = function() {
    buildDogTable(JSON.parse(this.responseText));
};
dogsJson.open("GET", url, true);
dogsJson.send();
}

//Function to set the golbal dogs array variable
function buildDogTable(dogsData){
  dogs = dogsData;
  displayDogs = dogs;
  newPage(1);
  fillTable(displayDogs.slice(0,9));
}



//Function to reset all boolean triangle variables to false and set triangles to hidden/not-displayed
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
  sizeSortDescend = false;
  sizeSortAscend = false;
  document.getElementById('sizeAscend').classList.add('invisible');
  document.getElementById('sizeDescend').classList.add('d-none');
  document.getElementById('sizeAscend').classList.remove('d-none');
  document.getElementById('sizeDescend').classList.remove('invisible');
  licensedSortDescend = false;
  licensedSortAscend = false;
  document.getElementById('licensedAscend').classList.add('invisible');
  document.getElementById('licensedDescend').classList.add('d-none');
  document.getElementById('licensedAscend').classList.remove('d-none');
  document.getElementById('licensedDescend').classList.remove('invisible');
  neuteredSortDescend = false;
  neuteredSortAscend = false;
  document.getElementById('neuteredAscend').classList.add('invisible');
  document.getElementById('neuteredDescend').classList.add('d-none');
  document.getElementById('neuteredAscend').classList.remove('d-none');
  document.getElementById('neuteredDescend').classList.remove('invisible');
}

//Funcitons to sort various feilds on the dog table
function sortNames(){
  let descendTri = document.getElementById('nameDescend');
  let ascendTri = document.getElementById('nameAscend');

  if (nameSortDescend == true){
    displayDogs.reverse();
    nameSortDescend = false;
    nameSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (nameSortAscend == true){
    displayDogs.reverse();
    nameSortDescend = true;
    nameSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){return compareString(a.name.toLowerCase(), b.name.toLowerCase());})
    resetTable();
    ascendTri.classList.remove('invisible');
    nameSortAscend = true;
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

function sortBreeds(){
  let descendTri = document.getElementById('breedDescend');
  let ascendTri = document.getElementById('breedAscend');

  if (breedSortDescend == true){
    displayDogs.reverse();
    breedSortDescend = false;
    breedSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (breedSortAscend == true){
    displayDogs.reverse();
    breedSortDescend = true;
    breedSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){return compareString(a.breed.toLowerCase(), b.breed.toLowerCase());})
    resetTable();
    breedSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}
 
function sortSex(){
  let descendTri = document.getElementById('sexDescend');
  let ascendTri = document.getElementById('sexAscend');

  if (sexSortDescend == true){
    displayDogs.reverse();
    sexSortDescend = false;
    sexSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (sexSortAscend == true){
    displayDogs.reverse();
    sexSortDescend = true;
    sexSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){return compareString(a.sex.toLowerCase(), b.sex.toLowerCase());})
    resetTable();
    sexSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

function sortShots(){
  let descendTri = document.getElementById('shotsDescend');
  let ascendTri = document.getElementById('shotsAscend');

  if (shotsSortDescend == true){
    displayDogs.reverse();
    shotsSortDescend = false;
    shotsSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (shotsSortAscend == true){
    displayDogs.reverse();
    shotsSortDescend = true;
    shotsSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){return compareString(a.shots ? 1 : 2, b.shots ? 1 : 2);})
    resetTable();
    shotsSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

function sortAge(){
  let descendTri = document.getElementById('ageDescend');
  let ascendTri = document.getElementById('ageAscend');

  if (ageSortDescend == true){
    displayDogs.reverse();
    ageSortDescend = false;
    ageSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (ageSortAscend == true){
    displayDogs.reverse();
    ageSortDescend = true;
    ageSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){
      let ageA = calculateAge(a.age);
      let ageB = calculateAge(b.age);
      if (ageA[0] != ageB[0]) return compareNumber(ageA[0], ageB[0]);
      else return compareNumber(ageA[1], ageB[1]);
    });
    resetTable();
    ageSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

function sortSize(){
  let descendTri = document.getElementById('sizeDescend');
  let ascendTri = document.getElementById('sizeAscend');

  if (sizeSortDescend == true){
    displayDogs.reverse();
    sizeSortDescend = false;
    sizeSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (sizeSortAscend == true){
    displayDogs.reverse();
    sizeSortDescend = true;
    sizeSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){return compareSize(a.size, b.size);});
    resetTable();
    sizeSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

function sortLicensed(){
  let descendTri = document.getElementById('licensedDescend');
  let ascendTri = document.getElementById('licensedAscend');

  if (licensedSortDescend == true){
    displayDogs.reverse();
    licensedSortDescend = false;
    licensedSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (licensedSortAscend == true){
    displayDogs.reverse();
    licensedSortDescend = true;
    licensedSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){return compareString(a.licensed ? 1 : 2, b.licensed ? 1 : 2);})
    resetTable();
    licensedSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

function sortNeutered(){
  let descendTri = document.getElementById('neuteredDescend');
  let ascendTri = document.getElementById('neuteredAscend');

  if (neuteredSortDescend == true){
    displayDogs.reverse();
    neuteredSortDescend = false;
    neuteredSortAscend = true;
    descendTri.classList.add('d-none');
    ascendTri.classList.remove('d-none');
  }
  else if (neuteredSortAscend == true){
    displayDogs.reverse();
    neuteredSortDescend = true;
    neuteredSortAscend = false;
    descendTri.classList.remove('d-none');
    ascendTri.classList.add('d-none');
  }
  else{
    displayDogs.sort(function(a,b){return compareString(a.neutered ? 1 : 2, b.neutered ? 1 : 2);})
    resetTable();
    neuteredSortAscend = true;
    ascendTri.classList.remove('invisible');
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}


//Funciton to filter dog table bases on entered data
function filterDogs(){
  displayDogs = [];
  let name = document.getElementById('nameFilter').value;
  let breed = document.getElementById('breedFilter').value;
  let male = document.getElementById('maleFilter').checked;
  let female = document.getElementById('femaleFilter').checked;
  let shots = document.getElementById('shotsFilter').checked;
  let licensed = document.getElementById('licensedFilter').checked;
  let neutered = document.getElementById('neuteredFilter').checked;
  
  for (let dog of dogs){
    if (!dog['name'].toLowerCase().includes(name.toLowerCase())){continue;}
    if (!dog['breed'].toLowerCase().includes(breed.toLowerCase())){continue;}
    if (male){
      if(dog['sex'] != 'M'){continue;}
    }
    if (female){
      if(dog['sex'] != 'F'){continue;}
    }
    if (shots && !dog['shots']){continue;}
    if (licensed && !dog['licensed']){continue;}
    if (neutered && !dog['neutered']){continue;}
    displayDogs.push(dog);
  }
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

//Funciton to clear search feilds and reset dog table
function clearDogs(){
  document.getElementById('nameFilter').value = "";
  document.getElementById('breedFilter').value = "";
  document.getElementById('maleFilter').checked = false;
  document.getElementById('femaleFilter').checked = false;
  document.getElementById('shotsFilter').checked = false;
  document.getElementById('licensedFilter').checked = false;
  document.getElementById('neuteredFilter').checked = false;
  displayDogs = dogs;
  fillTable(displayDogs.slice(0,9));
  newPage(1);
}

function paginate(){
  let liString = `<li class="page-item nav-li"><button class="page-link" onclick="newPage((${currentPageDogs-1}))">Previous</button></li>`;
  let ul = document.getElementById('ulPaginate');
  $(ul).empty();
  let pages = Math.floor(displayDogs.length/10);
  if (displayDogs.length%10 != 0) pages+=1;

  if(pages >= 5){
    if(currentPageDogs < 3){
      for(let i = 0; i < 5; i++){
        if(i+1 == currentPageDogs) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageDogs}</button></li>`;
        else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${i+1})">${i+1}</button></li>`;
      }
    }
    else if(currentPageDogs > (pages - 2)){
      for(let i = pages - 4; i < pages + 1; i++){
        if(i == currentPageDogs) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageDogs}</button></li>`;
        else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${i})">${i}</button></li>`;
      }
    }
    else{
      let pageIndex = -2;
      for(let i = 0; i < 5; i++){
        if(i+1 == 3) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageDogs + pageIndex++}</button></li>`;
        else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${currentPageDogs + pageIndex})">${currentPageDogs + pageIndex++}</button></li>`;
      }
    }
  }
  else{
    for(let i = 0; i < pages; i++){
      if(i+1 == currentPageDogs) liString = `${liString}<li class="page-item active"><button class="page-link">${currentPageDogs}</button></li>`;
      else liString = `${liString}<li class="page-item"><button class="page-link" onclick="newPage(${i+1})">${i+1}</button></li>`;
    }
  }

  liString = `${liString}<li class="page-item nav-li"><button class="page-link" onclick="newPage(${currentPageDogs+1})">Next</button></li>`;
  ul.innerHTML = liString;
}

function addSelect(){
  let selectPage = document.getElementById('selectPage');
  let selectString = '<option class="page-link">01</option>';
  let pages = Math.floor(displayDogs.length/10);
  if (displayDogs.length%10 != 0) pages+=1;
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
  let pages = Math.floor(displayDogs.length/10);
  if (displayDogs.length%10 != 0) pages+=1;

  if (pageNumber > 0 && pageNumber < pages+1){
    currentPageDogs = pageNumber;
    let startDog = (currentPageDogs-1)*10;
    fillTable(displayDogs.slice(startDog,startDog+9));
    addSelect();
    paginate();
  }

}
