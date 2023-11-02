import styled from "styled-components";


export const Footer = () => {
  return <FooterStyle>footer</FooterStyle>;
};

const FooterStyle = styled.footer `
  font-size: 32px;
  text-align: center;
  grid-column: 1 / 4;
  background-color: var(--block-color);
  box-shadow: var(--box-shadow-blocks);
  border-radius: 10px;
  padding: 20px;
`