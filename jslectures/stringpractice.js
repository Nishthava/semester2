let search = " Learn JavaScript Functions Arrow IIFE"
search.trim();
console.log(search);
console.log(search.length);
console.log(search.toLowerCase());
console.log(search.toUpperCase());
console.log(search.substring(6,17));
let str1 = search.slice(6,17)
console.log(str1)
console.log(search.includes("functions" ));
console.log(search.includes("arrow" ));
console.log(search.includes("iife"));
console.log(search.charAt(6))
console.log(search.charCodeAt(0))
searchJS("JavaScript");
function searchJS(str) {

if (search.includes(str.toLowerCase())) {
    console.log("JavaScript is present in the string");
}
else if(search.includes(str.toUpperCase())) {
    console.log("JavaScript is present in the string with different case");
}
 else {
    console.log("JavaScript is not present in the string");
 }
}