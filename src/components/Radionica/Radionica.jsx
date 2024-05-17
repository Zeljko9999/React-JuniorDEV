import { useState, useEffect } from "react";
import axios from "axios";
import stil from '/src/styles/Radionica.module.css'
import Modal from "./Modal";
import { useContext } from "react";
import UserContext from "../Context";
import { Link } from 'react-router-dom';



function Radionica({ rez, id, dodaj  }) {

const user = useContext(UserContext);


const [showModal, setShowModal] = useState(false);


  return (
    <>
    <div className={stil.radionica}>
       <img src="src/x.jpg" alt="x" className="x-image" /> 
       <div className={stil.podaci}>
          <h2>{rez.ime}</h2>
          <div className={stil.podpodaci}>
            <span>opis:</span><span>{rez.opis}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>predavači:</span><span>{rez.predavac}</span>
          </div>
          <div className={stil.podpodaci}>
            <span>težina:</span><span>{rez.tezina}</span>
          </div>
          <button onClick={() => setShowModal(true)}> Prijavi se</button>
          {
              user === true ? (<Link to={`/radionice/edit/${id}`}> <button className={stil.editRadionaButton}  
              >Uredi</button></Link>)
                  : null
          }
        </div>
    </div>
    {showModal && ( 
      <Modal ime={rez.ime} setShowModal = {setShowModal} id={id} broj_prijava = {rez.broj_prijava} />   
      )}
    </>
  );
    
  }
   
  export default Radionica;