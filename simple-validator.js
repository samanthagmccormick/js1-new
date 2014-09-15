var phoneNumber = prompt("Enter your phone number with dashes in between.");

alert(phoneNumber[3,7] === "-" && phoneNumber.length === 12);
alert(!isNaN(phoneNumber[0,1,2,4,5,6,8,9,10,11]));


var birthDate = prompt("Enter your date of birth");

alert(birthDate[2,5] === "/" && birthDate.length === 8);
alert(!isNaN(birthDate[0,1,3,4,6,7]));


var zipCode = prompt("Enter your zip code");

alert(zipCode.length === 5 || zipCode.length === 10);
alert(zipCode[5] === "-");
alert(!isNaN(zipCode[0,1,2,3,4,6,7,8,9]));


var state = prompt("What state are you from?").toUpperCase();

alert(state.length === 2);
alert(isNaN(state[0,1]));


var married = prompt("Are you married?").toUpperCase();

alert(married === "YES" || married === "NO");