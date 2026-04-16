let arr=[1,2,3,4,5,6,7];
//let arr2=new Array(10,20,30);
//console.log(arr2);

//to get a part of array 
console.log(arr);
let subarr=arr.slice(2,6);
console.log(subarr);
console.log(arr.length);

// splice - to add or remove elements from array
// arr.splice(starting index, number of elements to be removed, elements to be added)
arr.splice(3,2,10,20,30);
console.log(arr);

// to remove elements without adding any element 
arr.splice(2,3);
console.log(arr);

// to add elements without removing any element
arr.splice(2,0,100,200);
console.log(arr);
