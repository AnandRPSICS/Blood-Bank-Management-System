import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { BiDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import "./styles/explanationBox.css";

const ExplanationBox = ({ boxNo }) => {
  const iconStyles = {
    fontSize: "40px",
    color: "#e11b22",
  };
  const box1 = {
    icon: <MdBloodtype style={iconStyles} />,
    heading: "Register as a Donor",
    description:
      "Register as a donor and view requests from patients in need of blood",
  };
  const box2 = {
    icon: <FaHandshake style={iconStyles} />,
    heading: "Are you a patient? need blood",
    description:
      "Register as a receipient and request for blood donors will accept your request",
  };
  const box3 = {
    icon: <BiDonateBlood style={iconStyles} />,
    heading: "View all donors list",
    description: "View all donors list and search or filter by blood group",
  };

  let activeBox = box1;
  if (boxNo === "box-2") {
    activeBox = box2;
  } else if (boxNo === "box-3") {
    activeBox = box3;
  }
  return (
    <Container className="explanation-box">
      <div>{activeBox.icon}</div>
      <h6>{activeBox.heading}</h6>
      <p>{activeBox.description}</p>
    </Container>
  );
};
export default ExplanationBox;

ExplanationBox.propTypes = {
  boxNo: PropTypes.string.isRequired,
};
