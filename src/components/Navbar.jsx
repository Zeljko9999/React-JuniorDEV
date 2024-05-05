import { useState, useEffect } from "react";
import stil from '/src/styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "./Context";

function Navbar({postaviAdmina}) {

const [admin, setAdmin] = useState(false);

const user = useContext(UserContext);

const switchUser = (event) => {
    setAdmin(event.target.checked ? true : false);
}

useEffect(() => {
    postaviAdmina(admin);
}, [admin]);

return ( 
<div className={stil.navbar}>
         <div className={stil.putanje}>
          <Link to="/">Radionice</Link>

          <Link to="/predavaci">Predavači</Link>

          {
                user === true ? (<Link to="/administracija"  style={{ color: '#e0bf09' }}>Administracija</Link>)
                    : null
            }
        </div>
          <div className={stil.toggleButton}>
                <input type="checkbox" id="check" onChange={switchUser} className={stil.checkboxInput} />
                <label htmlFor="check" className={stil.button}></label>
                <span className={stil.user}>Admin</span>
            </div>
</div>
)
}
   
export default Navbar;