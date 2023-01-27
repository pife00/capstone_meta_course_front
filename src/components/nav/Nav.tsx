import { Navbar } from "flowbite-react";
import logo from '../../assets/icons_assets/Logo .svg'
import { CenterPage } from "../center/CenterPage";

export const Nav = () => {
  return (
    <CenterPage>
    <Navbar
      fluid={true} 
      rounded={true}>
      <Navbar.Brand
     
      >
        
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="littel lemon Logo"
        />
      </Navbar.Brand>
      
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="font-Markazi" href="/" active={true}>Home</Navbar.Link>
        <Navbar.Link className="font-Markazi" href="#">About</Navbar.Link>
        <Navbar.Link className="font-Markazi" href="#">Menu</Navbar.Link>
        <Navbar.Link className="font-Markazi" href="#">Reservation</Navbar.Link>
        <Navbar.Link className="font-Markazi" href="#">Order Online</Navbar.Link>
        <Navbar.Link className="font-Markazi" href="#">Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    </CenterPage>

  );
};
