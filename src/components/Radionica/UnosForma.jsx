import axios from "axios";
import { useState, useEffect } from "react";
import stil from '/src/styles/Promjena.module.css'
import { Link } from 'react-router-dom';

function UnosForma() {

    const [predavaci, postaviPredavace] = useState([]);
    const [tezine, postaviTezine] = useState([]);
    const [teme, postaviTeme] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [formaPodaci, postaviPodatke] = useState({
        ime: "",
        datum: "",
        predavac: "",
        opis: "",
        tezina: "",
        tema: "",
        broj_prijava: 0,
      });


    useEffect(() => {
        Promise.all([
        axios.get("http://localhost:3001/predavaci"),
        axios.get("http://localhost:3001/tezine"),
        axios.get("http://localhost:3001/teme")
      ]) 
          .then(([rezPredavaci, rezTezine, rezTeme]) => {
            postaviPredavace(rezPredavaci.data);
            postaviTezine(rezTezine.data);
            postaviTeme(rezTeme.data);
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
          await axios.post(`http://localhost:3001/radionice`, {
            ...formaPodaci,
          });
        } catch (error) {
          console.error('Error while creating data:', error);
        }
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
    };

  return (
    <>
    <Link to="/"> <button className={stil.promjenaButton}>Natrag</button></Link>
    <form className={stil.forma} onSubmit={handleFormSubmit}>  
          <div className={stil.formaPrva} >    
            <input name='ime' type="text" id="ime"  className={stil.radionicaPolje} 
              placeholder="Ime radionice" value={formaPodaci.ime} onChange={handleInputChange} required/>
                   

            <input name='datum' type="text" id="datum" placeholder="Datum održavanja" className={stil.radionicaPolje}
               value={formaPodaci.datum} onChange={handleInputChange} required />
               

            <input name='opis' className={stil.radionicaOpisPolje} type="text" id="opis" placeholder="Opis radionice" 
              value={formaPodaci.opis} onChange={handleInputChange} />
 
            <div>
              <select
                name='predavac' value={formaPodaci.predavac} onChange={handleInputChange} required className={stil.radionicaSelect}>
                <option value=''>Predavači</option>
                  {predavaci.map(predavac => (
                <option key={predavac.id} value={predavac.ime}>
                 {predavac.ime}
                </option>
                ))}
               </select>
            </div> 
           
            <button className={stil.promjenaButton} type='submit'>Spremi</button>
            {showSuccessMessage && (
            <div className={stil.successMessage}>
             Radionica je uspješno izrađena!
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
            <div>
            <select
                name='tezina' value={formaPodaci.tezina} onChange={handleInputChange} required className={stil.radionicaSelect}>
                <option value=''>Težina</option>
                  {tezine.map(tezina => (
                <option key={tezina.id} value={tezina.ime}>
                 {tezina.ime}
                </option>
                ))}
               </select>
            </div>
          </div>
      </form>
      </>
  )
 }; 
export default UnosForma;