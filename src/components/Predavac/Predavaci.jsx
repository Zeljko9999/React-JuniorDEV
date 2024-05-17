import axios from "axios";
import { useState, useEffect } from "react";
import Predavac from "./Predavac";
import stil from '/src/styles/Predavaci.module.css'
import { useContext } from "react";
import UserContext from "../Context";
import { Link } from 'react-router-dom';

 
function Predavaci() {
  
  const user = useContext(UserContext);

  const [predavaci, prikaziPredavace] = useState([]);
  const [organizacije, postaviOrganizacije] = useState([]);
  const [teme, postaviTeme] = useState([]);
  const [selectedTema, postaviSelectedTema] = useState("");
  const [selectedOrganizacija, postaviSelectedOrganizacija] = useState("");

 
 useEffect(() => {
   axios
     .get("http://localhost:3001/predavaci/")
     .then(res => prikaziPredavace(res.data));
 }, []);

 
//Filter logika

  useEffect(() => {
    axios
      .get("http://localhost:3001/organizacije")
      .then(rez => postaviOrganizacije(rez.data))
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/teme")
      .then(rez => postaviTeme(rez.data))
      .catch(err => console.log(err.message));
  }, []);

  const promjenaTeme = (event) => {
    const selectedValue1 = event.target.value;
    postaviSelectedTema(selectedValue1);

    axios.get(`http://localhost:3001/predavaci?tema=${selectedValue1}&organizacija=${selectedOrganizacija}`)
      .then(response => {
        prikaziPredavace(response.data);
      })
      .catch(error => {
        console.error("Error fetching filtered values", error);
      });
  };

  const promjenaOrganizacije = (event) => {
    const selectedValue2 = event.target.value;
    postaviSelectedOrganizacija(selectedValue2);

    axios.get(`http://localhost:3001/predavaci?tema=${selectedTema}&organizacija=${selectedValue2}`)
      .then(response => {
        prikaziPredavace(response.data);
      })
      .catch(error => {
        console.error("Error fetching filtered values", error);
      });
  };

  return (
    <>
    {
        user === true ? (<div className={stil.dodajRadionuContainer}><Link to= "/predavaci/create"><button className={stil.addRadionaButton}
          >+ Dodaj novog predavača</button></Link></div>)
            : null
    }
    <div className={stil.radioniceSve}>
    <div className={stil.filter}>
      <div className={stil.filterTema}>
        <h2 className={stil.filterNaslov}>Teme:</h2>
        <div className={stil.filterRedak}>  
        <input
          type='radio'
          name='tema'
          id="sve1"
          value=""
          onChange={promjenaTeme}
        />
        <label htmlFor="sve1" className={stil.filterLabela} key="" >Sve</label>
        </div>  
        {teme.map(tema => (
        <div className={stil.filterRedak}>     
        <input
        type='radio'
        name='tema'
        id={tema.ime}
        value={tema.ime}
        onChange={promjenaTeme}
        />
        <label htmlFor={tema.ime} className={stil.filterLabela} key={tema.ime}>{tema.ime}</label>
        </div>
        ))}
      </div>    

      <div className={stil.filterTezina}>
        <h2 className={stil.filterNaslov}>Organizacija:</h2>
        <div className={stil.filterRedak}>  
        <input
          type='radio'
          name='organizacija'
          id="sve2"
          value=""
          onChange={promjenaOrganizacije}
        />
        <label htmlFor="sve2" className={stil.filterLabela} key="" >Sve</label>
        </div>  
        {organizacije.map(organizacija => (
        <div className={stil.filterRedak}>     
        <input
        type='radio'
        name='organizacija'
        id={organizacija.ime}
        value={organizacija.ime}
        onChange={promjenaOrganizacije}
        />
        <label htmlFor={organizacija.ime} className={stil.filterLabela} key={organizacija.ime}>{organizacija.ime}</label>
        </div>
        ))}
      </div>    
    </div>
      
    <div className={stil.predavaci}>
      {predavaci.map(({ id, ...rest }) => (
        <Predavac  key={id} id = {id} rez={rest} dodaj={prikaziPredavace}>
         
        </Predavac>
         ))}
    </div>
    
    
</div>
</>
  );
}

export default Predavaci;