"use strict";

// As a developer, I want to make good, consistent commits.
// Commits were made through out the project.
// As a user, I want a destination to be randomly selected for my day trip.
let destPick = ['Akihabara', 'Osaka', 'Seoul', 'Busan'];
let Akihabara = destPick[0];
let Osaka = destPick[1];
let Seoul = destPick[2];
let Busan = destPick[3];

// As a user, I want a restaurant to be randomly selected for my day trip.
let restPick = ['CatCafe', 'RedLobster', 'MakiYaki', 'Mexican'];
let CatCafe = restPick[0];//'CatCafe'
let RedLobster = restPick[1];
let MakiYaki = restPick[2];
let Mexican = restPick[3];

// As a user, I want a mode of transportation to be randomly selected for my day trip.
let transPick = ['Airplane', 'Car', 'Cruise', 'Train'];
let Airplane = transPick[0];
let Car = transPick[1];
let Cruise = transPick[2];
let Train = transPick[3];

// As a user, I want a form of entertainment to be randomly selected for my day trip
let enterPick = ['Tour', 'Shopping', 'Explore', 'Eat'];
let Tour = enterPick[0];
let Shopping = enterPick[1];
let Explore = enterPick[2];
let Eat = enterPick[3];

// $ git commit -m "All of the categories have random choices to start with."
// As a user, I want to be able to randomly re-select a destination, restaurant, mode of 
// transportation, and/or form of entertainment if I don’t like one or more of those things.

let randomNumber = Math.floor(Math.random() * 4); 
console.log(randomNumber);

let randomEnter = enterPick[randomNumber];
console.log(randomEnter);

let randomTrans = transPick[randomNumber];
console.log(randomTrans);

let randomRest = restPick[randomNumber];
console.log(randomRest);

let randomDest = destPick[randomNumber];
console.log(randomDest);

// $ git commit -m "Choices have been made random now byv using math.floor with math.random."

// As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.

let destPickTwo = prompt("If you could choose Akihabara, Osaka, Seoul or Busan, where would you go?")

if(destPickTwo === "Akihabara"){
    console.log("Akihabara");
}
else if(destPickTwo === "Osaka"){
    console.log("Osaka");

}
else if(destPickTwo === "Seoul"){
    console.log("Seoul");
}
else if(destPickTwo = "Busan"){
    console.log("Busan");
}
else{
    console.log("Not a choice, sorry.");
}

// $ git commit -m "Prompt box has been made. Type in one of the choices for a destination."

let restPickTwo = prompt("Where would you like to eat at? A Cat Cafe, Red Lobster, Maki Yaki or a Mexican restaurant?");

if(restPickTwo === "Cat Cafe"){
    console.log("Cat Cafe");
}
else if(restPickTwo === "Red Lobster"){
    console.log("Red Lobster");

}
else if(restPickTwo === "Maki Yaki"){
    console.log("Maki Yaki");
}
else if(restPickTwo = "Mexican"){
    console.log("Mexican");
}
else{
    console.log("Not a choice, sorry.");
}

// $ git commit -m "Prompt box has been made. Type in a choice for where to eat."

let transPickTwo = prompt("How would you like to travel to your destination? By airplane, car, cruise or by train?");

if(transPickTwo === "Airplane"){
    console.log("Airplane");
}
else if(transPickTwo === "Car"){
    console.log("Car");

}
else if(transPickTwo === "Cruise"){
    console.log("Cruise");
}
else if(transPickTwo = "Train"){
    console.log("Train");
}
else{
    console.log("Not a choice, sorry.");
}

// $ git commit -m "Prompt box has been made. Type in a choice for how you would like to travel."

let enterPickTwo = prompt("What would you like to do? Go on a tour, shop, explore or eat?");

if(enterPickTwo === "Tour"){
    console.log("Tour");
}
else if(enterPickTwo === "Shop"){
    console.log("Shop");

}
else if(enterPickTwo === "Explore"){
    console.log("Explore");
}
else if(enterPickTwo = "Eat"){
    console.log("Eat");
}
else{
    console.log("Not a choice, sorry.");
}

// $ git commit -m "Final prompt box has been made. Type in a choice for what you would like to do."
// As a user, I want to display my completed trip in the console.


// As a developer, I want all of my functions to have a Single Responsibility. Remember, each
//function should do just one thing!

function compTrip(randomDest, randomEnter, randomRest, randomTrans){
    let result;
    result = randomDest + randomEnter + randomRest + randomTrans;
    return result;
    console.log(result);
}


// Research : How to generate a random number in JavaScript? [below]

Math.random();
console.log(Math.random());

// $ git commit -m "Research was done. Math.random is the result. "
