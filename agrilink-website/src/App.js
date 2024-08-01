import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Marketplace from './Components/Marketplace';
import GovernmentSchemes from './Components/GovernmentSchemes';
import DamageAlerts from './Components/DamageAlerts';
import BuyerDetails from './Components/BuyerDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Feature />
        <Offer />
        <About />
        <Contact />
        <Routes>



          <Route path="/marketplace" exact component={Marketplace} />
          <Route path="/government-schemes" component={GovernmentSchemes} />
          <Route path="/damage-alerts" component={DamageAlerts} />
          <Route path="/buyer-details/:id" component={BuyerDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

