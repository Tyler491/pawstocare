function pagin(arry){
  return arry.slice(0,9);
}

function sortName(arry){
  return arry.sort(function(a,b){return compareString(a.name.toLowerCase(), b.name.toLowerCase());})
}

function sortBreed(arry){
  return arry.sort(function(a,b){return compareString(a.breed.toLowerCase(), b.breed.toLowerCase());})
}

function sortSpecies(arry){
  return arry.sort(function(a,b){return compareString(a.species.toLowerCase(), b.species.toLowerCase());})
}

function sortSex(arry){
  return arry.sort(function(a,b){return compareString(a.sex.toLowerCase(), b.sex.toLowerCase());})
}

function sortShots(arry){
  return arry.sort(function(a,b){return compareString(a.shots ? 1 : 2, b.shots ? 1 : 2);})
}
function sortAge(arry){
  arry.sort(function(a,b){
    let ageA = calculateAge(a.age);
    let ageB = calculateAge(b.age);
    if (ageA[0] != ageB[0]) return compareNumber(ageA[0], ageB[0]);
    else return compareNumber(ageA[1], ageB[1]);
  });
}

function haveOwner(arry){
  return arry['owner'] != null;
}

function haveNote(arry){
  return arry['note'] != null;
}

function filterCats(arry, name, breed, male, female, shots, declawed, neutered){
  cats = [];
  for (let cat of arry){
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
    cats.push(cat);
  }
  return cats;
}
function filterDogs(arry, name, breed, male, female, shots, licensed, neutered){
  let dogs = [];
  for (let dog of arry){
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
    dogs.push(dog);
  }
  return dogs;
}

function filterExotics(arry, name, species, male, female){
  let exotics = [];
  for (let exotic of arry){
    if (!exotic['name'].toLowerCase().includes(name.toLowerCase())){continue;}
    if (!exotic['species'].toLowerCase().includes(species.toLowerCase())){continue;}
    if (male){
      if(exotic['sex'] != 'M'){continue;}
    }
    if (female){
      if(exotic['sex'] != 'F'){continue;}
    }
    exotics.push(exotic);
  }
  return exotics;
}

function calculateAge(data){
  let today = new Date();
  let birthDay = data.substring(3,5);
  let birthMonth = data.substring(0,2);
  let birthYear = data.substring(6,10);
  let age = today.getFullYear() - birthYear
  let months = 0;

  if (age == 0){
    if ((today.getMonth() + 1) < birthMonth){months = 2 - birthMonth + (today.getMonth() + 1);}
    else{ months = (today.getMonth() + 1) - birthMonth}
  }
  else if ((today.getMonth() + 1) < birthMonth){ age--; months = 12 - birthMonth + (today.getMonth() + 1);}
  else if ((birthMonth == (today.getMonth() + 1)) && (today.getDate() < birthDay)){
    age--; 
    months = 11;
  }
  else{months = today.getMonth() + 1 - birthMonth;}

  return[age, months];
}

function formatAge(data){
  let age = calculateAge(data);
  data = `<span class=\"noWrap\">${age[0]} Years</span></br><span class=\"noWrap\">${age[1]} Months</span>`;
  return data;
}

function compareNumber(a,b){return a - b};

function compareString(a,b){
  if (a < b) return -1;
  if (a == b) return 0;
  return 1;
}

