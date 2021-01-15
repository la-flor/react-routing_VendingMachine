import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Soda from './Soda';
import Chips from './Chips';
import Chocolate from './Chocolate';
import Home from './Home';
import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/chocolate">
          <Chocolate />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
