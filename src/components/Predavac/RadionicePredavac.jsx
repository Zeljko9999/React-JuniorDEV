import Radionice from "../Radionica/Radionice";
import { useParams } from 'react-router-dom';

function RadionicePredavac() {

    const { ime } = useParams();

  return (
    <>
    <Radionice predavac={ime}/>
    </>
  )
 }; 
export default RadionicePredavac;