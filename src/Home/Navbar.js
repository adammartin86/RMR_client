import React, { useState } from 'react';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   Button 
} from 'reactstrap';

const Sidebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return ( 
        <Navbar color="dark" light expand="md">
            <NavbarBrand className="NavBrand" style={{color: "lightgreen", width:"100%"}} href="/">Rate My Rig</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button style={{color: "lightgreen"}} onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
     );
}
 
export default Sidebar;