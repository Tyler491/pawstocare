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
                let modal = '<div class="modal" id="ownersModal'+id+'" tabindex="-1" role="dialog" aria-hidden="true">'+
                  '<div class="modal-dialog modal-dialog-centered" role="document">'+
                  '<div class="modal-content">'+
                  '<div class="modal-header">'+
                    '<h6 class="modal-title">Owners</h6>'+
                    '<button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">'+
                      '<span aria-hidden="true">&times;</span>'+
                    '</button></div>'+
                  '<div class="modal-body">'+data+'</div></div></div></div>';
                let span = '<span class="btn" data-toggle="modal" data-target="#ownersModal'+id+'">Show</span>';
                cell.innerHTML = span + modal;
            }
            else if (field == 'notes'){
                if (data == '') data = 'No Notes';
                let modal = '<div class="modal" id="notesModal'+id+'" tabindex="-1" role="dialog" aria-hidden="true">'+
                  '<div class="modal-dialog modal-dialog-centered" role="document">'+
                  '<div class="modal-content">'+
                  '<div class="modal-header">'+
                    '<h6 class="modal-title">'+animal['name']+'</h6>'+
                    '<button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">'+
                      '<span aria-hidden="true">&times;</span>'+
                    '</button></div>'+
                  '<div class="modal-body">'+data+'</div></div></div></div>';
                let span = '<span class="btn" data-toggle="modal" data-target="#notesModal'+id+'">Show</span>';
                cell.innerHTML = span + modal;
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
    data = '<span class=\"noWrap\">' + age[0] +  ' Years</span></br><span class=\"noWrap\">' + age[1] + ' Months</span>';
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