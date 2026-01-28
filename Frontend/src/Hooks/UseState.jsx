import React from 'react'

const UseState = () => {
    const [name,setName]=useState("");
    const handleSubmit=()=>{
        console.log(name);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the name'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UseState