import React from 'react'
import './layout.css'
import Button from '@mui/material/Button';
import pic from '../../public/pic.png'
import { IconButton, TextField } from '@mui/material';
import { IoSearchCircleOutline } from "react-icons/io5";



const NavBar = () => {
    const [age, setAge] = React.useState('');

    
    
  return (
    <div id='navbar'>
      <nav>
        <div className="navWarpper">
            <div className="logo">
                <img src={pic} alt="" />
            </div>

            <div className="selects">
                <select name="area" id="area">
                    <option value="khulna" selected>khulna</option>
                    <option value="khulna">khulna</option>
                    <option value="khulna">khulna</option>
                    <option value="khulna">khulna</option>
                    <option value="khulna">khulna</option>
                    <option value="khulna">khulna</option>
                </select>
            </div>

            <div className="inputSrc">
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <IconButton aria-label="search"> <IoSearchCircleOutline /> </IconButton>
            </div>
            <div className="post">
            <Button variant="contained" color="success">Post</Button>
            </div>
            <div className="log"></div>
            <Button variant="contained">Hello world</Button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
