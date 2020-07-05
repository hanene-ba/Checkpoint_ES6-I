const   pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (element) =>  (new Date().getFullYear() - element.bornOn);

console.log();

let petsWithAge = [];
pets.forEach(element => {element.age = getAge(element), 
                        petsWithAge.push(element)
});
console.log(petsWithAge);


let dogs = [];
petsWithAge.forEach(element => { if (element.type === "dog"){dogs.push(element)} 
    
});
console.log(dogs);

let Jasper;
petsWithAge.forEach(element => { if (element.name === "Jasper"){Jasper = element } 
    
});
console.log("Jasper is " + Jasper.age + " years old");