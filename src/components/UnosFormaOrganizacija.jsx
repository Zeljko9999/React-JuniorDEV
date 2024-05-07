import axios from "axios";
import { useState, useEffect } from "react";
import stil from '/src/styles/Promjena.module.css'
import { Link } from 'react-router-dom';

function UnosFormaOrganizacija() {


    const [radionice, postaviRadionice] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [formaPodaci, postaviPodatke] = useState({
        ime: "",
        opis: "",
        radionice: "",
      });


    useEffect(() => {
        Promise.all([
        axios.get("http://localhost:3001/radionice"),
      ]) 
          .then(([rezRadionice]) => {
            postaviRadionice(rezRadionice.data);
          })
          .catch(err => console.log(err.message));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        postaviPodatke({ ...formaPodaci, [name]: value });
    }

    const handleFormSubmit = async (event) => {
      event.preventDefault();
        try {
          await axios.post(`http://localhost:3001/organizacije`, {
            ...formaPodaci,
          });
        } catch (error) {
          console.error('Error while updating data:', error);
        }
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
    };

  return (
    <>
    <Link to="/administracija/organizacije"> <button className={stil.promjenaButton}>Natrag</button></Link>
    <form className={stil.forma} onSubmit={handleFormSubmit}>  
          <div className={stil.formaPrva} >    
            <input name='ime' type="text" id="ime"  className={stil.radionicaPolje} 
              placeholder="Ime Organizacije" value={formaPodaci.ime} onChange={handleInputChange} required/>               

            <input name='opis' className={stil.radionicaOpisPolje} type="text" id="opis" placeholder="Opis" 
              value={formaPodaci.opis} onChange={handleInputChange} />
 
            <div>
              <select
                name='radionice' value={formaPodaci.radionice} onChange={handleInputChange} required className={stil.radionicaSelect}>
                <option value=''>Radionica</option>
                  {radionice.map(radionica => (
                <option key={radionica.id} value={radionica.ime}>
                 {radionica.ime}
                </option>
                ))}
               </select>
            </div> 
           
            <button className={stil.promjenaButton} type='submit'>Spremi</button>
            {showSuccessMessage && (
            <div className={stil.successMessage}>
             Organizacija je uspješno izrađena!
            </div>
            )}
          </div>
      </form>
      </>
  )
 }; 
export default UnosFormaOrganizacija;