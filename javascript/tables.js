function fillTable(animals){
  $("#tableBody").empty();
  //Insert rows and data
  let tableBody = document.getElementById('tableBody');
  for(let animal of animals){
    let row = tableBody.insertRow(-1);
    for(let field in animal){
        if (field != 'id'){
            let cell = row.insertCell(-1);
            let data = animal[field];
            let id = animal['id'];
            if (field == 'owners'){
                if (data == '') data = "No Owners";
                let modal = `<div class="modal" id="ownersModal${id}" tabindex="-1" role="dialog" aria-hidden="true">`;
                modal =`${modal}<div class="modal-dialog modal-dialog-centered" role="document">`;
                modal =`${modal}<div class="modal-content">`;
                modal =`${modal}<div class="modal-header">`;
                modal =`${modal}<h6 class="modal-title">Owners</h6>`;
                modal =`${modal}<button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">`;
                modal =`${modal}<span aria-hidden="true">&times;</span>`;
                modal =`${modal}</button></div>`;
                modal =`${modal}<div class="modal-body text-left">`;
                for(let owner in data) modal = `${modal}${data[owner]}`;
                  modal = `${modal}</div></div></div></div>`;
                let span = `<span class="btn" data-toggle="modal" data-target="#ownersModal${id}">Show</span>`;
                cell.innerHTML = `${span}${modal}`;
            }
            else if (field == 'notes'){
                if (data == '') data = 'No Notes';

                let modal = `<div class="modal" id="notesModal${id}" tabindex="-1" role="dialog" aria-hidden="true">`;
                modal =`${modal}<div class="modal-dialog modal-dialog-centered" role="document">`
                modal =`${modal}<div class="modal-content">`
                modal =`${modal}<div class="modal-header">`
                modal =`${modal}<h6 class="modal-title">${animal['name']}</h6>`
                modal =`${modal}<button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">`
                modal =`${modal}<span aria-hidden="true">&times;</span>`
                modal =`${modal}</button></div>`
                modal =`${modal}<div class="modal-body text-left">`
                  for(let note in data) modal = `${modal}${data[note]}`;
                modal =`${modal}</div></div></div></div>`;
                let span = `<span class="btn" data-toggle="modal" data-target="#notesModal${id}">Show</span>`;
                cell.innerHTML = `${span}${modal}`;
            }
            else {
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
  
  function switchMaleSex(){
    if(document.getElementById('maleFilter').checked){document.getElementById('femaleFilter').checked = false;}
  }
  function switchFemaleSex(){
    if(document.getElementById('femaleFilter').checked){document.getElementById('maleFilter').checked = false;}
  }

  function compareSize(a,b){
    if (a == "S" && b != "S") return -1;
    if (a == "M" && b == "L") return -1;
    if (a == "M" && b == "G") return -1;
    if (a == "L" && b == "G") return -1;
    if (a == b) return 0;
    return 1;
  }

function pagin(arry){
  return arry.slice(0,9);
}

function sortName(arry){
  return arry.sort(function(a,b){return compareString(a.name.toLowerCase(), b.name.toLowerCase());})
}

function sortBreed(arry){
  return arry.breed(function(a,b){return compareString(a.breed.toLowerCase(), b.breed.toLowerCase());})
}