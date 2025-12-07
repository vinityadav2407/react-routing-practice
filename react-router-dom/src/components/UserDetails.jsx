import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UserDetails.css';

const UserDetails = () => {
    let {name}=useParams();
    console.log(name);
    let navigate=useNavigate();

    const HandleClick=()=>{
        // navigate('/user');
        // or
        navigate(-1);
    }

  return (
    <div className='Home' >
       <h1 >
        Hill everyOne!!, myself {name} welcome to my world
      </h1>
  
      <button onClick={HandleClick} className='btn'>Go Back</button>
    </div>
  )
}

export default UserDetails