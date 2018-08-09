let dogs = [];
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

    let breeds = ["Labrador", "German Shepherd", "Golden Retriever", "Bulldog", "Beagle", "Poodle", "Rottweiler",
    "Yorkshire Terriers", "Boxers", "Huskie", "Dachshunds", "Great Dane", "Corgi", "Doberman Pinscher", "Australian Shepherd",
    "Cavalier King Charles Spaniel", "Shih Tzu", "Boston Terrier", "Bernese Mountain Dog", "Mastiff", "Pug", "Alaskan Malamute", "Dalmatian", 
    "Irish Wolfhound", "Afghan", "Border Collie"];
    let breed = breeds[Math.floor(Math.random() * 26)];

    let shots = Math.floor(Math.random() * 2);

    let neutered = Math.floor(Math.random() * 2);

    let licensed = Math.floor(Math.random() * 2);

    let weight = Math.floor(Math.random() * 130) + 5;
    
    let dog = {"id": 0, "name": name,  "breed": breed, "sex": sex, "shots": shots, "licensed": licensed, "neutered": neutered, "birthday": birthday, "weight": weight};
    dogs.push(dog);
}
let jsonDogs = JSON.stringify(dogs);

var dogsAjax = new XMLHttpRequest();
dogsAjax.open("POST", "writeDogs.php", true);
dogsAjax.setRequestHeader("Content-type", "application/json;");
dogsAjax.send(jsonDogs);
