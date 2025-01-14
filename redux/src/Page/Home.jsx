import React from 'react'
import { useState } from 'react'

const Home = () => {

  const [formInput, setFormInput] = useState({
    Name: "",
    Age: "",
    Email: "",
    Contact: ""
  })

  const handleChange = (event) => {
    const {name,value} = event.target

    setFormInput((currInput) => {
      return{
        ...currInput,
        [name]: value,
      };
    });
  };

  console.log(formInput)
  return (
    <div>
        <form>
          <label>Name: </label>
          <input 
          name='Name' 
          type='text' 
          value={formInput.Name}
          onChange={handleChange}/>
          <br/><br/>


          <label>Age: </label>
          <input 
          name='Age' 
          type='Number' 
          value={formInput.Age}
          onChange={handleChange}/>
          <br/><br/>

          <label>Email: </label>
          <input 
          name='Email' 
          type='text' 
          value={formInput.Email}
          onChange={handleChange}/>
          <br/><br/>
          <label>Contact: </label>
          <input 
          name='Contact' 
          type='Number'
          value={formInput.Contact}
          onChange={handleChange} />
          <br/><br/>

          <button>Add</button>
        </form>
        
    </div>
  )
}

export default Home