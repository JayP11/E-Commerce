import HeroSection from "./component/HeroSection";
import { useProductContext } from "./context/ProductContext";
// import { AppContext } from "./context/ProductContext";
// import { React, useContext } from "react";

const About = () => {
  // const myName = useContext(AppContext);
  const {myName} = useProductContext();

  const data = { name: "Apple E-commerce" };
  return (
    <>
      {myName}
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
