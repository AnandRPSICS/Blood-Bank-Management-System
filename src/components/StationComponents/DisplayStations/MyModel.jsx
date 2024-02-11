import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { FormSelect } from "react-bootstrap";
import { UserContext } from "../../../context/userContext";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [requiredUnits, setRequiredUnits] = useState("");
  const [date, setDate] = useState("");

  const { addNewReq } = useContext(UserContext);

  const handleClose = () => setShowModel(false);
  const handleReset = () => {
    setPatientName("");
    setDate("");
    setBloodGroup("");
    setPhoneNumber("");
    setRequiredUnits("");
    handleClose();
  };

  const handleSubmit = () => {
    console.log("handle submit mymodel.jsx");
    if (!patientName || !phoneNumber || !bloodGroup || !requiredUnits) {
      console.log(
        "patient Name",
        patientName,
        "phone number",
        phoneNumber,
        "blood group",
        bloodGroup,
        "required units",
        requiredUnits
      );
      setAlertMsg("All fields are mandatory");
      setShowAlert(true);
      setToastColor("danger");
      return;
    }
    // make this blood request
    sendData();
  };

  const sendData = () => {
    const reqObj = {
      name: patientName,
      phoneNumber,
      bloodGroup,
      requiredUnits,
      date,
      isReqAccepted: false,
      reqId: Date.now(),
    };

    addNewReq(reqObj);

    setShowAlert(true);
    setAlertMsg("Request Successfully Added.");
    setToastColor("success");
    setTimeout(() => {
      handleReset();
    }, 1500);
    // make this blood request
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
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
