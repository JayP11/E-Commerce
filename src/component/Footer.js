import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          {/* <div className="grid grid-two-column"> */}
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "flex-start",
              justifyContent: "center",
            }}>
            <div>
              <p
                style={{ fontSize: "20px", fontWeight: "800" }}
                className="talk_para">
                Ready to get started? Talk to us today
              </p>
            </div>
            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Apple store.</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#" style={{ display: "flex", flexWrap: "wrap" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR E-MAIL"
                  style={{ marginTop: "2rem" }}
                />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="https://discord.gg/apple">
                    <FaDiscord className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/apple">
                    <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/apple">
                    <FaLinkedin className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <a
                href="tel:8040455150"
                style={{ color: "#fff", fontSize: "19px" }}>
                +91 80-4045-5150
              </a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>@{new Date().getFullYear()} Apple Inc. All rights reserved.</p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background-color: black;
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    width: 60rem;
    height: 14rem;
    display: flex;
    margin: auto;
    /* padding: 5rem 10rem; */
    padding-left: 3rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 13rem 0 4rem 0 !important;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }

  @media (max-width: 1300px) {
    .container {
      max-width: 100rem;
    }

    .grid {
      gap: 5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    footer {
      padding: 13rem 0 4rem 0 !important;
    }

    ${
      "" /* .contact-short {
      transform: translateY(30%);
    } */
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      transform: translateY(60%);
    }
  }

  .grid {
    gap: 2rem;
  }
  footer {
    padding-top: 4rem;
  }

  @media (max-width: 480px) {
    .contact-short {
      padding-left: 1rem;
    }

    .talk_para {
      text-align: left;
      font-size: 16px !important;
    }
  }
`;

export default Footer;

// @media (max-width: 1400px){
//     .container{
//         max-width: 95rem !important;
//     }

//     .contact-short{
//         max-width: 50vw !important;
//         padding: 2rem;
//     }
//   }
