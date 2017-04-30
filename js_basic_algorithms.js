// Create a variable hacker1 with the driver's name
var hacker1 = "Santi";

// Print "The driver's name is XXXX"
console.log( "The driver's name is " + hacker1 );

// Create a variable hacker2 and ask the user for the navigator's name
var hacker2 = prompt( "Introduce the navigator's name: " );

// Print "The navigator's name is YYYY"
console.log( "The navigator's name is " + hacker2 );


// Depending on which name is longer, print:
if ( hacker1.length > hacker2.length ) {
	console.log( "The Driver has the longest name, it has " + hacker1.length + " characters" );
} else if ( hacker1.length < hacker2.length ) {
	console.log( "Yo, navigator got the longest name, it has " + hacker2.length + " characters" );
} else {
	console.log( "wow, you both got equally long names, " + hacker1.length + " characters!!" );
}

// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var driverUpperSpace = "";
for ( var i = 0; i < hacker1.length; i++ ) {
	driverUpperSpace += hacker1[ i ].toUpperCase() + " ";
}
console.log( driverUpperSpace );

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
console.log( hacker2.split( "" ).reverse().join( "" ) );

// Depending on the lexicographic order of the strings, print:
// Depending on which name is longer, print:
if ( hacker1.toUpperCase() < hacker2.toUpperCase() ) {
	console.log( "The driver's name goes first" );
} else if ( hacker1.toUpperCase() > hacker2.toUpperCase() ) {
	console.log( "Yo, the navigator goes first definitely" );
} else {
	console.log( "What?! You both got the same name?" );
}

// Ask the user for a new string and check if it's a Palindrome.
var palindrome = prompt( "Introduce a sentence and we will check if it is a palindrome" );

// Function that checks wether a character is a letter or not
function isLetter( character ) {
	return character.toLowerCase() != character.toUpperCase();
}


// Function that removes all non letters from a string, leaving only letters
function onlyLetters( string ) {
	for ( var i = 0; i < string.length; i++ ) {
		if ( !isLetter( string[ i ] ) ) {
			string = string.substr( 0, i ) + string.substr( i + 1, string.length - i );
			i--;
		}
	}
	return string;
}

// function that checks if a string is a palindrome
function isPalindrome( string ) {
	string = onlyLetters( string );
	for ( var i = 0; i < Math.floor( string.length / 2 ); i++ ) {
		if ( string[ i ].toUpperCase() !== string[ string.length - i - 1 ].toUpperCase() ) {
			return false;
		}
	}
	return true;
}

console.log( isPalindrome( palindrome ) );

// Go to lorem ipsum generator and:

//Generate 3 parragraphs. Store the text in a String
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas ligula sed turpis condimentum, vel tincidunt elit lacinia. Suspendisse sed placerat enim. Cras interdum diam lacinia, eleifend dolor id, dignissim magna. Suspendisse in semper lectus, at maximus arcu. In hac habitasse platea dictumst. Donec quis imperdiet libero, non molestie leo. Curabitur a egestas elit, et ullamcorper turpis. Nullam hendrerit iaculis sem in malesuada. Fusce semper dolor a nibh imperdiet malesuada. Fusce libero purus, aliquet a ligula ac, dictum pellentesque ligula. Aliquam elementum varius ex, in auctor sapien scelerisque vel. Fusce a felis non nibh bibendum fringilla. Sed et eros sed purus facilisis faucibus. Proin consectetur imperdiet justo. Ut rutrum vehicula dolor non viverra. Donec a nunc porttitor, porttitor odio et, maximus magna. Aliquam tempus odio id nibh congue volutpat id sed dui. Etiam tempor eros sed consequat pellentesque. Vestibulum mattis placerat consectetur. Donec vestibulum mauris justo, vel faucibus est iaculis eget. Pellentesque a nisi porta odio feugiat tempor non a purus. Praesent convallis nisl ex, non ultricies leo varius eu. Nam et finibus neque, sed volutpat elit. Aenean pulvinar quam lacus, et accumsan nulla aliquet non. Sed vehicula malesuada sapien vitae tincidunt. Donec tristique, leo vel dictum condimentum, metus neque commodo ante, et pellentesque arcu ipsum nec elit. Donec sollicitudin lacus a dignissim sollicitudin. Nunc odio arcu, tristique ut luctus eget, porttitor quis turpis. Maecenas ut sapien tortor. Nullam dolor turpis, dictum ac convallis vitae, tristique cursus ex. Donec interdum metus felis, ac iaculis augue ultricies porttitor. Sed eu volutpat magna, a bibendum urna.";

//Make your program count the number of words in the string

// Function that reduces any number of consecutive spaces to only one space
function reduceDoubleSpaces( string ) {
	string = string.replace( "  ", " " );
	if ( string.search( "  " ) > 0 ) {
		return reduceDoubleSpaces( string );
	}
	return string;
}

// Function that leaves a string with only words separated by one space
function wordsSeparatedByOneSpace( string ) {
	for ( var i = 0; i < string.length; i++ ) {
		if ( !isLetter( string[ i ] ) && string[ i ] !== " " ) {
			string = string.replace( string[ i ], " " );
		}
	}
	string = reduceDoubleSpaces( string );
	return string;
}

// Function that removes items with an empty string from an array
function removeEmpty( array ) {
	for ( var i = 0; i < array.length; i++ ) {
		if ( array[ i ] === "" ) {
			array.splice( i, 1 );
		}
	}
	return array;
}

function arrayOfWords( string ) {
	return ( removeEmpty( wordsSeparatedByOneSpace( string ).split( " " ) ) );
}

console.log( "The number of words in loremIpsum is " + arrayOfWords( loremIpsum ).length );

//Make your program count the number of times the latin word et appears
function CountGivenWord( array, word ) {
	var times = 0;
	for ( var i = 0; i < array.length; i++ ) {
		if ( array[ i ] === word ) {
			times++;
		}
	}
	return times;
}

console.log( "The number of times that \"et\" appears in loremIpsum is " + CountGivenWord( arrayOfWords( loremIpsum ), "et" ) );
