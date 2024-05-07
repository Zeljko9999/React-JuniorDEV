import axios from "axios";
import { useState, useEffect } from "react";
import stil from '/src/styles/RadionicaAdmin.module.css'
import { Link } from 'react-router-dom';
import RadionicaAdmin from "./RadionicaAdmin";

 
function RadioniceAdmin() {

  

 const [radionice, prikaziRadionice] = useState([]);

 
 useEffect(() => {
   axios
     .get("http://localhost:3001/radionice")
     .then(res => prikaziRadionice(res.data));
 }, []);

 

  return (
    <>
    <div className={stil.radioniceAdmin}>
      {radionice.map(({ id, ...rest }) => (
        <RadionicaAdmin  key={id} id = {id} rez={rest} dodaj={prikaziRadionice}>
         
        </RadionicaAdmin>
         ))}
    </div>
    </>
  );
}

export default RadioniceAdmin;