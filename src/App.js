import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Home.js';
import Shop from './Shop.js';
import Cart from './Cart.js';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* using Bootstrap to create navbar and link to each page */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Jess's Boutique</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/items">Shop</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>

        </Nav>
      </Navbar>
      {/* creating route links */}
      <Switch>
        <Route path="/cart">
          <Cart/>
        </Route>

        <Route path="/items">
          <Shop/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
