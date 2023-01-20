import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logout, dbUser } = useContext(AuthContext);
  console.log(dbUser);
  console.log(user);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <button className="btn btn-light">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </button>
            <button className="btn btn-light">
              <Link to="/categories" className="text-decoration-none">
                Categories
              </Link>
            </button>
            <button className="btn btn-light">
              <Link to="/blogs" className="text-decoration-none">
                Blogs
              </Link>
            </button>
            {dbUser?.isSeller && !dbUser?.isAdmin && (
              <button className="btn btn-light">
                <Link to="/bookings" className="text-decoration-none">
                  Bookings
                </Link>
              </button>
            )}
            {!dbUser?.isSeller && !dbUser?.isAdmin && dbUser?.email && (
              <button className="btn btn-light">
                <Link to="/myproducts" className="text-decoration-none">
                  My Products
                </Link>
              </button>
            )}
            {dbUser?.isAdmin && (
              <button className="btn btn-light">
                <Link to="/allusers" className="text-decoration-none">
                  All Users
                </Link>
              </button>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {!user?.email ? (
            <button className="btn btn-light">
              <Link to="/login" className="text-decoration-none">
                LOGIN
              </Link>
            </button>
          ) : (
            <button onClick={logout} className="btn btn-light">
              <Link to="/" className="text-decoration-none">
                LOGOUT
              </Link>
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
