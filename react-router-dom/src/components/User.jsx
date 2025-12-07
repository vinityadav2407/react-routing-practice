import React from 'react'
import { Link } from 'react-router-dom'
import './User.css';

const User = () => {
  return (
     <div className='Home'>
     <h1>User</h1>

     <div className="dynamicRoute">
      <Link to='/user/Uday_Kanaujiya'  >Uday_Kanaujiya</Link>
      <Link to='/user/Monu_Chauhan'  >Monu_Chauhan</Link>
      <Link to='/user/Deepak_Kumar_Kushawaha'  >Deepak_Kumar_Kushawaha</Link>
      <Link to='/user/Satyam_Sahu' >Satyam_Sahu</Link>
     </div>
     </div>
  )
}

export default User