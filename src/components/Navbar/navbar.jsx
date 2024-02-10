import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { BiDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
import { Toast, ToastContainer } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./navbar.css";

const NavbarComponent = () => {
  const { activeUser, getActiveUser, isUserLoggedIn, logout } =
    useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // get active user data to context from LS
    getActiveUser();
  }, []);
  const redirectSignup = () => {
    navigate("/signup");
  };
  const redirectLogin = () => {
    navigate("/login");
  };

  const redirectHome = () => {
    navigate("/");
  };

  const logoutUser = () => {
    // here remove active user data from LS
    logout();

    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  // redirect donors only user log in.
  const redirectDonors = () => {
    navigate("/donors");
  };

  const redirectRequests = () => {
    navigate("/requests");
  };

  return (
    <>
      <Navbar id="custom-navbar-styles" fixed="top" data-bs-theme="dark">
        <Nav className="nav-left me-auto">
          <Navbar.Brand className="navbar-brand-logo" onClick={redirectHome}>
            <Image
              className="logo"
              src="https://miro.medium.com/v2/da:true/resize:fit:700/1*KJACFKJ0GKtnhgR7OmlPFA.gif"
              alt="logo"
            />
          </Navbar.Brand>
        </Nav>

        <Nav className={`nav-right ${isUserLoggedIn && "nav-right-login"}`}>
          <>
            <>
              <div className="find-stations fw-bold" onClick={redirectDonors}>
                Donors <BiDonateBlood className="charging-icon" />
              </div>
              <div className="find-stations fw-bold" onClick={redirectRequests}>
                View Requests <MdBloodtype className="charging-icon" />
              </div>

              {/* show this only when a user logged in  */}
              {/* <Nav.Link>
                <Button onClick={userLogout} className="login-btn-2">
                  {" "}
                  Log out
                </Button>
              </Nav.Link> */}
            </>
            {isUserLoggedIn ? (
              <Stack direction="horizontal" className="nav-btns">
                <Nav.Link>
                  <Button onClick={logoutUser} className="login-btn-2">
                    {" "}
                    Log Out
                  </Button>
                </Nav.Link>
              </Stack>
            ) : (
              <Stack direction="horizontal" className="nav-btns">
                <Nav.Link>
                  <Button onClick={redirectSignup} className="login-btn-2">
                    {" "}
                    Sign Up
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button onClick={redirectLogin} className="login-btn-2">
                    {" "}
                    Log In
                  </Button>
                </Nav.Link>
              </Stack>
            )}
          </>
        </Nav>
      </Navbar>
      <ToastContainer position="top-center">
        <Toast
          className="toast-msg"
          bg="primary"
          onClose={() => setShowAlert(false)}
          show={showAlert}
          animation={true}
          delay={2000}
          autohide
        >
          <Toast.Body>Login First.</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
export default NavbarComponent;
