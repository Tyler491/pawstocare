let catNotes = [];
for(let i = 0; i < 1000; i++){
    let numberOfNotes = Math.floor(Math.random() * 4)
    for(let j = 0; j < numberOfNotes; j++){
        let note = faker.lorem.sentences();

        let date = (Math.floor(Math.random() * 18) + 2000) + "-";
        let month = (Math.floor(Math.random() * 12) + 1);
        if (month < 10) date += '0' + month + "-";
        else date += month + "-";
        let day = (Math.floor(Math.random() * 28) + 1);
        if (day < 10) date += '0' + day;
        else date += day;

        let vetName = "Dr. " + faker.name.firstName() + " " + faker.name.lastName();
        let catNote = {"id": 0, "catsFk": i, "vetName": vetName, "date": date, "note": note};
        catNotes.push(catNote);
    }

}
let jsonCatNotes = JSON.stringify(catNotes);

var catNotesAjax = new XMLHttpRequest();
catNotesAjax.open("POST", "writeCatNotes.php", true);
catNotesAjax.setRequestHeader("Content-type", "application/json;");
catNotesAjax.send(jsonCatNotes);

let dogNotes = [];
for(let i = 0; i < 1000; i++){
    let numberOfNotes = Math.floor(Math.random() * 4)
    for(let j = 0; j < numberOfNotes; j++){
        let note = faker.lorem.sentences();

        let date = (Math.floor(Math.random() * 18) + 2000) + "-";
        let month = (Math.floor(Math.random() * 12) + 1);
        if (month < 10) date += '0' + month + "-";
        else date += month + "-";
        let day = (Math.floor(Math.random() * 28) + 1);
        if (day < 10) date += '0' + day;
        else date += day;

        let vetName = "Dr. " + faker.name.firstName() + " " + faker.name.lastName();
        let dogNote = {"id": 0, "dogsFk": i, "vetName": vetName, "date": date, "note": note};
        dogNotes.push(dogNote);
    }

}
let jsonDogNotes = JSON.stringify(dogNotes);

var dogNotesAjax = new XMLHttpRequest();
dogNotesAjax.open("POST", "writeDogNotes.php", true);
dogNotesAjax.setRequestHeader("Content-type", "application/json;");
dogNotesAjax.send(jsonDogNotes);

let exoticNotes = [];
for(let i = 0; i < 1000; i++){
    let numberOfNotes = Math.floor(Math.random() * 4)
    for(let j = 0; j < numberOfNotes; j++){
        let note = faker.lorem.sentences();

        let date = (Math.floor(Math.random() * 18) + 2000) + "-";
        let month = (Math.floor(Math.random() * 12) + 1);
        if (month < 10) date += '0' + month + "-";
        else date += month + "-";
        let day = (Math.floor(Math.random() * 28) + 1);
        if (day < 10) date += '0' + day;
        else date += day;

        let vetName = "Dr. " + faker.name.firstName() + " " + faker.name.lastName();
        let exoticNote = {"id": 0, "exoticsFk": i, "vetName": vetName, "date": date, "note": note};
        exoticNotes.push(exoticNote);
    }

}
let jsonExoticNotes = JSON.stringify(exoticNotes);

var exoticNotesAjax = new XMLHttpRequest();
exoticNotesAjax.open("POST", "writeExoticNotes.php", true);
exoticNotesAjax.setRequestHeader("Content-type", "application/json;");
exoticNotesAjax.send(jsonExoticNotes);

let ownerNotes = [];
for(let i = 0; i < 1000; i++){
    let numberOfNotes = Math.floor(Math.random() * 4)
    for(let j = 0; j < numberOfNotes; j++){
        let note = faker.lorem.sentences();

        let date = (Math.floor(Math.random() * 18) + 2000) + "-";
        let month = (Math.floor(Math.random() * 12) + 1);
        if (month < 10) date += '0' + month + "-";
        else date += month + "-";
        let day = (Math.floor(Math.random() * 28) + 1);
        if (day < 10) date += '0' + day;
        else date += day;

        let vetName = "Dr. " + faker.name.firstName() + " " + faker.name.lastName();
        let ownerNote = {"id": 0, "ownerFk": i, "vetName": vetName, "date": date, "note": note};
        ownerNotes.push(ownerNote);
    }

}
let jsonOwnerNotes = JSON.stringify(ownerNotes);

var ownerNotesAjax = new XMLHttpRequest();
ownerNotesAjax.open("POST", "writeOwnerNotes.php", true);
ownerNotesAjax.setRequestHeader("Content-type", "application/json;");
ownerNotesAjax.send(jsonOwnerNotes);