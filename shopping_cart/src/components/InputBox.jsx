import react from "react"

const InputBox = () => {
    const [InputText , setInputText] = react.useState('');
    const handleChange =(e) =>{
        setInputText(e.target.value);
    };
    const handleSearch =()=>{
        alert (InputText);
        setInputText('');
    }
    return (
        <>
        <h2>input box</h2>
        <input type="text" placeholder="Enter the name of the product" 
         value={InputText} onChange={(e) => setInputText(e.target.value)}></input>
        <button onClick={handleSearch}>Search</button>
        </>
    
    )
}

export default InputBox;