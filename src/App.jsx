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
import Predavaci from "./components/Predavaci";
import PromjenaPredavac from "./components/PromjenaPredavac";
import UnosFormaPredavac from "./components/UnosFormaPredavac";
import RadionicePredavac from "./components/RadionicePredavac";
import NavbarAdmin from "./components/NavbarAdmin";
import UnosFormaOrganizacija from "./components/UnosFormaOrganizacija";
import RadioniceAdmin from "./components/RadioniceAdmin";
import PredavaciAdmin from "./components/PredavaciAdmin";
import OrganizacijeAdmin from "./components/OrganizacijeAdmin";
import PromjenaOrganizacija from "./components/PromjenaOrganizacija";

function App() {

  const [admin, postaviAdmina] = useState(false);


  return (
    <>
     <UserContext.Provider value={admin}>
     <Router>
    <Navbar postaviAdmina={postaviAdmina}/>
    <Switch>
      <Route exact path="/" component={Radionice} />
      <Route exact path="/radionice/edit/:id" component={Promjena} />
      <Route exact path="/radionice/create" component={UnosForma} />
      <Route exact path="/predavaci" component={Predavaci} />
      <Route exact path="/predavaci/edit/:id" component={PromjenaPredavac} />
      <Route exact path="/predavaci/create" component={UnosFormaPredavac} />
      <Route exact path="/predavaci/:ime" component={RadionicePredavac} />
      <Route path="/administracija">
        <NavbarAdmin />
        <Switch>
          <Route exact path="/administracija" component={RadioniceAdmin}/>
          <Route exact path="/administracija/predavaci" component={PredavaciAdmin} />
          <Route exact path="/administracija/organizacije" component={OrganizacijeAdmin} />
          <Route exact path="/administracija/radionice/create" component={UnosForma} />
          <Route exact path="/administracija/predavaci/create" component={UnosFormaPredavac} />
          <Route exact path="/administracija/organizacije/create" component={UnosFormaOrganizacija} />
          <Route exact path="/administracija/organizacije/edit/:id" component={PromjenaOrganizacija} />
        </Switch>
      </Route>
    </Switch>
  </Router>
     </UserContext.Provider>
     </>
  )
}

export default App
