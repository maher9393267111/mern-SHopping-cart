
import './App.css';
import HomeScreen from  './pages/Home'
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar.js'
import SideDrawer from './components/SideDrawer.js'
import Backdrop from './components/backdrop.js'

function App() {
const [sideToggle,setSideToggle] =useState(false)

  return (
<Router>

<div className="App">

<Navbar  click={() => setSideToggle(true)} />

<SideDrawer  show={sideToggle}  click={()=>setSideToggle(false)} />

<Backdrop  show={sideToggle}  click ={()=>setSideToggle(false) } />


<Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>



      </div>
</Router>

  );
}

export default App;
