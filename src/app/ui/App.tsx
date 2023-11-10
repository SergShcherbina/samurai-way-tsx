import React, {Component} from "react";
import {Footer} from "../../component/footer/Footer";
import {ConnectHeaderContainer} from "../../component/header/HeaderContainer";
import {Spinner} from "../../component/spinner/Spinner";
import styled from 'styled-components'
import {LoginConnect} from "../../pages/auth/ui/LoginConnect";
import {Main} from "../../component/main/Main";

type AppType = {
    initialized: boolean;
    initAppTC: () => void;
    isAuth: boolean
};

export class App extends Component<AppType> {
    componentDidMount() {
        this.props.initAppTC();
    }

    render() {
        if (!this.props.initialized) return <Spinner/>;

        return (
            <AppStyle>
                <ConnectHeaderContainer/>
                {this.props.isAuth
                    ? <Main isAuth={this.props.isAuth}/>
                    :<LoginConnect/>
                }
                <Footer/>
            </AppStyle>
        );
    }
}

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  min-height: 100vh;
`
