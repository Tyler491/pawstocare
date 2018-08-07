parseDogJson();
parseCatJson();
parseExoticJson();

function parseDogJson(){
    var dogsJson = new XMLHttpRequest();
    var url = "pets/petsDogData.php";
    dogsJson.onload = function() {
      let dogs = JSON.parse(this.responseText)
      if(dogs.length > 0){ 
        dogTable();
        fillDogTable(dogs);
      }
  };
  dogsJson.open("GET", url, true);
  dogsJson.send();
}

function parseCatJson(){
  var catsJson = new XMLHttpRequest();
  var url = "pets/petsCatData.php";
  catsJson.onload = function() {
    let cats = JSON.parse(this.responseText)
    if(cats.length > 0){ 
      catTable();
      fillCatTable(cats);
    }
};
catsJson.open("GET", url, true);
catsJson.send();
}

function parseExoticJson(){
  var exoticsJson = new XMLHttpRequest();
  var url = "pets/petsExoticData.php";
  exoticsJson.onload = function() {
    let exotics = JSON.parse(this.responseText)
    if(exotics.length > 0){ 
      exoticTable();
      fillExoticTable(exotics);
    }
};
exoticsJson.open("GET", url, true);
exoticsJson.send();
}
  

function fillDogTable(animals){
  $("#tableBody").empty();
  //Insert rows and data
  let tableBody = document.getElementById('dogTableBody');
  for(let animal of animals){
    let row = tableBody.insertRow(-1);
    for(let field in animal){
        if (field != 'id'){
          let cell = row.insertCell(-1);
          let data = animal[field];
          if (field == 'age') data = formatAge(data);
          if (data == true) {
          data = '<span style="color: green;">&#10003<span>';
          cell.align = 'center';
          }
          if (data == false){
          data = '<span>&#10008<span>';
          cell.align = 'center';
          }
          if (data == undefined) data = 'N/A';

          cell.innerHTML = data;
        }
    }
  }
}

function fillCatTable(animals){
  $("#tableBody").empty();
  //Insert rows and data
  let tableBody = document.getElementById('catTableBody');
  for(let animal of animals){
    let row = tableBody.insertRow(-1);
    for(let field in animal){
        if (field != 'id'){
          let cell = row.insertCell(-1);
          let data = animal[field];
          if (field == 'age') data = formatAge(data);
          if (data == true) {
          data = '<span style="color: green;">&#10003<span>';
          cell.align = 'center';
          }
          if (data == false){
          data = '<span>&#10008<span>';
          cell.align = 'center';
          }
          if (data == undefined) data = 'N/A';

          cell.innerHTML = data;
        }
    }
  }
}

function fillExoticTable(animals){
  $("#tableBody").empty();
  //Insert rows and data
  let tableBody = document.getElementById('exoticTableBody');
  for(let animal of animals){
    let row = tableBody.insertRow(-1);
    for(let field in animal){
        if (field != 'id'){
          let cell = row.insertCell(-1);
          let data = animal[field];
          if (field == 'age') data = formatAge(data);
          if (data == true) {
          data = '<span style="color: green;">&#10003<span>';
          cell.align = 'center';
          }
          if (data == false){
          data = '<span>&#10008<span>';
          cell.align = 'center';
          }
          if (data == undefined) data = 'N/A';

          cell.innerHTML = data;
        }
    }
  }
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
    data = '<span class=\"noWrap\">' + age[0] +  ' Years</span></br><span class=\"noWrap\">' + age[1] + ' Months</span>';
    return data;
  }

function dogTable(){
  let body = document.getElementById("dogTable");
  body.innerHTML = '<h2 class="text-center my-4">Dogs</h2>'+

      '<table id="dogTable" class="table table-striped table-bordered table-light dogs">'+
          '<thead class="thead-light">'+
              '<tr id="headerRow">'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Name of the dog">Name</span>'+
                  '</th>'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Breed of the dog">Breed</span>'+
                  '</th>'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Sex of the dog">Sex</span>'+
                  '</th>'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has dog recived shots">Shots</span>'+
                  '</th>'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Age of the dog">Age</span>'+
                  '</th>'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Size of the dog">Size</span>'+
                  '</th>'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has dog been licensed">Licensed</span>'+
                  '</th>'+
                  '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has dog been neutered">Neutered</span>'+
                  '</th>'+
              '</tr>'+
          '</thead>'+
          '<tbody id="dogTableBody">'+
              
          '</tbody>'+
      '</table>'
}

function catTable(){
  let body = document.getElementById("catTable");
  body.innerHTML = '<h2 class="text-center my-4">Cats</h2>'+
  '<table id="catTable" class="table table-striped table-bordered table-light cats">'+
  '<thead class="thead-light">'+
      '<tr id="headerRow">'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Name of the cat">Name</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Breed of the cat">Breed</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Sex of the cat">Sex</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat recived shots">Shots</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Age of the cat">Age</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Size of the dog">Size</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat been declawed">Declawed</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat been neutered">Neutered</span>'+
          '</th>'+
      '</tr>'+
  '</thead>'+
  '<tbody id="catTableBody"></tbody>'+
'</table>'
}

function exoticTable(){
  let body = document.getElementById("exoticTable");
  body.innerHTML = '<h2 class="text-center my-4">Exotics</h2>'+
  '<table id="exoticTable" class="table table-striped table-bordered table-light cats">'+
  '<thead class="thead-light">'+
      '<tr id="headerRow">'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Name of the cat">Name</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Breed of the cat">Breed</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Sex of the cat">Sex</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat recived shots">Shots</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Age of the cat">Age</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Size of the dog">Size</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat been declawed">Licensed</span>'+
          '</th>'+
          '<th scope="col" class="text-nowrap py-0"><span class="font-weight-bold btn" title="Has cat been neutered">Neutered</span>'+
          '</th>'+
      '</tr>'+
  '</thead>'+
  '<tbody id="exoticTableBody"></tbody>'+
'</table>'
}