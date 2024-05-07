import axios from "axios";
import { useState, useEffect } from "react";
import stil from '/src/styles/Promjena.module.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PromjenaPredavac() {


  return (
    <>
    <Link to="/predavaci"> <button className={stil.promjenaButton}>Natrag</button></Link>
    <form className={stil.forma} onSubmit={handleFormSubmit}>  
          <div className={stil.formaPrva} >    
            <input name='ime' type="text" id="ime"  className={stil.radionicaPolje} 
              placeholder="Ime predavača" value={formaPodaci.ime} onChange={handleInputChange} required/>               

            <input name='biografija' className={stil.radionicaOpisPolje} type="text" id="biografija" placeholder="Biografija" 
              value={formaPodaci.biografija} onChange={handleInputChange} />
 
            <div>
              <select
                name='organizacija' value={formaPodaci.organizacija} onChange={handleInputChange} required className={stil.radionicaSelect}>
                <option value=''>Organizacija</option>
                  {organizacije.map(organizacija => (
                <option key={organizacija.id} value={organizacija.ime}>
                 {organizacija.ime}
                </option>
                ))}
               </select>
            </div> 
           
            <button className={stil.promjenaButton} type='submit'>Spremi</button>
            {showSuccessMessage && (
            <div className={stil.successMessage}>
             Predavač je uspješno uređen!
            </div>
            )}
          </div>

          <div className={stil.formaDruga} >
            <div>
            <select
                name='tema' value={formaPodaci.tema} onChange={handleInputChange} required className={stil.radionicaSelect}>
                <option value=''>Tema</option>
                  {teme.map(tema => (
                <option key={tema.id} value={tema.ime}>
                 {tema.ime}
                </option>
                ))}
               </select>
            </div>
          </div>
      </form>
      </>
  )
 }; 
export default PromjenaPredavac;