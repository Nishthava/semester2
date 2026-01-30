console.log(".    hello developers.    ")
let str = "    hello developers cat dog   "
console.log(str.length)
console.log(str.charAt(11))
console.log(str.charCodeAt(9))//ASCII CODE 

//SUBSTRING 
console.log(str.substring(0))//all the char after index a 
//start<end
console.log(str.substring(9,11))//from char a to b 
//start>end
console.log(str.substring(11,9))// the indexes would be swapped 
//-ve
console.log(str.substring(-100))//prints 0to end of the string ... -ve numbers are converted to 0 

//SLICE 
let str1 = str.slice(9)
console.log(str1)// works same as condition 1 
//start<end
let str2 = str.slice(10,12)
console.log(str2)
//start>end
let str3 = str.slice(12,10)
console.log(str3)

//-ve index 
let str4 = str.slice(-10)// cuts from the end of the string and returns them 
console.log(str4)

console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.trim())
console.log(str.includes("Dog"))// case sensetive .. searches the given string in the initial string and returns boolean 
