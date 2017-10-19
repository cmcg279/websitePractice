import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import gimp from './resources/images/gimp.jpg'
import  bigdog from './resources/images/bigdog.jpg'
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
        <a href="#">Garys a gimp.com</a>
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
      <h1>Gary Loves it</h1>
      {navInstance}
      <Parallax bgImage={gimp} strength={90} >
      <br/>
          <h1 style={{color: 'white'}} > Close up aye</h1>
          <div style={{
            width: 800,
            height: 600,
        }}></div>

      </Parallax>
      <br/>
      <h1>Wyadeeeeeeeeeeeeeerrrrrr</h1>
      <br/>
      <Parallax bgImage={bigdog} strength={100} >
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
