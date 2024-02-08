import Navbar from "../../components/Navbar/navbar";
import HomeWelcome from "../../components/HomeComponents/HomeWelcome";
import Footer from "../../components/HomeComponents/footer";
import YellowBanner from "../../components/HomeComponents/YellowBanner";
import Explanation from "../../components/HomeComponents/explanation";
import Network from "../../components/HomeComponents/network";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeWelcome />
      <YellowBanner />
      <Explanation />
      <Network />
      <Footer />
    </div>
  );
};
export default Home;
