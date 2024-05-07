import axios from "axios";
import { useState } from "react";
import stil from '/src/styles/RadionicaAdmin.module.css'
 
function BrisanjeOrganizacija(props) {
 
  async function brisiPodatak() {
    const confirmDelete = window.confirm("Are you sure you want to delete this data?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:3001/organizacije/${props.id}`);
      props.dodaj(stanje => stanje.filter(el => el.id != props.id));
     }
    }   

  return (
    <button className={stil.brisiButton} onClick={brisiPodatak}></button>
  );
}
 
export default BrisanjeOrganizacija;