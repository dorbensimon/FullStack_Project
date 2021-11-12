import './App.css';
import { useState } from 'react';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';


function App() {

  const[sidToggle,setsidToggle]=useState(false)

  //open and close the hamburger menu
  const ClickHamburger=()=>{
  setsidToggle(!sidToggle)
   }


  return (
    <Router>
      <Navbar ClickHamburger={ClickHamburger}/>
      {/**SideDrawer its the mobile navbar*/}
      <SideDrawer show={sidToggle} ClickHamburger={ClickHamburger} />
      <Backdrop show={sidToggle} ClickHamburger={ClickHamburger}/>
      <main>
        <Switch> {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route exact path='/' component={HomeScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route exact path='/cart' component={CartScreen}/>
        </Switch>
      </main>
      {/**HomeScreen*/}
      {/**cardScreen*/}
    </Router>
  );
}

export default App;
