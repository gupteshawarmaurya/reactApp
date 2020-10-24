import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/layout/navbar'
import Contact from './component/pages/contact';
import About from './component/pages/about';
import Home from './component/pages/home';

class App extends Component {
   render() {

      return (
         <Router>
            <div className="App">
               <Navbar />
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/about" component={About} />
               </Switch>
            </div>
         </Router>


      );
   }
}

export default App;


