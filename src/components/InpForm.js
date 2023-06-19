import { useState } from "react"

function InpForm({getLength})
{
  const [text,setText]=useState("");

  const handleChange = (e) =>{

   
setText(e.target.value);

getLength(e.target.value);

  }



    return(

        <div>
        
        <form>
        <textarea rows="10" cols="50" onChange={handleChange} placeholder="Enter something" value={text}></textarea>
       
        </form>
        </div>


    )



}

export default InpForm;