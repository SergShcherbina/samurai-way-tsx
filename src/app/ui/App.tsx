import React, {Component} from "react";
import {Footer} from "../../Component/footer/ui/Footer";
import {Navbar} from "../../Component/navbar/ui/Navbar";
import {BrowserRouter} from "react-router-dom";
import {ConnectHeaderContainer} from "../../Component/header/ui/HeaderContainer";
import {Spinner} from "../../assets/spinner/Spinner";
import {Routing} from "./routing/Routing";
import styled from 'styled-components'

type AppType = {
  initialized: boolean;
  initAppTC: () => void;
};

export class App extends Component<AppType> {
  componentDidMount() {
    this.props.initAppTC();
  }
  render() {
    if (!this.props.initialized)  return <Spinner />;

    return (
      // для размещения на gh-pages и корректной работы путей добавить basename={process.env.PUBLIC_URL}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppStyle>
          <ConnectHeaderContainer />
          <Navbar />
          <ContentBlock>
            <Routing/>
          </ContentBlock>
          <Footer />
        </AppStyle>
      </BrowserRouter>
    );
  }
}

const AppStyle = styled.div `
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 10px;
  max-width: 1140px;
  margin: auto;
  padding: 10px;
`

const ContentBlock = styled.div `
  box-shadow: 0 0 5px 1px #e5e5e5;
  border-radius: 10px;
  border: 2px solid #f3f3f3;
`