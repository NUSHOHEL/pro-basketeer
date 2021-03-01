import React from "react";
import'./Header.css'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
  return (


    <div>
    <div>
      <container>
        
      <Navbar className="justify-content-end bg-dark" variant="dark" >
    <Nav >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar>
      </container>

    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  
    </div>

    
      <div className='headings'>

      <h1>Make a Club of professionals</h1>
      </div>
    </div>


  );
};

export default Header;
