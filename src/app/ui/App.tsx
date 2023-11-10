import React, {Component} from "react";
import {Footer} from "../../Component/footer/ui/Footer";
import {Navbar} from "../../Component/navbar/ui/Navbar";
import {ConnectHeaderContainer} from "../../Component/header/ui/HeaderContainer";
import {Spinner} from "../../Component/spinner/Spinner";
import {Routing} from "./routing/Routing";
import styled
    from 'styled-components'
import {ConnectFriends} from "../../Component/friends/ui/FriendsContainer";
import {LoginConnect} from "../../Component/auth/ui/LoginConnect";
import {Redirect} from "react-router-dom";
import {Main} from "../../Component/Main/Main";

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
