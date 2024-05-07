import { useState, useEffect } from "react";
import stil from '/src/styles/NavbarAdmin.module.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavbarAdmin() {

 const [activeRoute, setActiveRoute] = useState("/administracija/radionice/create");

 const handleNavLinkClick = (route) => {
    setActiveRoute(route);
  };

return ( 
<div className={stil.navbarAdmin}>
         <div className={stil.putanjeAdmin}>
          <NavLink exact to="/administracija" activeStyle={{ color: 'green' }}  onClick={() => handleNavLinkClick("/administracija/radionice/create")}>Radionice</NavLink >

          <NavLink to="/administracija/predavaci" activeStyle={{ color: 'green' }} onClick={() => handleNavLinkClick("/administracija/predavaci/create")}>Predavači</NavLink >

          <NavLink to="/administracija/organizacije" activeStyle={{ color: 'green' }} onClick={() => handleNavLinkClick("/administracija/organizacije/create")}>Organizacije</NavLink >

        </div>
            <div className={stil.addButtonAdmin}>
            <Link to= {activeRoute}><button className={stil.addRadionaButtonAdmin}
          >+ Dodaj</button></Link>
            </div>
</div>
)
}
   
export default NavbarAdmin;