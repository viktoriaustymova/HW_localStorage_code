import { useState, useEffect,useRef } from "react";

export default function InputPage(){
    const [name, setName] = useState('');
    const inputRef = useRef();

    useEffect(()=>{
        const storageDate = localStorage.getItem('name') || []
        setName(JSON.parse(storageDate))}, []
    )

    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name))
    },[name])

    return(
        <> 
        
           <div>Enter your name: </div>
           <input type="text" ref = {inputRef} value = {name} onChange={e => setName(e.target.value)} />
           <button onClick={ ()=> localStorage.setItem('name',JSON.stringify(name))}> Save</button>
        </>
    )

    
}