import { useState, useEffect } from "react";
import axios from "axios";
import stil from '/src/styles/Radionica.module.css'
import Modal from "./Modal";

function Radionica({ rez, id, dodaj  }) {

const [uredi, postaviUredi] = useState(false);
const [prijava, postaviPrijavi] = useState(false);
const [velicine, postaviVelicine] = useState([]);
const [formaPodaci, postaviPodatke] = useState({
  ime: rez.ime,
  datum: rez.datum,
  predavac: rez.predavac,
  opis: rez.opis,
  broj_prijava: rez.broj_prijava,

});
const [showModal, setShowModal] = useState(false);


//   useEffect(() => {
//     Promise.all([
//     axios.get("http://localhost:3001/vrste"),
//     axios.get("http://localhost:3001/velicine")
//   ]) 
//       .then(([rezVrste, rezVelicine]) => {
//         postaviVrste(rezVrste.data);
//         postaviVelicine(rezVelicine.data);
//       })
//       .catch(err => console.log(err.message));
//   }, []);


//   function promjenaUlaza(event) {
//     const { name, value } = event.target;
//     postaviPodatke({ ...formaPodaci, [name]: value });
//   }

  return (
    <>
    <div className={stil.radionica}>
       <img src="src\x.jpg" alt="x" className="x-image" /> 
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
        </div>
    </div>
    {showModal && ( 
      <Modal ime={rez.ime} setShowModal = {setShowModal} id={id} broj_prijava = {rez.broj_prijava} />   
      )}
    </>
  );

    // if (uredi === false) {
    //   return (
    //   <tr>
    //     <td>{rez.vrsta}</td>
    //     <td>{rez.velicina}</td>
    //     <td>  <div style={{ backgroundColor: rez.boja, padding: '15px' }}> </div> </td>
    //     <td>{rez.date}</td>
    //     <td><img style={{maxWidth: "100px" }} src={rez.slika} /></td>
    //     <td> <button onClick={promjenaPrikaza}>Uredi</button> <Brisanje dodaj={dodaj} id={id}/></td>
    //   </tr>
    //   );}
    // else {
    //   return (
    //   <tr>
    //     <td>
    //       <div>
    //         <select
    //         name='vrsta'
    //         value={formaPodaci.vrsta}
    //         onChange={promjenaUlaza}
    //         required>
    //         {vrste.map(vrsta => (
    //         <option key={vrsta.id} value={vrsta.naziv}>
    //         {vrsta.naziv}
    //         </option>
    //         ))}
    //         </select>
    //       </div>
    //     </td>
    //     <td>
    //       <div>
    //         <select
    //         name='velicina'
    //         value={formaPodaci.velicina}
    //         onChange={promjenaUlaza}
    //         required>
    //         {velicine.map(velicina => (
    //         <option key={velicina.id} value={velicina.oznaka}>
    //         {velicina.oznaka}
    //         </option>
    //         ))}
    //         </select>
    //       </div>
    //     </td>
    //     <td>
    //       <div style={{width:"100%"}}>
    //         <input 
    //         type="color"  
    //         name="boja" 
    //         value={formaPodaci.boja}
    //         onChange={promjenaUlaza}
    //         />
    //         </div>
    //     </td>
    //     <td>
    //       <div>
    //         <input
    //         type="date"
    //         name="date"
    //         value={formaPodaci.date}
    //         onChange={promjenaUlaza}
    //         />
    //       </div>
    //     </td>
    //     <td>
    //       <div>
    //         <input
    //         placeholder="Slika"
    //         type="text"
    //         name="slika"
    //         value={formaPodaci.slika}
    //         onChange={promjenaUlaza}
    //         />
    //       </div>  
    //     </td>
    //     <td>
    //       <Promjena rez={formaPodaci} id={id} postaviUredi={postaviUredi} dodaj={dodaj} />
    //     </td>
    //   </tr>
    //   );
    // }
    
  }
   
  export default Radionica;