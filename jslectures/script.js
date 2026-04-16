//function declaration

//1.using arguements 
function greet(a) {
    console.log("Hello, World!",arguments[4]);
}
greet(1,2,3,4,"abc",true,11); // Calling the function

function noofarguments(){
    console.log(arguments.length);
}   
noofarguments(1,2,3,4,5,6,7,8,9);

//2. using rest operator
function finarg(...args){
    //print all arguments 
    console.log(args);

}
finarg(1,2,3,4,5,6,7,8,9);