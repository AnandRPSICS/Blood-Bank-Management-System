import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { FormSelect } from "react-bootstrap";

// donation request model for get blood
const MyModel = ({
  showModel,
  setShowModel,
  getAllDonors,
  setAlertMsg,
  setShowAlert,
  setToastColor,
}) => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [requiredUnits, setRequiredUnits] = useState("");

  const handleClose = () => setShowModel(false);
  const handleReset = () => {
    console.log("inside handle reset myModel.jsx");
    setPatientName("");
    setDate("");
    setBloodGroup("");
    setPatientAge("");
    setRequiredUnits("");
    handleClose();
  };

  const handleSubmit = () => {
    console.log("handle submit mymodel.jsx");
  };
  return (
    <>
      <Modal show={showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="model-heading">Requet Blood</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                type="text"
                placeholder="Patient Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                placeholder="Patient Age"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <FormSelect
                rows={3}
                onChange={(e) => setBloodGroup(e.target.value)}
                value={bloodGroup}
              >
                <option value="">Required Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </FormSelect>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                value={requiredUnits}
                onChange={(e) => setRequiredUnits(e.target.value)}
                type="number"
                placeholder="Required Units"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="date"
                rows={3}
                type="date"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
MyModel.propTypes = {
  showModel: PropTypes.bool,
  setShowModel: PropTypes.func,
  setAlertMsg: PropTypes.func,
  setShowAlert: PropTypes.func,
  setToastColor: PropTypes.func,
  getAllDonors: PropTypes.func,
};
export default MyModel;
