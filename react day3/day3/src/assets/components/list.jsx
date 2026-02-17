import React from 'react'
const Lists =() =>{
  const arr=[1,2,3,4,5]
  return (<>
    <ul>
        {arr.map((item,index)=>{
            const handleclick=()=>{
                alert(item+"  was clicked")
            }
            return <li key={index}><span>{item}</span><button onClick={handleclick}>click</button></li>
        })}
    </ul>
    </>
  )
}
export default Lists;