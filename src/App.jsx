import { useState } from 'react'
import { useContext } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from "./components/Context"
import Navbar from "./components/Navbar";
import Radionice from "./components/Radionice";
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

        </Switch>
     </Router>
     </UserContext.Provider>
     </>
  )
}

export default App
