import { Form, InputGroup, Stack } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import "./styles/footer.css";

const Footer = () => {
  const iconStyle = {
    fontSize: "25px",
  };
  const smallLaptop = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  const tabSize = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="my-footer">
      <div>
        <Stack>
          <h4 className="footer-logo">Blood Bank</h4>
          <InputGroup style={{ width: "193px" }} className="footer-mail">
            <InputGroup.Text>
              <AiOutlineMail />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Enter Your Email" />
          </InputGroup>
          <div className="socialmedia-icons">
            <FaSquareInstagram style={iconStyle} />
            <AiFillFacebook style={iconStyle} />
            <AiFillTwitterSquare style={iconStyle} />
            <AiFillGoogleCircle style={iconStyle} />
          </div>
        </Stack>
        {!smallLaptop && (
          <Stack className="my-stack">
            <p>Links</p>
            <p>Home</p>
            <p>Support</p>
            <p>About </p>
          </Stack>
        )}

        {!tabSize && (
          <>
            <Stack className="my-stack">
              <p>Services</p>
              <p>Insurance</p>
              <p>Legal</p>
              <p>Site Map</p>
            </Stack>

            <Stack className="my-stack">
              <p>About </p>
              <p>Accessability</p>
              <p>Enviornment</p>
              <p>Branches</p>
            </Stack>

            <Stack className="my-stack">
              <p>Contact us</p>
              <p>(+91) 123-456-7890</p>
              <p>bloodbank@gmail.com</p>
            </Stack>
          </>
        )}
        <Stack className="download-app-stack my-stack">
          <p>Download App</p>
          <img
            src="https://pbs.twimg.com/media/F8K8X3_XMAAKWYp?format=jpg&name=small"
            alt="play-store"
          />
          <img
            src="https://pbs.twimg.com/media/F8K9Y0mXUAA7itL?format=png&name=small"
            alt="play-store"
          />
        </Stack>
      </div>
      <div className="footer-credit">
        <p>© 2024 Blood Bank </p>
        <div>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
