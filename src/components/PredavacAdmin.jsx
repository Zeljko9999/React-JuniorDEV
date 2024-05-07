import { useState, useEffect } from "react";
import axios from "axios";
import stil from '/src/styles/RadionicaAdmin.module.css'
import BrisanjeRadionica from "./BrisanjePredavac";
import { Link } from 'react-router-dom';



function PredavacAdmin({ rez, id, dodaj  }) {

  return (
    <>
    <div className={stil.radionicaAdmin}>
       <div className={stil.podaci}>
         <div className={stil.podpodaci}>
            <span>Ime predavača:</span><span>{rez.ime}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>Organizacija:</span><span>{rez.organizacija}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>Tema:</span><span>{rez.tema}</span>
          </div>
        </div>
        <div className={stil.gumbi}>
            <Link to={`/predavaci/edit/${id}`}> <button className={stil.editRadionaButton}  
              >Uredi</button></Link>
            <BrisanjeRadionica  dodaj={dodaj} id={id}/>
        </div>
        
    </div>
    </>
  );
    
  }
   
  export default PredavacAdmin;