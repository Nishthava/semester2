import React from 'react'
const ArrayMethods =() =>{

    let arr=[1,2,3,4,5]
    
    //map   
    function map(arr,ab){
        let newarr=[];
        for(let i=0;i<arr.length;i++){
            let newval=ab(arr[i])
            newarr.push(newval)
        }
        return newarr;
    }
    const doublenum=(val)=>{
        return val*2
    }
    
    console.log(map(arr,doublenum))

    return(
        <div>
            <h1>Array Methods</h1>
        </div>
    )
}
export default ArrayMethods;