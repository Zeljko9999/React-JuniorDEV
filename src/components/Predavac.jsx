import { useState, useEffect } from "react";
import axios from "axios";
import stil from '/src/styles/Predavac.module.css'
import { useContext } from "react";
import UserContext from "./Context";
import { Link } from 'react-router-dom';


function Radionica({ rez, id, dodaj  }) {

const user = useContext(UserContext);


  return (
    <>
    <div className={stil.radionica}>
       <img src="src/x.jpg" alt="x" className="x-image" /> 
       <div className={stil.podaci}>
          <h2>{rez.ime}</h2>
          <div className={stil.podpodaci}>
            <span>bio:</span><span>{rez.biografija}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>organizacija:</span><span>{rez.organizacija}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>Teme:</span><span>{rez.tema}</span>
          </div>
          <Link to={`/predavaci/${rez.ime}`}><button> Pregledaj radionice</button></Link>
          {
              user === true ? (<div><Link to={`/predavaci/edit/${id}`}> <button className={stil.editRadionaButton}  
              >Uredi</button></Link></div>)
                  : null
          }
        </div>
    </div>
    </>
  );
    
  }
   
  export default Radionica;