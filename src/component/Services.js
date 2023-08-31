import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super fast & Free Delivery</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-colum-2">
              <MdSecurity className="icon" />
              <h3>Non-contact shipping</h3>
            </div>
            <div className="services-colum-2">
              <GiReceiveMoney className="icon" />
              <h3>Money-back Guaranteed</h3>
            </div>
          </div>
          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    ${"" /* color: #5138ee; */}
    color: #000;
  }
  @media (max-width: 1300px) {
    .grid-three-column {
      grid-template-columns: repeat(1, 1fr);
    }

    .services-1 {
      ${"" /* flex-direction:row; */}
      width:70%;
    }
    .services-2 {
      flex-direction: row;
      width: 70%;
    }
    .services-colum-2 {
      gap: 2rem;
    }
    .services-3 {
      width: 70%;
    }

    .grid {
      justify-items: center;
    }
  }
  @media (max-width: 1100px) {
    .services-2 {
      flex-direction: column;
      height: 64rem;
    }
    .services-colum-2 {
      flex-direction: column !important;
    }
  }
`;
export default Services;
