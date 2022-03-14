import React, { useContext } from "react";
import { healthCareContext } from "../App";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  let context = useContext(healthCareContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="responsive">
      <Container>
        <Navbar>
          <Link to="/home" className="text-light text-decoration-none">
            <h4>Health Care Products</h4>
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="#features">Home</Nav.Link> */}
            <Nav>
              <Link
                to="/cart"
                className="header-icon text-light text-decoration-none"
              >
                <h3>
                  <ShoppingCartIcon />
                  &nbsp;<span className="count">{context.cartValue}</span>
                </h3>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
