// var _ = require('lodash');
// console.log(Math.floor(Math.random()*10));
// var theDate = new Date();
// console.log(theDate.getDay(), theDate.getMonth(), theDate.getFullYear());

// var person = new Object();
// var Inventory = {};

// var  Dog = {
//     name: "Odie",
//     age: 6
// };

// console.log(Dog.name);
// console.log(Dog["age"]);

// for (var prop in Dog){
//     console.log(prop);
// }

// _.forEach(Dog, value => {
//     console.log(value);
// });

//create an object, Owner, that has a name and an age

// var Owner = {
//     name: "TJ",
//     age: 92,
//     cat: {
//         name: "Chester",
//         color: "Grey"
//     },
//     dog: {
//         name: "Odie",
//         color: "Yellow"
//     }
// };

// console.log(Owner.name);
// console.log(Owner.cat.name);
// console.log(Owner.dog.color);


// Owner.lName = "Liggett";
// console.log(Owner.lName);

/* 
var Dog = {
    name : "Jd",
    breed : "lab",
    makeNoise: (noise, elses) => {
        console.log("I can " + noise + " and " + elses);
    },
    run(){
        console.log("I RUN FAST");
    }
};

Dog.makeNoise("ROO ROO ROO", "jump");
Dog.run();*/

function Animal(species, name) {
    ///statements
    this.type = species;
    this.title = name;
    this.noiseMaker = sound => {
        console.log("I " + sound);
    },
    this.run = running;
}

var dog = new Animal("dog", "Colonel");
var cat = new Animal("cat", "Kiki")
console.log("My name is " + dog.title + " and I am a " + dog.type);
console.log(cat.type);

//after the method is added
dog.noiseMaker("bork bork");
cat.noiseMaker("mew purrrrr");
cat.run();

//another method for my constructor
function running() {
    console.log(`${this.title} is very fast`);
}


