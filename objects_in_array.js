let name, surname, age, counter = 0;
let person1 = [];
let arr = [];
let client = {
    name,
    surname,
    age
};

function match(name, surname, age) {
    /* Apparently, for a reason it doesn't work when you write like
        client.name = name;
        client.surname = surname;
        client.age = age;
    */
    client = {
        name : name,
        surname : surname,
        age : age,
    };
    person1[counter] = [client];
    counter++;
}

match("Maho", "Fujiwara", 13);
match("Chika", "Fujiwara", 17);

for(let i = 0; i < counter; i++) {
    console.log(person1[i]);
}