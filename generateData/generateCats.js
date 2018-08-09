let cats = [];
for(let i = 0; i < 1000; i++){
    let name = faker.name.firstName(); 

    let birthday = (Math.floor(Math.random() * 18) + 2000) + "-";
    let month = (Math.floor(Math.random() * 12) + 1);
    if (month < 10) birthday += '0' + month + "-";
    else birthday += month + "-";
    let day = (Math.floor(Math.random() * 28) + 1);
    if (day < 10) birthday += '0' + day;
    else birthday += day;

    let sex = "F";
    if (Math.floor(Math.random() * 2) == 1) sex = "M";

    let breeds = ["Maine Coon", "Ragamuffin", "Ragdoll", "Persian", "American Shorthair", "Abyssinian", "Siamese",
    "Tonkinese", "Russian Blue", "Bengal", "Scottish Fold", "British Shorthair", "Siberian", "Exotic", "Birman",
    "Himalayan", "Nebelung", "Norwegian Forest", "American Bobtail", "Bombay", "Burmese", "Chartreux", "Chinese Li Hua", 
    "Devon Rex", "Ocicat", "Lykoi"];
    let breed = breeds[Math.floor(Math.random() * 26)];

    let shots = Math.floor(Math.random() * 2);

    let neutered = Math.floor(Math.random() * 2);

    let declawed = Math.floor(Math.random() * 2);
    
    let cat = {"id": 0, "name": name,  "breed": breed, "sex": sex, "shots": shots, "declawed": declawed, "neutered": neutered, "birthday": birthday};
    cats.push(cat);
}
let jsonCats = JSON.stringify(cats);

var catsAjax = new XMLHttpRequest();
catsAjax.open("POST", "writeCats.php", true);
catsAjax.setRequestHeader("Content-type", "application/json;");
catsAjax.send(jsonCats);
