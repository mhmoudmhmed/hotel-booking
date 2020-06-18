import React, {Suspense, lazy} from 'react';
import Error from './pages/error';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Room = lazy(() => import('./pages/Room'));
const SingleRoom = lazy(() => import('./pages/SingleRoom'));

function App() {
  return (
    <div className="App">
      <>
        <Suspense fallback={<div className="loading">Loading.........</div>}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/rooms/" component={Room} />
              <Route exact path="/rooms/:name" component={SingleRoom} />
              <Route component={Error} />
            </Switch>
          </Router>
        </Suspense>
      </>
    </div>
  );
}

export default App;
