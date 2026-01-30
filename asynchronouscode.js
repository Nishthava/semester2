console.log("Asynchronous Code Example");

//synchronous function

console.log("before");
function syncFunction() {
    console.log("Inside synchronous function");
}
syncFunction();
console.log("after");

//asynchronous function using setTimeout
console.log("before");
function fun(){
    console.log("i am fun");
}
setTimeout(fun,0); // after 2 seconds fun will be called
console.log("after");