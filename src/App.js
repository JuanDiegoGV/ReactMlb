import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inicio from './components/Inicio';
import Jugador from './components/Jugador';
import Jugadores from './components/Jugadores';
import Lista from './components/Lista';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path="/jugadores/jugador/:id" exact>
          <Jugador />
        </Route>

        <Route path="/jugadores/:nombre" exact>
          <Lista />
        </Route>

        <Route path="/jugadores" exact>
          <Jugadores />
        </Route>

        <Route path="/" exact>
          <Inicio />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
