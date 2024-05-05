import { useState, useEffect } from "react";
import stil from '/src/styles/Navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar() {
return ( 
<div className={stil.navbar}>

          <Link to="/">Radionice</Link>

          <Link to="/predavaci">Predavači</Link>
</div>
)
}
   
export default Navbar;