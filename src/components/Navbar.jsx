import { useState, useEffect } from "react";
import stil from '/src/styles/Navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar() {
return ( 
<div className={stil.navbar}>
         <div className={stil.putanje}>
          <Link to="/">Radionice</Link>

          <Link to="/predavaci">Predavači</Link>
        </div>
          <div className={stil.toggleButton}>
                <input type="checkbox" id="check"  className={stil.checkboxInput} />
                <label htmlFor="check" className={stil.button}></label>
                <span className={stil.user}>Admin</span>
            </div>
</div>
)
}
   
export default Navbar;