import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                <Link to="/sessions" id="menu_home_link">Accelerate Agility</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/sessions" id="menu_sessions_link"><NavItem>Sessions</NavItem></LinkContainer>
              <LinkContainer to="/attendees" id="menu_attendees_link"><NavItem>Attendees</NavItem></LinkContainer>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
