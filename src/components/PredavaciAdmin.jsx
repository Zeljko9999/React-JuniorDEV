import axios from "axios";
import { useState, useEffect } from "react";
import stil from '/src/styles/RadionicaAdmin.module.css'
import { Link } from 'react-router-dom';
import PredavacAdmin from "./PredavacAdmin";

 
function PredavaciAdmin() {

  
 const [predavaci, prikaziPredavace] = useState([]);

 
 useEffect(() => {
   axios
     .get("http://localhost:3001/predavaci")
     .then(res => prikaziPredavace(res.data));
 }, []);

 

  return (
    <>
    <div className={stil.radioniceAdmin}>
      {predavaci.map(({ id, ...rest }) => (
        <PredavacAdmin  key={id} id = {id} rez={rest} dodaj={prikaziPredavace}>
         
        </PredavacAdmin>
         ))}
    </div>
    </>
  );
}

export default PredavaciAdmin;