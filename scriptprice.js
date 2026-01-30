function pricing (quantity){
    if(quantity>=10){
        return quantity*500-(quantity*500*0.1);
    }
    else{
        return quantity*500;
    }

}
price =pricing (12);
console.log("total price is:",price+price*0.18); // including 18% GST
// arrow function 
const fu = () =>  (quantity) 
    if(quantity>=10){
        return quantity*500-(quantity*500*0.1);
    }
    else{
        return quantity*500;
    }

;
const price2=fu(8);
console.log("total price is:",price2+price2*0.18); // including 18% GST
//IIFE 
(function(quantity){
    if(quantity>=10){
        return quantity*500-(quantity*500*0.1);
    }
    else{
        return quantity*500;
    }

})(12);

//nested function
var x=10;
function outer(){
    var x=20;
    function inner(){
        console.log(x);
    }
    inner();
    console.log(x);
    
}
outer();
