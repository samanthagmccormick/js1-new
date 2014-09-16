

// // Using an array

// var victims = prompt("How many disaster victims do you want to enter?");

// var victimName = [];
// var victimPhone = [];
// var victimStreet = [];

// for (var count = 0; count < victims; count++) {

// 	var sampleName = prompt("Enter name");
// 	victimName.push(sampleName);

// 	var samplePhone = prompt("Enter phone");
// 	victimPhone.push(samplePhone);

// 	var sampleStreet = prompt("Enter street");
// 	victimStreet.push(sampleStreet);

// };

// console.log(victimName, victimPhone, victimStreet);


// var volunteers = prompt("How many disaster volunteers do you want to enter?");

// var volunteerName = [];
// var volunteerPhone = [];
// var volunteerStreet = [];

// for (var count = 0; count < volunteers; count++) {

// 	var sampleName = prompt("Enter name");
// 	volunteerName.push(sampleName);

// 	var samplePhone = prompt("Enter phone");
// 	volunteerPhone.push(samplePhone);

// 	var sampleStreet = prompt("Enter street");
// 	volunteerStreet.push(sampleStreet);

// };

// console.log(volunteerName, volunteerPhone, volunteerStreet);

// alert("There are " + victims + " victims, and " + volunteers + " volunteers.")

// // Print all victim information
// for (count = 0; count < victims; count++) {
// 	alert(volunteerName[count] + '\n' + volunteerPhone[count] + '\n' + volunteerStreet[count]);
// };




// // Using an object within an array

// var victims = prompt("How many disaster victims do you want to enter?");

// var allVictims = [];   // Initialize the array to store the objects

// // for loop to go through how many victims were entered
// for (var count = 0; count < victims; count++) {

// 	// Create a new currentVictim, which will be pushed onto the array
// 	var currentVictim = {
// 		name: prompt("Victim name"),
// 		phone: prompt("Enter phone"),
// 		street: prompt("Enter street")
// 	};

// 	// Push the currentVictim onto the allVictims array
// 	allVictims.push(currentVictim);

// };

// // Print entire array of allVictims
// console.log(allVictims);




// // Bonus1: Adding a confirm statement (using object/array) - uses a do...while loop

// var allVictims = [];   // Initialize the array to store the objects

// do {
// 	// Create a new currentVictim, which will be pushed onto the array
// 	var currentVictim = {
// 		name: prompt("Victim name"),
// 		phone: prompt("Enter phone"),
// 		street: prompt("Enter street")
// 	};

// 	// Push the currentVictim onto the allVictims array
// 	allVictims.push(currentVictim);

// 	var r = confirm("Would you like to add another person?");
// } while (r);

// // Print entire array of allVictims
// console.log(allVictims);




// // Bonus2: Searching

// var victimInNeed = prompt("Search for a victim by name! Enter a person's name.");

// for (var count = 0; count < allVictims.length; count++) {
// 	if (victimInNeed === allVictims[count].name) {
// 		var victimStreet = allVictims[count].street;   // Set the matching location to "VictimStreet"
// 		alert(victimInNeed + " lives at " + victimStreet + " Street");
// 	};
// };

// // Find out if VictimInNeed's street matches the other victims' streets
// alert("These are the volunteers that can help: ");

// // The second part of the below if statement filters out the victimInNeed's name from the list of volunteers
// for (var count = 0; count < allVictims.length; count++) {
// 	if ((allVictims[count].street === victimStreet) && (allVictims[count].name != victimInNeed)) {
// 		alert(allVictims[count].name);
// 	};
// };



// Bonus3: Replace prompts and alerts with forms and on-page rendering (user interface)

// B1: Adding a confirm statement (using object/array) - uses a do...while loop

var allVictims = [];   // Initialize the array to store the objects

do {
	// Create a new currentVictim, which will be pushed onto the array
	var currentVictim = {
		name: prompt("Victim name"),
		phone: prompt("Enter phone"),
		street: prompt("Enter street")
	};

	// Push the currentVictim onto the allVictims array
	allVictims.push(currentVictim);

	var r = confirm("Would you like to add another person?");
} while (r);

// Print entire array of allVictims
console.log(allVictims);




// B2: Searching

var victimInNeed = prompt("Search for a victim by name! Enter a person's name.");

for (var count = 0; count < allVictims.length; count++) {
	if (victimInNeed === allVictims[count].name) {
		var victimStreet = allVictims[count].street;   // Set the matching location to "VictimStreet"
		alert(victimInNeed + " lives at " + victimStreet + " Street");
	};
};

// Find out if VictimInNeed's street matches the other victims' streets
alert("These are the volunteers that can help: ");

// The second part of the below if statement filters out the victimInNeed's name from the list of volunteers
for (var count = 0; count < allVictims.length; count++) {
	if ((allVictims[count].street === victimStreet) && (allVictims[count].name != victimInNeed)) {
		alert(allVictims[count].name);
	};
};





