import { useState, useEffect } from "react";
import stil from '/src/styles/Navbar.module.css'
import { useContext } from "react";
import UserContext from "./Context";
import { NavLink } from 'react-router-dom';

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
          <NavLink exact to="/" activeStyle={{ color: 'green' }} >Radionice</NavLink >

          <NavLink  to="/predavaci" activeStyle={{ color: 'green' }}>Predavači</NavLink >

          {
                user === true ? (<NavLink  to="/administracija" activeStyle={{ color: 'green' }}  style={{ color: '#e0bf09' }}>Administracija</NavLink >)
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