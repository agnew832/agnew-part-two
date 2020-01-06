var vacationType = prompt("What kind of trip would you like to go for your vacation: musical, tropical, or adventurous?");

var groupSize = prompt("How many people are in your group?");

if (groupSize >= 1 && groupSize <= 2) {
    console.log("Since you have a group of 1 to 2 person(s), you  will be taking a first-class flight ");
} else if (groupSize >= 3 && groupSize <= 5) {
    console.log("Since you have a group of 3 to 5 persons, you should take a helicopter ");
} else if (groupSize >= 6) {
    console.log("Since you have a group of 6 or more persons, you should take a chartered flight ");
}

if (vacationType === "musical") {
    console.log("to your musical vacation in New Orleans.");
} else if (vacationType === "tropical") {
    console.log("to your tropical vacation on a beach in Mexico.");
} else if (vacationType === "adventurous") {
    console.log("to your adventurous vacation, whitewater rafting in the Grand Canyon.");
}