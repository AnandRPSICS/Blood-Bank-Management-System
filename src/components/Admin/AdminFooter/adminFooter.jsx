import {Row, Col, Container } from "react-bootstrap";
import "./adminFooter.css";
const AdminFooter = () => {
  return (
    <Container fluid className="admin-footer">
      <Row>
        <Col>
         <p> Copyright © 2024</p>
         <p>All rights reserved by Blood Bank Management System</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminFooter;
