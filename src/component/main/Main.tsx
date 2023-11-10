import React from 'react';
import {Navbar} from "../navbar/Navbar";
import {Routing} from "../../app/ui/routing/Routing";
import {ConnectFriends} from "../friends/FriendsContainer";
import styled from "styled-components";
import {Redirect} from "react-router-dom";

export const Main = (props: { isAuth: boolean }) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <RootMain>
            <Navbar/>
            <Routing/>
            <ConnectFriends/>
        </RootMain>
    );
};

const RootMain = styled.main`
  display: grid;
  grid-template-columns: 2fr 670px 3fr;
  gap: 10px;
  margin: 0 auto;
  max-width: 1140px;
  flex-grow: 1;
`
