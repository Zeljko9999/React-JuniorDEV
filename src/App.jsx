import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Radionice from "./components/Radionice";

function App() {


  return (
    <>
     <Router>
        <Navbar/>
         <Switch>
          <Route exact path="/" component={Radionice} />
        </Switch>
     </Router></>
  )
}

export default App
