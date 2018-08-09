let exotics = [];
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

    let types = ["Bearded Dragon Lizard", "Chinchilla", "Hedgehog", "Tiger", "Fox", "Tarantula", "Sugar Glider",
    "Capybara", "Axolotl", "Horse", "Rat", "Chimpanzee", "Red-Tailed Hawk", "Cow", "Llama",
    "Pig", "Goat", "Mantis Shrimp", "Alligator", "African Gray Parrot", "Python", "Buffalo", "Snow Owl", 
    "Goldfish", "Puma", "Turtle"];
    let species = types[Math.floor(Math.random() * 26)];


    let neutered = Math.floor(Math.random() * 2);

    
    let exotic = {"id": 0, "name": name,  "species": species, "sex": sex, "neutered": neutered, "birthday": birthday};
    exotics.push(exotic);
}
let jsonExotics = JSON.stringify(exotics);

var exoticsAjax = new XMLHttpRequest();
exoticsAjax.open("POST", "writeExotics.php", true);
exoticsAjax.setRequestHeader("Content-type", "application/json;");
exoticsAjax.send(jsonExotics);
