// strings
let str = "Apna College";
let str2 = "    Sushant kumar   ";

// strings methods
console.log(typeof str,str.length,str2.length);// no need to round brackets in length
console.log(str[0],str[6])//finding characters using index values
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str2.trimEnd(),str2.trimStart(),str2.trim())// trim removes spaces from start and end
console.log(str.slice(2,8),str.substring(2,8))//slicing characters from string
console.log(str.replace("Apna","Mera"))//replace given substring to new substring
console.log(str.concat(str2.trimStart()))// add two string
console.log(str.endsWith("ege"),str.startsWith("apna"))
console.log(str.indexOf("llege"),str.search("llege"));// use to find the index value of given substring
console.log(str.charAt(9))//used to find character using given index value


// some information

// substring And slice method
// The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.
// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes

// string exercises

/* loops in strings with for-of and for-in discuss in loops section*/














