import { useState, useEffect } from "react";
import axios from "axios";
import stil from '/src/styles/RadionicaAdmin.module.css'
import BrisanjeRadionica from "./BrisanjeRadionica";
import { Link } from 'react-router-dom';



function RadionicaAdmin({ rez, id, dodaj  }) {


  return (
    <>
    <div className={stil.radionicaAdmin}>
       <div className={stil.podaci}>
         <div className={stil.podpodaci}>
            <span>Ime radionice:</span><span>{rez.ime}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>Broj prijava:</span><span>{rez.broj_prijava}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>Datum:</span><span>{rez.datum}</span>
          </div>
        </div>
        <div className={stil.gumbi}>
            <Link to={`/radionice/edit/${id}`}> <button className={stil.editRadionaButton}  
              >Uredi</button></Link>
            <BrisanjeRadionica  dodaj={dodaj} id={id}/>
        </div>
        
    </div>
    </>
  );
    
  }
   
  export default RadionicaAdmin;