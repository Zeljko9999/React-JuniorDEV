import React from "react";
import styles from '/src/styles/Modal.module.css'
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";


//npm install react-icons

const Modal = ({ setShowModal, ime, id, broj_prijava}) => {

const [punoIme, postaviIme] = useState("");
const [email, postaviEmail] = useState("");
const [isValidIme, setIsValidIme] = useState(true);
const [isValidEmail, setIsValidEmail] = useState(true);
const [submitPrijava, setSubmitPrijava] = useState(false);

const handleChange1 = (e) => {
    const inputValue = e.target.value;
    postaviIme(inputValue);

    setIsValidIme(inputValue.length >= 2 && inputValue.length <= 40);


};

const handleChange2 = (e) => {
    const inputValue = e.target.value;
    postaviEmail(inputValue);

    const isValid = validateEmail(inputValue);
    setIsValidEmail(isValid);

};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

async function prijaviSe () {
    setSubmitPrijava(true);
    try {
      const response = await axios.get(`http://localhost:3001/radionice/${id}`);
      const currentBrojPrijava = response.data.broj_prijava;
  
      const updatedBrojPrijava = currentBrojPrijava + 1;
  
      await axios.patch(`http://localhost:3001/radionice/${id}`, {
        broj_prijava: updatedBrojPrijava,
      });

    } catch (error) {
      console.error('Error while incrementing broj prijava:', error);
    }
}


if (submitPrijava === false) {
  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Prijavi se na {ime}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>        
            <input type="text" id="ime" value={punoIme} className={styles.inputElement} placeholder="puno ime" onChange={(e) => handleChange1(e)} 
                    style={{ borderColor: isValidIme ? '' : 'red' }} />
                    {!isValidIme && <p style={{ color: 'red', margin: "0px auto" }}>Name must be between 2 and 40 characters.</p>}

            <input type="text" id="email" placeholder="email" className={styles.inputElement} value={email} onChange={(e) => handleChange2(e)}
                        style={{ borderColor: isValidEmail ? '' : 'red' }} />
                {!isValidEmail && <p style={{ color: 'red', marginTop: "0px" }}>Please enter a valid email address.</p>}

            <input className={styles.razlogPrijave} type="text" id="razlog" placeholder="razlog prijave" />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.prijaviBtn} onClick={() => prijaviSe()}>
                Prijavi se
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
else {
return (
    <>
    <div className={styles.darkBG} />
    <div className={styles.centered}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        <div className={styles.modalContent}>   
        <h2>Hvala na prijavi</h2>  
        <p>na {ime} radionicu!</p>   
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button className={styles.prijaviBtn} onClick={() => setShowModal(false)}>
              Natrag na radionice
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
)
}
};

export default Modal;