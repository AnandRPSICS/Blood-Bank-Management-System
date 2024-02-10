import {
  Container,
  Image,
  Form,
  Button,
  Stack,
  Row,
  Col,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import groupDonationImg from "../../assets/group-don.jpg";
import { useContext } from "react";
import { UserContext } from "../../context/userContext.jsx";
import "./signup.css";

const Signup = () => {
  const { activeUser, allUsers, getAllUsers, newRegistration, isMailUnique } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("donor");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");

  const tabSize = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleChanges = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "name":
        setName(value);
        break;
      case "role":
        setRole(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "bloodGroup":
        setBloodGroup(value);
        break;
      case "password":
        setPassword(value);
        setIsPasswordValid(value.length >= 6);
        break;
      default:
        break;
    }
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setValidated(true);
    if (!isPasswordValid) {
      setShowAlert(true);
      setAlertMsg("Password must be at least 6 characters long.");
      return;
    }
    const formValidated = form.checkValidity();
    if (!formValidated) {
      setShowAlert(true);
      setAlertMsg("Please fill all the fields");
      setToastColor("danger");
      return;
    }
    
    if (name && role && email && bloodGroup && phoneNumber && password ) {
      if (isMailUnique(email)) {
        sendToServer();
      } else {
        setShowAlert(true);
        setAlertMsg("Email already exists");
        setToastColor("danger");
        return;
      }
    } else {
      setShowAlert(true);
      setAlertMsg("Please fill all the fields");
      setToastColor("danger");
      return;
    }
  };

  const sendToServer = () => {
    const userData = {
      userId: Date.now(),
      name,
      role,
      email,
      phoneNumber,
      bloodGroup,
      password,
      isAnyReqAccepted: false,
    };
    newRegistration(userData);
    setShowAlert(true);
    setAlertMsg("Registration successfull");
    setToastColor("success");
    setTimeout(() => {
      navigate("/login");
    }, 1500);

    console.log("userData", userData);
  };

  return (
    <>
      <ToastContainer position="top-center">
        <Toast
          style={{ color: "white" }}
          className="toast-msg"
          bg={toastColor}
          onClose={() => setShowAlert(false)}
          show={showAlert}
          animation={true}
          delay={2000}
          autohide
        >
          <Toast.Body>{alertMsg}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Container fluid className="login-page">
        <Container fluid className="trapezoid-box"></Container>
        <Container fluid className="login-container ps-0">
          {!tabSize && (
            <div className="img-section ps-0">
              <Image
                src="https://s.tmimgcdn.com/scr/1600x1000/213800/isometric-blood-donor-illustration-201103210-vector-illustration-concept_213887-original.jpg"
                alt="img"
              />
            </div>
          )}

          <Container className="login-form-container">
            <h1 className="login-welcome">Sign up</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChanges}
                  name="name"
                  value={name}
                  size="sm"
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  Please enter your Full Name.
                </Form.Control.Feedback>
                <Form.Control.Feedback>
                  {" "}
                  Looks Good {name}!.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Select
                  size="sm"
                  onChange={handleChanges}
                  value={role}
                  name="role"
                >
                  <option value="donor">Donor</option>
                  <option value="recipient">Recipient</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Select
                  size="sm"
                  onChange={handleChanges}
                  value={bloodGroup}
                  name="bloodGroup"
                  required
                >
                  <option value=""> Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Select Blood Group.
                </Form.Control.Feedback>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-2" controlId="validationCustom02">
                    <InputGroup hasValidation>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Phone Number"
                        onChange={handleChanges}
                        name="phoneNumber"
                        value={phoneNumber}
                        size="sm"
                      />
                      <Form.Control.Feedback type="invalid">
                        Phone Number is required.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      onChange={handleChanges}
                      name="email"
                      value={email}
                      size="sm"
                    />
                    <Form.Control.Feedback type="invalid">
                      Email is required.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>
                      {" "}
                      Email is valid.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={handleChanges}
                  name="password"
                  size="sm"
                  value={password}
                />
                {isPasswordValid && (
                  <Form.Control.Feedback>
                    {" "}
                    Password is strong ✅.
                  </Form.Control.Feedback>
                )}
                <Form.Control.Feedback type="invalid">
                  Password is required.
                </Form.Control.Feedback>
              </Form.Group>

              <p className="bottom-caption">
                Already have an account?{" "}
                <span onClick={navigateLogin}> Login </span>
              </p>
              <Button type="submit" className="login-btn">
                Signup
              </Button>
            </Form>

            {tabSize && (
              <div>
                <Stack className="footer" direction="horizontal" gap={3}>
                  <div>Copyright Policy</div>
                  <div>Privacy Policy</div>
                  <div>Send feedback</div>
                </Stack>
                <Stack className="footer-2" direction="horizontal" gap={3}>
                  <div>User</div>
                  <div>Privacy Policy</div>
                  <div>Send feedback</div>
                  <div className="ms-auto credit">Blood Bank © 2024</div>
                </Stack>
              </div>
            )}
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default Signup;
