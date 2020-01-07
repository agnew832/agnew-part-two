
{
    var vacationType = prompt("What kind of trip would you like to go for your vacation: musical, tropical, or adventurous?");
    var groupSize = prompt("How many people are in your group?");
    var destination = "";
    var travelSuggestion = ""
    
    switch(vacationType) {
        case "musical":
          destination = "New Orleans.";
          break;
        case "tropical":
          destination = "a beach in Mexico.";
          break;
        case "adventurous":
          destination = "whitewater raft in the Grand Canyon.";
          break;
          }
    
      if (groupSize >= 1 && groupSize <= 2) {
       travelSuggestion = ("you will be taking a first-class flight");
    } else if (groupSize >= 3 && groupSize <= 5) {
        travelSuggestion =("you should take a helicopter");
    } else if (groupSize >= 6) {
         travelSuggestion = ("you should take a chartered flight");
    }    
    
    var resultString= "Since you have a group of " + groupSize
            + " going on a " + vacationType + " vacation, "
            + travelSuggestion + " to " + destination;
    console.log(resultString);
    }
    