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
        // if(this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <AppStyle>
                <ConnectHeaderContainer/>
                {this.props.isAuth ?
                    <>
                        <Navbar/>
                        <ContentBlock>
                            <Routing/>
                        </ContentBlock>
                        <ConnectFriends/>
                    </>
                    :
                    <div>
                        <LoginConnect/>
                    </div>
                }
                <Footer/>
            </AppStyle>
        );
    }
}

const AppStyle = styled.div`
  min-height: calc(100vh - 20px);
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  max-width: 1140px;
  margin: 10px auto;
`

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
`