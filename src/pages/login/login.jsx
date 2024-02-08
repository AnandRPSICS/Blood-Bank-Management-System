import {
  Container,
  Image,
  Form,
  Stack,
  Button,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import groupDonationImg from "../../assets/group-don.jpg";
import manDonating from "../../assets/man-donating.jpg";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");
  //   const { setIsUserLogin, setUserInfo } = useContext(LoginContext);
  const [isAdminActive, setIsAdminActive] = useState(false);

  const tabSize = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const handleChanges = (e) => {
    const value = e.target.value;

    switch (e.target.name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        setIsPasswordValid(value.length >= 6);
        break;
      default:
        break;
    }
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
    if (form.checkValidity() === true && email && password) {
      sendToServer();
    }
  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  const sendToServer = () => {
    const userData = {
      email,
      password,
    };
    console.log("user data", userData);
  };

  return (
    <>
      <>
        <ToastContainer position="top-center">
          <Toast
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
          <Container
            fluid
            className="trapezoid-box trapezoid-box-login"
          ></Container>

          <Container fluid className="login-container ps-0">
            {!tabSize && (
              <div className="img-section login-img-section ps-0">
                <Image src={manDonating} alt="img" />
              </div>
            )}
            <Container className="login-form-container">
              <h1 className="login-welcome">Log in</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    onChange={handleChanges}
                    name="email"
                    value={email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Email is required.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>
                    {" "}
                    Email is valid.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    onChange={handleChanges}
                    name="password"
                    value={password}
                  />
                  {isPasswordValid && (
                    <Form.Control.Feedback>
                      {" "}
                      Good to go ✅.
                    </Form.Control.Feedback>
                  )}
                  <Form.Control.Feedback type="invalid">
                    Password is required.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    className="remember-check-box"
                    type="checkbox"
                    label="Remember me ?"
                  />
                </Form.Group>
                <p className="bottom-caption">
                  Need an account?{" "}
                  <span onClick={navigateSignup}> Sign up </span>
                </p>

                <Button type="submit" className="login-btn">
                  Login
                </Button>
              </Form>

              {!tabSize && (
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
    </>
  );
};
export default Login;
