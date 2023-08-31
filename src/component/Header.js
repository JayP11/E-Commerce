import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { BsApple } from "react-icons/bs";

const Header = () => {
  return (
    <MainHeder>
      <NavLink to="/">
        <BsApple style={{paddingLeft:"20px",color:"black" ,fontSize:"50px"}}/>
        {/* <h2 style={{paddingLeft:"20px"}}>TechWorld</h2> */}
        {/* <img src="./images/logo.png" alt="logo" /> */}
      </NavLink>
      <Nav />
    </MainHeder>
  );
};

const MainHeder = styled.header`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;

export default Header;
