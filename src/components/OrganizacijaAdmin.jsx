import { useState, useEffect } from "react";
import axios from "axios";
import stil from '/src/styles/RadionicaAdmin.module.css'
import BrisanjeOrganizacija from "./BrisanjeOrganizacija";
import { useContext } from "react";
import UserContext from "./Context";
import { Link } from 'react-router-dom';



function OrganizacijaAdmin({ rez, id, dodaj  }) {

const user = useContext(UserContext);


  return (
    <>
    <div className={stil.radionicaAdmin}>
       <div className={stil.podaci}>
         <div className={stil.podpodaci}>
            <span>Ime organizacije:</span><span>{rez.ime}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>Opis:</span><span>{rez.opis}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>Radionice:</span><span>{rez.radionice}</span>
          </div>
        </div>
        <div className={stil.gumbi}>
            <Link to={`/administracija/organizacije/edit/${id}`}> <button className={stil.editRadionaButton}  
              >Uredi</button></Link>
            <BrisanjeOrganizacija  dodaj={dodaj} id={id}/>
        </div>
        
    </div>
    </>
  );
    
  }
   
  export default OrganizacijaAdmin;