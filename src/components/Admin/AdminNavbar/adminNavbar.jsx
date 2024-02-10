import { Container, Navbar } from "react-bootstrap";
import "./adminNavbar.css";
const AdminNavbar = () => {
  return (
    <div id="admin-navbar-container">
      <Navbar id="admin-navbar" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            Blood Bank Management System{" "}
            <span className="brand-connect"> </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
