import { useState } from 'react'
import { useContext } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from "./components/Context"
import Navbar from "./components/Navbar";
import Radionice from "./components/Radionice";
import Promjena from "./components/Promjena";
import UnosForma from "./components/UnosForma";
//import Predavaci from "./components/Predavaci";

function App() {

  const [admin, postaviAdmina] = useState(false);

  const handleAdminLogIn = (bool) => {
    postaviAdmina(bool);
  }


  return (
    <>
     <UserContext.Provider value={admin}>
     <Router>
        <Navbar postaviAdmina={postaviAdmina}/>
         <Switch>
          <Route exact path="/" component={Radionice} />
          <Route exact path="/radionice/edit/:id" component={Promjena} />
          <Route exact path="/radionice/create" component={UnosForma} />
        </Switch>
     </Router>
     </UserContext.Provider>
     </>
  )
}

export default App
