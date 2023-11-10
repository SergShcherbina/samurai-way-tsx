import styled from "styled-components";


export const Footer = () => {
  return <FooterStyle>footer</FooterStyle>;
};

const FooterStyle = styled.footer `
  font-size: 32px;
  text-align: center;
  background-color: var(--block-color);
  box-shadow: var(--box-shadow-blocks);
  padding: 20px;
  width: 100%;
`