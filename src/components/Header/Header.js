import React from "react";
import "./Header.css";
import { Navbar, Nav,  } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div>
        
          <Navbar className="justify-content-end bg-dark" variant="dark">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar>
      </div>

      <div className="headings">
        <h1>Make a Club of professionals</h1>
      </div>
    </div>
  );
};

export default Header;
