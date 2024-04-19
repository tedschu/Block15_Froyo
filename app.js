// (1) accept user input of flavors into an array
// (2) count the number of each flavor (for loop), ex. if "strawberry" iterate +1
// (3) add these iterated values to an object
// (3) output the object as a message to console showing each flavor / quantity





let froyoObject = {};

// Prompt for froyo order from user
let userInputString = prompt(
    "Enter a list of comma-separated froyo flavors",
    "vanilla,strawberry,coffee,vanilla,coffee"
  );


// Split the string of froyo orders and creates an array of strings.
const stringArray = userInputString.split(",");

//console.log(stringArray);


// question: how many of each flavor are there? use for loop to run through array and increment into froyoObject
//for loop

for (let i = 0; i < stringArray.length; i++) {
    
    // If the array item [i] (ex. "vanilla" is in froyoObject, iterate the value + 1, ELSE, set value to 1)
    if (stringArray[i] in froyoObject) {
        froyoObject[stringArray[i]] += 1
    } else {
        froyoObject[stringArray[i]] = 1;
    }

}

console.log(froyoObject)



//PERSONAL NOTES
// IF the key value exists, iterate it +1, otherwise create the key value at 1

// modify the object key...assign a custom attribute to an object that didn't exist

// start with empty object, build the object off of the for loop (key value) iterating through array