import React from 'react';
import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/error';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Room} />
          <Route exact path="/rooms/:name" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    </div>
  );
}

export default App;
