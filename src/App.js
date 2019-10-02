import React from 'react';
import logo from './g.png';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"


function App() {


    return (

        <Router>
            <div className="App">
                <h1>
                    <Link  style={{ textDecoration: 'none', color: 'black' }} to={'/'} id="link">
                    <div id="logo" >
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div id="rest" >
                        eneric-co
                    </div>
                    </Link>
                    <br/><br/><br/>

                </h1>
                <div id={"links"}>
                    <li><Link to={'/Home'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/Products'} className="nav-link">Products</Link></li>
                    <li><Link to={'/About'} className="nav-link">About</Link></li>


                </div>
                <br/><br/><br/>
                <Switch>
                    <Route path='/Home' component={Home}/>
                    <Route path='/About' component={About}/>
                    <Route path='/Products' component={Products}/>
                </Switch>


            </div>
        </Router>

    );
}

export default App;
