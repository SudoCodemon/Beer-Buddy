import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Beers from './Beers';
import NavBar from './NavBar';
import Checkout from './Checkout';
import Home from './Home';

function App() {

const [beers, setBeers] = useState([])
const [searchQuery, setSearchQuery] = useState("")

useEffect(() => {
  fetch("https://api.sampleapis.com/beers/ale")
  .then(res => res.json())
  .then(data => setBeers(data))
}, [])

const searchResults = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="App">
      <header className="App-header" >
        <NavBar/>
      </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/beers">
            <Beers beers={searchResults} setSearchQuery={setSearchQuery}/>
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
