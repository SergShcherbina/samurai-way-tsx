import React, {Component} from "react";
import {Footer} from "../../Component/footer/ui/Footer";
import {Navbar} from "../../Component/navbar/ui/Navbar";
import {BrowserRouter} from "react-router-dom";
import {ConnectHeaderContainer} from "../../Component/header/ui/HeaderContainer";
import {Spinner} from "../../assets/spinner/Spinner";
import {Routing} from "./routing/Routing";
import styled from 'styled-components'
import {ConnectFriends} from "../../Component/friends/ui/FriendsContainer";

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
          <ConnectFriends/>
          <Footer />
        </AppStyle>
      </BrowserRouter>
    );
  }
}

const AppStyle = styled.div `
  min-height: calc(100vh - 20px) ;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  max-width: 1140px;
  margin: 10px auto;
`

const ContentBlock = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
`