import axios from "axios";
import { useState, useEffect } from "react";
import Radionica from "./Radionica";
import stil from '/src/styles/Radionice.module.css'
import { useContext } from "react";
import UserContext from "../Context";
import { Link } from 'react-router-dom';

 
function Radionice(predavac) {

  //provjeri zbog komponente RadionicePredavac koja salje props
  if (predavac.hasOwnProperty('history') && predavac.hasOwnProperty('location') && predavac.hasOwnProperty('match')) {
    predavac="";
  }
  else {
    predavac = encodeURIComponent(predavac.predavac);
  }


  const user = useContext(UserContext);

  const [radionice, prikaziRadionice] = useState([]);
  const [tezine, postaviTezine] = useState([]);
  const [teme, postaviTeme] = useState([]);
  const [selectedTema, postaviSelectedTema] = useState("");
  const [selectedTezina, postaviSelectedTezina] = useState("");

 
 useEffect(() => {
   axios
     .get(`http://localhost:3001/radionice?predavac=${predavac}`)
     .then(res => prikaziRadionice(res.data));
 }, []);

 
//Filter logika

  useEffect(() => {
    axios
      .get("http://localhost:3001/tezine")
      .then(rez => postaviTezine(rez.data))
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

    axios.get(`http://localhost:3001/radionice?tema=${selectedValue1}&tezina=${selectedTezina}`)
      .then(response => {
        prikaziRadionice(response.data);
      })
      .catch(error => {
        console.error("Error fetching filtered values", error);
      });
  };

  const promjenaTezine = (event) => {
    const selectedValue2 = event.target.value;
    postaviSelectedTezina(selectedValue2);

    axios.get(`http://localhost:3001/radionice?tema=${selectedTema}&tezina=${selectedValue2}`)
      .then(response => {
        prikaziRadionice(response.data);
      })
      .catch(error => {
        console.error("Error fetching filtered values", error);
      });
  };

  return (
    <>
    {
        user === true ? (<div className={stil.dodajRadionuContainer}><Link to= "/radionice/create"><button className={stil.addRadionaButton}
          >+ Dodaj novu radionicu</button></Link></div>)
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
        <h2 className={stil.filterNaslov}>Težina:</h2>
        <div className={stil.filterRedak}>  
        <input
          type='radio'
          name='tezina'
          id="sve2"
          value=""
          onChange={promjenaTezine}
        />
        <label htmlFor="sve2" className={stil.filterLabela} key="" >Sve</label>
        </div>  
        {tezine.map(tezina => (
        <div className={stil.filterRedak}>     
        <input
        type='radio'
        name='tezina'
        id={tezina.ime}
        value={tezina.ime}
        onChange={promjenaTezine}
        />
        <label htmlFor={tezina.ime} className={stil.filterLabela} key={tezina.ime}>{tezina.ime}</label>
        </div>
        ))}
      </div>    
    </div>
      
    <div className={stil.radionice}>
      {radionice.map(({ id, ...rest }) => (
        <Radionica  key={id} id = {id} rez={rest} dodaj={prikaziRadionice}>
         
        </Radionica>
         ))}
    </div>
    
    
</div>
</>
  );
}

export default Radionice;