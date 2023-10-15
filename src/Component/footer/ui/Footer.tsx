import styled from "styled-components";


export const Footer = () => {
  return <FooterStyle className="footer-wrapper">footer</FooterStyle>;
};

const FooterStyle = styled.div `
  font-size: 32px;
  text-align: center;
  grid-column: 1 / 3;
  background-color: #ffffff;
  border: 2px solid #ececec;
  border-radius: 10px;
  padding: 20px;
`