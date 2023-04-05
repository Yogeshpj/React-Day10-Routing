import { Outlet, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {Container} from "react-bootstrap";

const Dlayout = () => {
    return (
      <>
      <Navbar bg='dark' variant="light">
          <Container>
            <Navbar.Brand href="#home">
            <img src={'https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616554.jpg?size=626&ext=jpg&ga=GA1.2.531790826.1680080683&semt=ais'} width={60} height={60} alt="Flower.jpg" />
            </Navbar.Brand>
        <Nav>
          <ul>
              <Link to="/">Home</Link>
          </ul>
              <ul>
              <Link to="/About">About</Link>
              </ul>
              <ul>
              <Link to="/Destination">Destination</Link>
              </ul>
              <ul>
              <Link to="/Contact">Contact</Link>
              </ul>
              <ul>
              <Link to="/Form">Registration </Link>
              </ul>
  
        </Nav>
        </Container>
        </Navbar>
  
        <Outlet />
      </>
    )
  };
  
  export default Dlayout;