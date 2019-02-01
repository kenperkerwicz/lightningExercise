
const go = (direction, speed) => {
   console.log(`the car is moving ` + direction + ` at ` + speed) 
   if (speed > 75) {
     console.log("SLOW DOWN");
   }
}
 go("forward", 85);

const foods = ["pizza", "spaghetti", "burger", "hotdog", "corn dog", "taco"]
for (let i = 0; i < foods.length; i++) {
 let currentFood = foods[i];
if (foods[i] === "hotdog") {
 console.log("hotdog");
} else {
   console.log("not hotdog");
}
}

// for each element in the array if it's a "hotdog" print hotdog and if it's not print "not hotdog" to the console!

// Loop over every item in this array:

 const array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
 const newArray = [];

 for (let i = 0; i < array.length; i++) {
   const element = array[index];
   if (typeof element === "string") 
   console.log()
 }

// Return a new array that contains only strings. Log out the result.

// Hint: The typeof operator


// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`height: ${wardrobe.height}, 
`)






// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.


const Dad = {
  name: "Gary",
  age: 22,
}
const Mom = {
  name: "Sandy",
  age: 22,
}

const bro = {
  name: "Paul",
  age: 22,
}
const pet = {
  name: "Angelo",
  age: 3,
}
 
const familyMembers = [Dad, Mom, bro, pet];

console.log(familyMembers);

const kennel = {
  name: "Nashville North Kennels",
  address: "100 Demonbreun Road",
  manager: "Harper Frankstone",
  capacity: 50,
  currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

const boardedAnimals = kennel.currentAnimals

for (let index = 0; index < boardedAnimals.length; index++) {
  const currentAnimal = boardedAnimals[index]
  console.log(currentAnimal)
}
console.log();




// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.

const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
      fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
      partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

const teacherArrayPt = nashvilleSoftwareSchool.instructors.partTime
const teacherArrayFt = nashvilleSoftwareSchool.instructors.fullTime

console.log(teacherArrayPt);
console.log(teacherArrayFt);
console.log(teacherArrayPt[0], teacherArrayFt[4]);


const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
}

const name1 = beatles.members[1].name;
const band1 = 'beatles'
const era = beatles.history.formed;
const ended = beatles.history.disbanded;
const born = beatles.members[1].birth;

console.log(name1 + ` was in the  ` +  band1 + ` from ` + era , `to`, ended + `. He was born in `, born ` He contributed heavily to `);





console.log(`Lassie's breed is ${lassie.breed}`)
// Square bracket notation for key access
// lassie["breed"]
// > "Collie"

// // // Dot notation for key access
// // lassie.breed
// > "Collie"

// LEARNED HOW TO ADD ARRAY TO A NEW ARRAY AND NEVER DUPLICATE INDEX

        const sentenceArray = ['hi', 'how', 'are', 'you'];
         const arrayLength = [sentenceArray.length];
         let result = [];
         let otherVar = '';

        function sentenceFunc (array) {
          for (let index = 0; index < array.length; index += 1) {
              let el = array[index] + ' ';
              result += el;
          } console.log(result);
          

        }
        sentenceFunc(sentenceArray);

        var message = '';
var student;



for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  
}
print(message);




const result = [];
result += sentenceArray[index];

sentenceFunc();

const dollBin = [
    { name: "Jessica", eyeColor: "Green", hasHair: false },
    { name: "Meg", eyeColor: "Brown", hasHair: false },
    { name: "Steve", eyeColor: "Blue", hasHair: true }
]

for (let index = 0; index < dollBin.length; index++) {
    const element = dollBin[index];
    
function createDollComponent () {
    if (element.name.hasHair === true) {

1/24/19

  let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]


// let upperCase = hyperbole.reverse().join(" ");

// console.log(upperCase.toUpperCase());

console.log(hyperbole.map(w => w.toUpperCase()).reverse().join(" "));


// FETCH EXERCISE //

fetch("https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/kenperkerwicz/events")
.then(events => events.json())
.then(parsedEvents => {
    console.log(parsedEvents)
    
})


// <!-- I want you to put an event listener on the container div and when the font button is clicked I want the font to change
//     and when the color button is clicked I want the text color to change. Make the necessary changes to the HTML to get it
//     to work. You will need to make a css file with 2 classes on it! -->




// COMPLETED 

let font = document.querySelector("#font")
let container = document.getElementById("container");
let p = document.getElementById("paragraph");
let buttonColor = document.getElementById("color");

font.addEventListener("click", function (event) {

  p.innerHTML = p.innerHTML.toLocaleUpperCase();
})

buttonColor.addEventListener("click", function () {
  p.style.color = 'red';
})










let reversedArray = []

  for (let index = 0; index < reverse.length; index++) {
    let reversedArray = []
    let element = reverse[index];
    element += reversedArray;
    console.log(element);
  }

  

