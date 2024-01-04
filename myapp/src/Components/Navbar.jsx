import React from 'react'
import { BellIcon,EmailIcon,SunIcon } from '@chakra-ui/icons'
function Navbar() {
  return (
    <div id='navbar' style={{width:"100%", height:"50px",
     display:"flex",
    //  padding:"3%",
    margin:"auto",

     justifyContent:"space-around"
     }}>
        <input type="text" placeholder='Search'  name="" id="inp" />
        <BellIcon boxSize={6} mt={2}/>
        <EmailIcon boxSize={6} mt={2}/>
        <SunIcon boxSize={6} mt={2}/>
        <span style={{marginTop:"8px"}}>Profile</span>
    </div>
  )
}

export default Navbar