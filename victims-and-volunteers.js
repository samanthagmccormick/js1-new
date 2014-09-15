

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




// Using an object within an array

var victims = prompt("How many disaster victims do you want to enter?");

var allVictims = [];   // Initialize the array to store the objects

// for loop to go through how many victims were entered
for (var count = 0; count < victims; count++) {

	// Create a new currentVictim, which will be pushed onto the array
	var currentVictim = {
		name: prompt("Victim name"),
		phone: prompt("Enter phone"),
		street: prompt("Enter street")
	};

	// Push the currentVictim onto the allVictims array
	allVictims.push(currentVictim);

};

// Print entire array of allVictims
console.log(allVictims);







