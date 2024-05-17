import axios from "axios";
import { useState, useEffect } from "react";
import stil from '/src/styles/RadionicaAdmin.module.css'
import { Link } from 'react-router-dom';
import OrganizacijaAdmin from "./OrganizacijaAdmin";

 
function OrganizacijeAdmin() {

  
 const [organizacije, prikaziOrganizacije] = useState([]);

 
 useEffect(() => {
   axios
     .get("http://localhost:3001/organizacije")
     .then(res => prikaziOrganizacije(res.data));
 }, []);

 

  return (
    <>
    <div className={stil.radioniceAdmin}>
      {organizacije.map(({ id, ...rest }) => (
        <OrganizacijaAdmin  key={id} id = {id} rez={rest} dodaj={prikaziOrganizacije}>
         
        </OrganizacijaAdmin>
         ))}
    </div>
    </>
  );
}

export default OrganizacijeAdmin;