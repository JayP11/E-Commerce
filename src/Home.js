import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Trusted from "./component/Trusted";

const Home = () => {
  const data = { name: "Apple store" };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted/>
    </>
  );
};

export default Home;
