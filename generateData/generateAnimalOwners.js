let catOwners = [];
for(let i = 0; i < 1000; i++){
    if(i % 100 != 0){
        let ownerFk = faker.random.number(1000);
        let catOwner = {"id": 0, "catFk": i, "ownerFk": ownerFk};
        catOwners.push(catOwner);
    }
    
    if ( i % 5 == 0){
        let ownerFk = faker.random.number(1000);
        let catOwner = {"id": 0, "catFk": i, "ownerFk": ownerFk};
        catOwners.push(catOwner);
    } 

    if ( i % 50 == 0){
        let ownerFk = faker.random.number(1000);
        let catOwner = {"id": 0, "catFk": i, "ownerFk": ownerFk};
        catOwners.push(catOwner);
    }

}
let jsonCatOwners = JSON.stringify(catOwners);

var catOwnersAjax = new XMLHttpRequest();
catOwnersAjax.open("POST", "writeCatOwners.php", true);
catOwnersAjax.setRequestHeader("Content-type", "application/json;");
catOwnersAjax.send(jsonCatOwners);


let dogOwners = [];
for(let i = 0; i < 1000; i++){
    if(i % 100 != 0){
        let ownerFk = faker.random.number(1000);
        let dogOwner = {"id": 0, "dogFk": i, "ownerFk": ownerFk};
        dogOwners.push(dogOwner);
    }
    
    if ( i % 5 == 0){
        let ownerFk = faker.random.number(1000);
        let dogOwner = {"id": 0, "dogFk": i, "ownerFk": ownerFk};
        dogOwners.push(dogOwner);
    } 

    if ( i % 50 == 0){
        let ownerFk = faker.random.number(1000);
        let dogOwner = {"id": 0, "dogFk": i, "ownerFk": ownerFk};
        dogOwners.push(dogOwner);
    }

}
let jsonDogOwners = JSON.stringify(dogOwners);

var dogOwnersAjax = new XMLHttpRequest();
dogOwnersAjax.open("POST", "writeDogOwners.php", true);
dogOwnersAjax.setRequestHeader("Content-type", "application/json;");
dogOwnersAjax.send(jsonDogOwners);



let exoticOwners = [];
for(let i = 0; i < 1000; i++){
    if(i % 100 != 0){
        let ownerFk = faker.random.number(1000);
        let exoticOwner = {"id": 0, "exoticsFk": i, "ownerFk": ownerFk};
        exoticOwners.push(exoticOwner);
    }
    
    if ( i % 5 == 0){
        let ownerFk = faker.random.number(1000);
        let exoticOwner = {"id": 0, "exoticsFk": i, "ownerFk": ownerFk};
        exoticOwners.push(exoticOwner);
    } 

    if ( i % 50 == 0){
        let ownerFk = faker.random.number(1000);
        let exoticOwner = {"id": 0, "exoticsFk": i, "ownerFk": ownerFk};
        exoticOwners.push(exoticOwner);
    }

}
let jsonExoticOwners = JSON.stringify(exoticOwners);

var exoticOwnersAjax = new XMLHttpRequest();
exoticOwnersAjax.open("POST", "writeExoticOwners.php", true);
exoticOwnersAjax.setRequestHeader("Content-type", "application/json;");
exoticOwnersAjax.send(jsonExoticOwners);
