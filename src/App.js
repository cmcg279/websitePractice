import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import logo from './resources/images/TeamTorres_Logo.jpg';
import andrewBacktake from './resources/images/Andrew_McGahon_Backtake.jpg';
import celticGrandPrix from './resources/images/Celtic_Grand_Prix.jpg'
import Euros from './resources/images/2017_Euros.jpg'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const navInstance = (
      <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Ryan McCartney BJJ</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Contact Us</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )


    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <h1>RyAn McCartney</h1>
      {navInstance}
      <Parallax bgImage={celticGrandPrix} strength={90} >
      <br/>
          <h1 style={{color: 'white'}} > Hide yo heels, hide yo wife</h1>
          <div style={{
            width: 800,
            height: 600,
        }}></div>

      </Parallax>
      <br/>
      <h1> Rathfriland is shit</h1>
      <br/>
      <Parallax bgImage={Euros} strength={100} >
      <br/>
          <h1 style={{color: 'white'}} > Ooh ah up the ra</h1>
          <div style={{
            width: 800,
            height: 600,
        }}></div>

      </Parallax>

        <p className="App-intro">
          Brazillian Jiu Jitsu is cool
        </p>
      </div>
    );
  }
}

export default App;
