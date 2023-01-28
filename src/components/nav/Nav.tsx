import { Navbar } from "flowbite-react";
import logo from '../../assets/icons_assets/Logo .svg'
import { CenterPage } from "../center/CenterPage";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <CenterPage>
    <Navbar
    role="navigation"
      fluid={true} 
      rounded={true}>
        <Link to="/">
      <Navbar.Brand
     role="logo"
      >
        
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="littel lemon Logo"
        />
      </Navbar.Brand>
        
        </Link>
      
      <Navbar.Toggle />
      <Navbar.Collapse
      role="menubar"
      >
        <Link to="/">
        <Navbar.Link role="menuitem" className="font-Markazi"  active={true}>Home</Navbar.Link>
        
        </Link>
        <Navbar.Link role="menuitem" className="font-Markazi" href="#">About</Navbar.Link>
        <Navbar.Link role="menuitem" className="font-Markazi" href="#">Menu</Navbar.Link>
        <Navbar.Link role="menuitem" className="font-Markazi" href="#">Reservation</Navbar.Link>
        <Navbar.Link role="menuitem" className="font-Markazi" href="#">Order Online</Navbar.Link>
        <Navbar.Link role="menuitem" className="font-Markazi" href="#">Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    </CenterPage>

  );
};
