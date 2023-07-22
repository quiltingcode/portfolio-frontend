import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../../assets/css/sidebar.css'

const SideBar = () => {
    return (
      <>
        <Nav
          className="col-md-3 d-md-block bg-light sidebar"
          activeKey="/home"
        >
          <div className="sidebar-sticky"></div>
          <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Picture of Kelly Hutchison"
            />
          </Navbar.Brand>
        </Container>
          <Navbar.Text>
            <h2>Kelly Hutchison</h2>
            <p>Junior Full Stack Developer</p>
          </Navbar.Text>
          <Nav.Item>
            <Nav.Link href="/home">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" >
              Contact Me
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
}

export default SideBar

