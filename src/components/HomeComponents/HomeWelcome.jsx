import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import { InputGroup, Form } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import "./styles/homeComponent.css";
import bloodDonImg from "../../assets/group-don-bg.png";
const HomeWelcome = () => {
  // const [textContent, setText]
  const isTab = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className="home-welcome-container ms-0 ps-3">
      <Container className="home-welcome-left-container">
        <div>
          <h1>
            Be a <span className="charging-word"> Hero</span> in Someone's
            story. <br /> Donate Blood Today and make a <br />{" "}
            <span className="charging-word">Life-changing</span> Difference
          </h1>
          <p>
            {" "}
            <i>The gift of blood: a simple gesture, an immense impact. </i>
          </p>
        </div>
      </Container>
      <Container className="home-welcome-img-div">
        <Image src={bloodDonImg} alt="Blood donating" />
      </Container>
    </div>
  );
};
export default HomeWelcome;
