import { BsFillCarFrontFill } from "react-icons/bs";
import { MdElectricCar } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { BiDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
import "./styles/yellowBanner.css";
const YellowBanner = () => {
  const isTab = useMediaQuery({
    query: "(max-width: 1008px)",
  });
  return (
    <div className="yellow-banner banner-animation">
      <div>100+ New Monthly Donors</div>
      <BiDonateBlood />
      <div>1000+ Active Users </div>
      {!isTab && (
        <>
          <MdBloodtype />
          <div>Donate Blood</div>
          <BiDonateBlood />
          <div>Save lifes</div>
          <MdBloodtype />
        </>
      )}
    </div>
  );
};
export default YellowBanner;
