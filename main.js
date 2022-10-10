//research the following string methods:
// charAt
// charCodeAt
// concat
// includes
// indexOf
// match
// repeat
// replace
// search
// slice
// split
// substr
// toLowerCase
// toUpperCase
// trim
// Give a short description of what the method does, how it works, it's time complexity(if appropriate - we'll cover this soon), and give three examples of it in action!

// method charAt: ---------------------------------------
// is character at a certain position in the array.
// Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character-in a string called stringName-is stringName.length - 1. if the index you supply is out of this range, JavaScript returns an empty string.
// fi no index is provided to charAt(), the default is 0.
// Here is #1 example:
let text = "HELLO WORLD"
// here is the code to get the first character in the array:
let letter = text.charAt(0); // this will return or alert H
// Here is example #2: 
const anyString = 'Brave new world'
console.log(`The character at 0 is '${anyString.charAt(0)}'`);
console.log(`The character at 1 is '${anyString.charAt(1)}'`);
console.log(`The character at 2 is '${anyString.charAt(2)}'`);
console.log(`The character at 3 is '${anyString.charAt(3)}'`);
console.log(`The character at 4 is '${anyString.charAt(4)}'`);
console.log(`The character at 999 is '${anyString.charAt(999)}'`);
// These lines display the following:
// The character at index 0 is 'B'
// The character at index 1 is 'r'
// The character at index 2 is 'a'
// The character at index 3 is 'v'
// The character at index 4 is 'e'
// The character at index 999 is ''

// Here is example #3:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q" 


// method charCodeAt: ---------------------------------------  
// The charcodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// Syntax
charCodeAt(index)
// Parameters
// index
// An integer greater than or equal to 0 and less than the length of the string. If index is not a number, it defaults to 0.
 
// Return value
// A number representing the UTF-16 code unit value of the character at the given index. If index is out of range, charCodeAt() returns NaN.

// Description
//Unicode code points range from 0 to 1114111 (0x10FFFF). the first 128 Unicode code points are a direct match of the ASC11 character encoding.

// Note: charCodeAt() will always return a value that is less than 65536. This is because the higher code points are represented by a pair of (lower valued)"surrogate" pseudo-characters which are used to comprise the real character.
// Because of this, in order ot examine (or reproduce) the full character for individual character values of 65536 or greater, for such characters, it is necessary to retrieve not only charCodeAt(i), but also charCodeAt(i+1) (as if manipulating a sting with two letters), or to use codePointAt(i)

// charCodeAt() returns NaN if the given index is less than 0, or if it is equal to or greater than the length of the string.
// Examples: 
// Using charCodeAt()
// The following example returns 65, the Unicode value for A.
'ABC'.charCodeAt(0) // returns 65
// need to learn more about this method...look more into this one. 

// Concat ---------------------------------------
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // expect output: Array ["a","b", "c", "d","e", "f"]
// The concat method creates a new array. The array will first be populated by the elements in the object on which it is called. Then, for each argument, its value will be concatenated into the array-- for normal objects or primitives, the argument itself will become an element of the final array;for arrays or array-like objects with the property Symbol.isConcatSpreadabel set tot a truthy value,each element of the argument will be independently added to the final array. The concat method does not recurse in to nested array arguments.

// The concat() ---------------------------------------
// method is a copying method. It does not alter this or any of the arrays provided as arguments but instead returns a shallow copy.that contains the same elements as the ones from the original arrays.
// The concat() method preserves empty slots if any of the source arrays is sparse.

// includes() ---------------------------------------
// the includes() method determines whether any array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];
console.log(array1.includes(2));// expected output: true
// here is another example

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // expected output: true
console.log(pets.includes('at'));// expected output: false
// Syntax ---------------------------------------
includes(searchElement)
includes(searchElement, fromIndex)
// Note: When comparing strings and characters, includes() is case-sensitive.
// Note: Technically speaking, includes() uses the SameValueZero algorithm ot determine whether the given element is found.

[1,2,3].includes(2) //  true.
[1,2,3].includes(4) //  false.
[1,2,3].includes(3,3) // false.
[1,2,3].includes(3, -1) // true.
[1,2,NaN].includes(NaN) // true.
["1", "2", "3"].includes(3) // false.

// indexOf




// ?-------------------------------------------------------------
// * Name of method
// * What it does:


// * How it works:


// * Time complexity:


// * Examples:



// ?-------------------------------------------------------------
// * charAt
// * What it does: Takes in an index and string and returns the specific character at that location.

// * How it works: Sees if the specified index passed into the method mathces any index available within the string, then returns the character at the index, if available.

// * Time complexity: 0(1)

// * Examples:
let text1 = "Sample text"
console.log(1, text1.charAt(0))
console.log(2, text1.charAt(text1.length-1))
console.log(3, text1.charAt("0"))
console.log(4, text1.charAt("test"))
let test1 = ''
console.log(5, text1.charAt(""))



// ?-------------------------------------------------------------
// * charCodeAt
// * What it does: Take in an index value and a string an returns an integer for the UTF-16 value located at that index.

// How it works: Sees if the specified index passed into the method matches any index available within the string, then returns the UTF-16 integer value at that index, if available. If the integer value is larger than 65536, then charCodeAt(i+1) should be used to get the other half of the value pair.

// * Time complexity: 

// * Examples:
let text2 = "Sample text!"
console.log(1, text2.charCodeAt(0))
console.log(2, text2.charCodeAt(text2.length-1))
console.log(3, text2.charCodeAt(1))
console.log(4, text2.charCodeAt(15))


// ?-------------------------------------------------------------
// * concat
// * What it does: Joins 2 or more strings together and outputs a single new string.

// * How it works: Takes in a calling string and concatenates all strings passed in a as arguments to the method in sequence.


// * Time complexity:


// * Examples:
let text3 = "Sample Text"
console.log(1, text3.contact('!'))
console.log(2, text3.contact('!', " This is a second agrument."))
console.log(3, text3.contact('!', 9000))
console.log(4, text3.contact(true))
console.log(5, text3.contact({thing: other_thing}))
console.log(6, text3.contact(null))
console.log(6, text3.contact(1,2,3))





// ?-------------------------------------------------------------
// * includes
// * What it does: Takes in a string as an argument and checks to see if the calling string contains the argument and returns a boolean. The method is case-sensitive. Also has an optional argument for the position at which to begin the search.


// * How it works: Searches each character from the starting index value(0 if not specified in the optional argument), and returns   candidates that match the input search value. If all returned candidates match the input search value in the same order, then returns true, else false.


// * Time complexity:


// * Examples:
let text4 = "Sample Text"
console.log(1, text4.includes('Sample'))
console.log(2, text4.includes('sample'))
console.log(1, text4.includes(Sample))
console.log(1, text4.includes("T"))





// ?-------------------------------------------------------------
// * indexOf
// * What it does: Take in a string as argument and searches the calling string for an occurrence of the search string. Returns the index value of the FIRST occurrence. Can take a second, optional argument to start at a specific index within the calling string.


// * How it works: Search each character in the string starting from the position argument(if provided), and return each candiate value that matches the search string, and if a full match is found, return the index value of the first letter of the first occurrence of the search term.


// * Time complexity:


// * Examples:
let text5 = "Sample Text"
console.log(1, text5.indexOf('Sample'))
console.log(2, text5.indexOf('sample'))
console.log(3, text5.indexOf(Sample))
console.log(4, text5.indexOf("T"))
console.log(5, text5.indexOf(" "))
console.log(5, text5.indexOf(""))







// ?-------------------------------------------------------------
// * match
// * What it does: takes a regular expression as a argument and matches it against the calling string. returns an array of all matching values. 


// * How it works: Calls RegExp.prototrp[@@match]() creates an array and returns each matching string as a string within the array.


// * Time complexity:


// * Examples:
let text6 = "Sample Text"
console.log(text6.match(/[A-Z]/g))








// ?-------------------------------------------------------------
// * Name of method
// * What it does:


// * How it works:


// * Time complexity:


// * Examples:







// ?-------------------------------------------------------------
// * Name of method
// * What it does:


// * How it works:


// * Time complexity:


// * Examples:








// ?-------------------------------------------------------------
// * Name of method
// * What it does:


// * How it works:


// * Time complexity:


// * Examples:









// ?-------------------------------------------------------------
// * Name of method
// * What it does:


// * How it works:


// * Time complexity:


// * Examples:

