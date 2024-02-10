import NavbarComponent from "../../components/Navbar/navbar";
import Footer from "../../components/HomeComponents/footer";
import Displaystations from "../../components/StationComponents/DisplayStations/DisplayStations";
import { useContext } from "react";
import { useEffect } from "react";

const DonorsList = () => {
  // const { setUserInfo, setIsUserLogin } = useContext(LoginContext);
  // useEffect(() => {
  //   let userData = JSON.parse(localStorage.getItem("user-data"));
  //   if (userData.token) {
  //     setUserInfo(userData);
  //     setIsUserLogin(true);
  //   }
  // }, []);
  return (
    <div>
      <NavbarComponent />
      <Displaystations />
      <Footer />
    </div>
  );
};
export default DonorsList;
